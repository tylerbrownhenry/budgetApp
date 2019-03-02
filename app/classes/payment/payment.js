import Item from '../item';
import data from './payment.defaults';

const { defaults, required } = data;

/**
 * Creates a new Payment
 * @class
 */
export default class Payment extends Item {
  constructor(input) {
    super(input, defaults, required);
  }
}
