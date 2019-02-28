import data from './deposit.samples';
import options from './deposit.options';
import Item from '../item';
const {defaults, required} = data;

/**
 * Creates a new Deposit.
 * @class
 */
export default class Deposit extends Item{
    constructor(input) {
        super(input, defaults, required);
        this.options = options;
    }
};

