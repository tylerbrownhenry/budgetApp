import validateData from '../utils/validateData/validateData';
import i18next from '../utils/i18next/i18next';



/**
 * Creates a new Item.
 * @class
 */
export default class Item {
    constructor(input, defaults, required) {

        let values = { ...defaults, ...input};

        for (let property in values) {
            if (values.hasOwnProperty(property)) {
                /**
                 * Returns a getter and setter as the property
                 */
               Object.defineProperty(this, property, {
                    get: () => { 
                        return values[property]; 
                    },
                    set: (value) => { 
                        throw i18next.t('error.constructor.useSet');
                    }
                });
            }
        }

        const validateResponse = validateData({values, required}, this.constructor.name);
        if(validateResponse && validateResponse.error){
            throw validateResponse;
        }

        /**
         * Setter
         * @param  {string} property
         */
        this.set = (property, value) =>{
            values[property] = value
            return values[property];
        }
    }    
}