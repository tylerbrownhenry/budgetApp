import Item from '../item';
import data from './bill.samples';
const {defaults, required} = data;

/**
 * Creates a new Bill
 * @class
 */
export default class Bill extends Item {
    constructor(input) {
        super(input, defaults, required);
        this.set('apr', this.get('apr') / 100);
        const superSet = super.set;
        const effectsCalcs = [
            'apr',
            'payment',
            'balance',
            'periods'
        ];

        const effectsPeriods = [
            'balance',
            'apr',
            'payment'
        ];

        const effectsPayment = [
            'apr',
            'periods'
        ];

        this._set = this.set; // Keeping super.set
        
        /**
         * Setter
         * @param  {string} prop
         * @param  {string|number} value
         */
        this.set = (prop, value) =>{
            if(prop === 'apr'){
                value = value / 100;
            }
            this._set(prop, value);
            if(effectsCalcs.indexOf(prop) !== -1){
                const calcPayment = effectsPayment.indexOf(prop) !== -1;
                const calcPeriods = effectsPeriods.indexOf(prop) !== -1;
                this.runAutoCalcs(calcPeriods, calcPayment);
            }
            return this.get(prop);
        };

        /**
         * Given balance and payment, calculates the number of payments needs,
         * and returns amortization of all payments over time
         */
        this.estimateNumberOfPayments = () => {
            let balance = this.get('balance');
            const payment = this.get('payment');
            const apr = this.get('apr');

            if(balance <= 0 || !payment){
                return {
                    payments: null,
                    amortization: []
                };    
            }

            let i = 0;
            let fixedPayment = payment.toFixed(2);
            let totalBalance;
            let amortization = [];
            let startBalance;
            const interestRate = Math.pow(1 + (apr / 12), 1);

            while (balance > 0 && i < 360) {
                startBalance = balance;
                totalBalance = balance * interestRate;
                let interest =  totalBalance - balance;
                if (fixedPayment === totalBalance.toFixed(2)) {
                    balance -= fixedPayment;
                } else {
                    balance -= fixedPayment - interest;            
                } 
                amortization.push({
                    principle: (payment - interest).toFixed(2),
                    interest: interest.toFixed(2),
                    start: startBalance.toFixed(2),
                    end: balance.toFixed(2),
                    month: i + 1,
                });
                i++;
            }   
            return {
                payments: amortization.length,
                amortization
            };         
        }

        /**
         * Checks if can auto calculate numnber of periods
         */
        this.setPeriods = (calcPeriods)=> {
            const periods = this.get('periods');
            if(periods === null || calcPeriods){
                const resp = this.estimateNumberOfPayments();
                this._set('periods', resp.payments);
                this._set('amorization', resp.amortization);
            }
            return this.get('periods');
        }

        /**
         *  Calculates monthly interest rate
         */
        this.setInterestRate = () => {
            const apr = this.get('apr')
            return this._set('interestRate', apr / 12);
        }

        /**
         *  Checks if can auto calculate monthly payment
         */
        this.setPayment = (calcPayment) => {
            const periods = this.get('periods');
            const balance = this.get('balance');
            const payment = this.get('payment');
            const initValue = periods && balance && !payment;
            if(initValue || calcPayment){
                this._set('payment', this.estimatePayment());
            }
            return this.get('payment');
        }
       
        /**
         * Given number of interest rate, number of periods 
         * and balance, returns amount of a monthly payment
         */
        this.estimatePayment = () => {
            let payment;
            const interestRate = this.get('interestRate');
            const futureValue = this.get('futureValue');
            const periods = this.get('periods');
            const balance = this.get('balance');
            const type = this.get('type');
         
            if (!interestRate){
                return (balance + futureValue) / periods;
            }
            
            const interest = Math.pow(1 + interestRate, periods);
            payment = -interestRate * balance * (interest + futureValue) / (interest - 1);

            if (type === 1){
                payment /= (1 + interestRate);
            }

            return payment.toFixed(2) * -1;
        }

        /**
         * Calculates monthly interest rate
         * Auto Caluculates periods if given payment and balance
         * Auto Caluculates payment if given balance and periods
         */
        this.runAutoCalcs = (calcPeriods, calcPayment) => {
            this.setPeriods(calcPeriods);
            const interestRate = this.get('interestRate') !== this.setInterestRate();
            const payment = this.get('payment') !== this.setPayment(calcPayment);
            if(!payment || !interestRate){
                /*
                If interestRate or payment was changed, redo periods
                */
                this.setPeriods(calcPeriods);               
            }
            return this.get('interestRate');
        }

        this.runAutoCalcs(true);
    }
};