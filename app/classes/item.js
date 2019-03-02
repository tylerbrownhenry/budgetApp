import validateData from '../utils/validateData/validateData';
import i18next from '../utils/i18next/i18next';

/**
 * Creates a new Item.
 * @class
 */
export default class Item {
  constructor(input, defaults, required) {
    const values = {
      ...defaults,
      ...input,
    };

    Object.keys(values).forEach(key => ({
      get: () => values[key],
      set: () => {
        throw i18next.t('error.constructor.useSet');
      },
    }));

    const validateResponse = validateData({
      values,
      required,
    }, this.constructor.name);

    if (validateResponse && validateResponse.error) {
      throw validateResponse;
    }

    /**
     * Setter
     * @param  {string} property
     */
    this.set = (property, value) => {
      values[property] = value
      return values[property];
    }
  }
}
