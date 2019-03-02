import i18next from '../i18next/i18next';

export default {
  /**
   * Converts each item in an array of data into the provided class
   * @param  {Object} data - data returned from api
   * @param  {Object} ThisClass - classes to convert data into
   * @param  {string} className - for errors, display name for class
   * @param  {string} key - for processing, key to use for response
   * @param  {function} resolve - promise resolve
   * @param  {function} reject - promise reject
   * @param  {function} [process] - optional function to run on data
   */
  convert: function convertDataToClasses(
    data,
    ThisClass,
    className,
    key,
    resolve,
    reject,
    process,
  ) {
    const response = {};
    response[key] = [];
    if (data && data.length > 0) {
      const errors = [];
      data.forEach((item) => {
        let thisItem;
        try {
          thisItem = new ThisClass(item);
          if (typeof process === 'function') {
            process(response, thisItem);
          }
          response[key].push(thisItem);
        } catch (error) {
          errors.push(error);
        }
      });
      if (errors.length > 0) {
        response.error = errors;
      }
      resolve(response);
    } else {
      response.info = i18next.t('info.data.none.saved', {
        items: className,
      });
      resolve(response);
    }
  },
}
