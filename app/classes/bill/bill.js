class Bill {
    constructor(name = 'Unnamed Bill', type = 0, balance = null, apr = 0, payment = null, periods = null, futureValue = 0) {
        let privateValues = {
            name,
            type,
            balance,
            apr: apr / 100,
            payment,
            periods,
            balance,
            amortization: [],
            futureValue,
            interestRate: 0,
            autoPeriods: !periods
        };
        
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
            'balance',
            'apr',
            'periods'
        ];

        /**
         * Gettter
         * @param  {string} prop
         */
        this.get = (prop) =>{
            return privateValues[prop];
        }
        
        /**
         * Setter
         * @param  {string} prop
         * @param  {string|number} value
         */
        this.set = (prop, value) =>{
            privateValues[prop] = value;
            if(prop === 'apr'){
                value = privateValues.apr = value / 100;
            }
            if(effectsCalcs.indexOf(prop) !== -1){
                const calcPayment = effectsPayment.indexOf(prop) !== -1;
                const calcPeriods = effectsPeriods.indexOf(prop) !== -1;
                this.runAutoCalcs(calcPeriods, calcPayment);
            }
            return value;
        }

        /**
         * Given balance and payment, calculates the number of payments needs,
         * and returns amortization of all payments over time
         */
        this.estimateNumberOfPayments = () => {
            if(privateValues.balance <= 0 || !privateValues.payment){
                return {
                    payments: null,
                    amortization: []
                };    
            }
            let i = 0;
            let fixedPayment = privateValues.payment.toFixed(2);
            let balance = privateValues.balance;
            let totalBalance;
            let amortization = [];
            let startBalance;
            const interestRate = Math.pow(1 + (privateValues.apr / 12), 1);

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
                    principle: (privateValues.payment - interest).toFixed(2),
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
            if(privateValues.periods === null || calcPeriods){
                const resp = this.estimateNumberOfPayments();
                privateValues.periods = resp.payments;
                privateValues.amortization = resp.amortization;
            }
            return privateValues.periods;
        }

        /**
         *  Calculates monthly interest rate
         */
        this.setInterestRate = () => {
            const apr = privateValues.apr;
            return privateValues.interestRate = apr / 12;
        }

        /**
         *  Checks if can auto calculate monthly payment
         */
        this.setPayment = (calcPayment) => {
            const periods = privateValues.periods;
            const balance = privateValues.balance;
            const payment = privateValues.payment;
            const initValue = periods && balance && !payment;
            if(initValue || calcPayment){
                privateValues.payment = this.estimatePayment();
            }
            return privateValues.payment;
        }

        /**
         * Calculates monthly interest rate
         * Auto Caluculates periods if given payment and balance
         * Auto Caluculates payment if given balance and periods
         */
        this.runAutoCalcs = (calcPeriods, calcPayment) => {
            this.setPeriods(calcPeriods);
            const interestRate = privateValues.interestRate !== this.setInterestRate();
            const payment = privateValues.payment !== this.setPayment(calcPayment);
            if(!payment || !interestRate){
                /*
                If interestRate or payment was changed, redo periods
                */
                this.setPeriods(calcPeriods);               
            }
            return privateValues.interestRate;
        }
        this.runAutoCalcs(true);
        
        /**
         * Given number of interest rate, number of periods 
         * and balance, returns amount of a monthly payment
         */
        this.estimatePayment = () => {
            let payment;
            const interestRate = privateValues.interestRate;
            const futureValue = privateValues.futureValue;
            const periods = privateValues.periods;
            const balance = privateValues.balance;
            const type = privateValues.type;
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
    }
}
  
module.exports = Bill;