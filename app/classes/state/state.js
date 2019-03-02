import Item from '../item';
import data from './state.defaults';
const {defaults, required} = data;

/**
 * Creates a new State
 * @class
 */
export default class State extends Item{
    constructor(input) {
        super(input, defaults, required);
    }
}