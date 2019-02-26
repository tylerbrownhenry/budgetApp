class Bill {
    constructor(name = 'Unnamed Bill', type = 0, balance = 0, apr = 0, payment = 0, periods = 0, futureValue = 0) {
        let privateValues = {
            name,
            type,
            balance,
            apr: apr / 100,
            payment,
            periods: Infinity,
            futureValue,
            interestRate: 0,
            autoPeriods: !periods
        };
        this.get = (prop) =>{
            return privateValues[prop];
        }
        this.set = (prop, value) =>{
            privateValues[prop] = value;
            if(prop === 'apr'){
                value = privateValues.apr = value / 100;
                // this.calcMonthlyInterest();
            }
            if(prop === 'balance' || prop === 'apr'){
                this.calcMonthlyInterest();
            }
            if(prop === 'periods'){
                privateValues.autoPeriods = false;
            }
            if(prop === 'autoPeriods'){
                privateValues.autoPeriods = value;
            }
            return value;
        }
        this.estimateNumberOfPayments = () => {
            if(privateValues.balance <= 0){
                return {
                    payments: 0
                };    
            }
            if(!privateValues.payment){
                return {
                    payments: Infinity
                };   
            }
            let i = 0;
            let fixedPayment = privateValues.payment.toFixed(2);
            let balance = privateValues.balance;
            let totalBalance;
            let amortization = [];
            let startBalance;
            let interestRate = Math.pow(1 + (privateValues.apr / 12), 1);

            while (balance > 0 && i < 360) {
                startBalance = balance;
                totalBalance = balance * interestRate;
                let interest =  totalBalance - balance;
                if (fixedPayment === totalBalance.toFixed(2)) {
                    balance -= payment;
                } else {
                    balance -= payment - (totalBalance - balance);            
                } 
                amortization.push({
                    principle: (privateValues.payment - interest).toFixed(2),
                    interest: interest.toFixed(2),
                    start: startBalance.toFixed(2),
                    end: balance.toFixed(2),
                    month: i + 1,
                })
              i++;
            }   
            return {
                payments: amortization.length,
                amortization
            };         
        }
        this.calcMonthlyInterest = () => {
           if((privateValues.periods === 0 || privateValues.periods === Infinity) || privateValues.autoPeriods === true){
               privateValues.periods = this.estimateNumberOfPayments().payments;
            }
            return privateValues.interestRate = privateValues.periods ? (privateValues.apr) / privateValues.periods : 0;
        }
        this.calcMonthlyInterest();
        this.estimatePayment = (futureValue = 0) => {
            /*
            * numberOfperiods   - number of periods (months)
            * pv   - present value
            * fv   - future value
            * type - when the payments are due:
            *        0: end of the period, e.g. end of month (default)
            *        1: beginning of period
            */
            let payment;
                    
            if (privateValues.interestRate === 0){
                console.log('NOPE');
                return -(privateValues.balance + privateValues.futureValue) / privateValues.periods;
            }
            
            const compoundedInterest = Math.pow(1 + privateValues.interestRate, privateValues.periods);
            payment = - privateValues.interestRate * privateValues.balance * (compoundedInterest + privateValues.futureValue) / (compoundedInterest - 1);
            // console.log('payment',payment);
            if (privateValues.type === 1){
                payment /= (1 + privateValues.interestRate);
            }

            return payment.toFixed(2) * -1;
        }
    }
}
  
  module.exports = Bill;