import Item from '../item';
import data from './dashboard.defaults';;
const {defaults, required} = data;

/**
 * Creates a new Dashboard
 * @class
 */
export default class Dashboard extends Item{
    constructor(input) {
        super(input, defaults, required);
    }
};

