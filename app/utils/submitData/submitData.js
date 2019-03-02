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
    const validateResponse = validateData({
      values: options || undefined,
      required: ['class', 'values'],
    }, i18next.t('error.file.submitData.name'));

    if (validateResponse) {
      return validateResponse;
    }

    if (typeof classes[options.class] === 'undefined') {
      return {
        error: i18next.t('error.class.missing', { class: options.class }),
      }
    }

    /* Check initializing the class is valid */
    try {
      return new classes[options.class](options.values);
    } catch (e) {
      return e;
    }
  },
}
