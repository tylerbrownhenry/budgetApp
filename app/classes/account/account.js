import Item from '../item';
import data from './account.defaults';
const {defaults, required} = data;

/**
 * Creates a new Account
 * @class
 */
export default class Account extends Item {
  constructor(input) {
    super(input, defaults, required);
  }
};