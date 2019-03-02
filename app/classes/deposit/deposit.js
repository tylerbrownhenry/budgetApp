import Item from '../item';
import options from './deposit.options';
import data from './deposit.defaults';

const { defaults, required } = data;

/**
 * Creates a new Deposit.
 * @class
 */
export default class Deposit extends Item {
  constructor(input) {
    super(input, defaults, required);
    this.options = options;
  }
}
