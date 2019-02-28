import validateData from '../utils/validateData/validateData';

/**
 * Creates a new Item.
 * @class
 */
export default class Item {
    constructor(input, defaults, required) {

        let values = { ...defaults, ...input};

        const validateResponse = validateData({values, required}, this.constructor.name);
        if(validateResponse && validateResponse.error){
            throw validateResponse;
        }
        /**
         * Gettter
         * @param  {string} prop
         */
        this.get = (prop) =>{
            return values[prop];
        }

        /**
         * Setter
         * @param  {string} prop
         */
        this.set = (prop, value) =>{
            return values[prop] = value;
        }
    }
}