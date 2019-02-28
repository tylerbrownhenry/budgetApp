import data from './payment.samples';
import Item from '../item';
const {defaults, required} = data;

/**
 * Creates a new Payment
 * @class
 */
export default class Payment extends Item{
    constructor(input) {
        super(input, defaults, required);
    }
}