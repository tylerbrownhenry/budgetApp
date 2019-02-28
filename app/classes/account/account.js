import Item from '../item';
import data from './account.samples';
const {defaults, required} = data;

/**
 * Creates a new Account
 * @class
 */
export default class Account extends Item {
  constructor(input) {
    super(input, defaults, required);
    this.monthlyInterest = () => {
      return privateValues.apr / 12;
    }
  }
};