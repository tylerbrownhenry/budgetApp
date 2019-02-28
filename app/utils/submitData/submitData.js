import classes from '../../classes/classes';
import validateData from '../validateData/validateData';
import i18next from '../i18next/i18next';

export default {
    /**
     * Checks a new Item
     * @param  {object} options
     */
    submit: (options) => {
        /* Check the structure for submitting */
       let validateResponse = validateData({
            values: options ? options : undefined,
            required: ['class','values']
        }, i18next.t('namesFunctionSubmitData'));

        if(validateResponse) {
            return validateResponse;
        }

        if(typeof classes[options.class] === 'undefined'){
            return {
                error: i18next.t('classDoesNotExist', {class: options.class})
            }
        }

        /* Check initializing the class is valid */
        try {
            let newItem = new classes[options.class](options.values);
            return newItem;
        } catch(e){
            return e;
        }
    }
}