import Item from '../item';
import data from './bill.defaults';

const { defaults, required } = data;

/**
 * Creates a new Bill
 * @class
 */
export default class Bill extends Item {
  constructor(input) {
    super(input, defaults, required);
    this.set('apr', this.apr / 100);
    const superSet = super.set;
    const effectsCalcs = [
      'apr',
      'payment',
      'balance',
      'periods',
    ];

    const effectsPeriods = [
      'balance',
      'apr',
      'payment',
    ];

    const effectsPayment = [
      'apr',
      'periods',
    ];

    this.superSet = this.set; // Keeping super.set

    /**
     * Setter
     * @param  {string} prop
     * @param  {string|number} value
     */
    this.set = (prop, value) => {
      let newValue = value;
      if (prop === 'apr') {
        newValue /= 100;
      }
      this.superSet(prop, newValue);
      if (effectsCalcs.indexOf(prop) !== -1) {
        const calcPayment = effectsPayment.indexOf(prop) !== -1;
        const calcPeriods = effectsPeriods.indexOf(prop) !== -1;
        this.runAutoCalcs(calcPeriods, calcPayment);
      }
      return this[prop];
    };

    /**
     * Given balance and payment, calculates the number of payments needs,
     * and returns amortization of all payments over time
     */
    this.estimateNumberOfPayments = () => {
      let { balance } = this;
      const { payment, apr } = this;

      if (balance <= 0 || !payment) {
        return {
          payments: null,
          amortization: [],
        };
      }

      let i = 0;
      const fixedPayment = payment.toFixed(2);
      let totalBalance;
      const amortization = [];
      let startBalance;
      const interestRate = (1 + (apr / 12)) ** 1;

      while (balance > 0 && i < 360) {
        startBalance = balance;
        totalBalance = balance * interestRate;
        const interest = totalBalance - balance;
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
        i += 1;
      }
      return {
        payments: amortization.length,
        amortization,
      };
    }

    /**
     * Checks if can auto calculate numnber of periods
     */
    this.setPeriods = (calcPeriods) => {
      const { periods } = this;
      if (periods === null || calcPeriods) {
        const resp = this.estimateNumberOfPayments();
        this.superSet('periods', resp.payments);
        this.superSet('amorization', resp.amortization);
      }
      return this.periods;
    }

    /**
     *  Calculates monthly interest rate
     */
    this.setInterestRate = () => {
      const { apr } = this;
      return this.superSet('interestRate', apr / 12);
    }

    /**
     *  Checks if can auto calculate monthly payment
     */
    this.setPayment = (calcPayment) => {
      const { payment, balance, periods } = this;
      const initValue = periods && balance && !payment;
      if (initValue || calcPayment) {
        this.superSet('payment', this.estimatePayment());
      }
      return this.payment;
    }

    /**
     * Given number of interest rate, number of periods
     * and balance, returns amount of a monthly payment
     */
    this.estimatePayment = () => {
      let payment;
      const {
        type, balance, periods, futureValue, interestRate,
      } = this;

      if (!interestRate) {
        return (balance + futureValue) / periods;
      }

      const interest = (1 + interestRate) ** periods;
      payment = -interestRate * balance * (interest + futureValue) / (interest - 1);

      if (type === 1) {
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
      const interestRate = this.interestRate !== this.setInterestRate();
      const payment = this.payment !== this.setPayment(calcPayment);
      if (!payment || !interestRate) {
        /*
          If interestRate or payment was changed, redo periods
        */
        this.setPeriods(calcPeriods);
      }
      return this.interestRate;
    }

    this.runAutoCalcs(true);
  }
}
