import i18next from '../i18next/i18next';

/**
 * Checks that input has required props
 * @param  {object} option
 * @param  {string} className
 */
export default (option, className) => {
  if (!option) {
    const functionName = i18next.t('error.file.validateData.name');
    const required = i18next.t('parameter.option.name');
    const error = i18next.t('error.function.missingArguments', { functionName, required });
    return {
      error,
    };
  }
  const requirements = option.required;
  const { values } = option;
  if (requirements) {
    const checkRequire = typeof requirements !== 'object';
    const checkValues = typeof values !== 'object'
    if (checkRequire || checkValues) {
      let item = [];
      if (checkRequire) {
        item.push(i18next.t('parameter.required.name'));
      }
      if (checkValues) {
        item.push(i18next.t('parameter.values.name'));
      }
      item = item.join(',');
      const error = i18next.t('error.array.isNot', { item });
      return {
        error,
      };
    }
    let failed = false;
    const required = [];
    requirements.forEach((requirement) => {
      if (!values[requirement]) {
        failed = true;
        required.push(requirement);
      }
    });
    if (failed) {
      const functionName = `${i18next.t('parameter.class.name')}:${className}`;
      const error = i18next.t('error.constructor.missingArguments', { functionName, required: required.join(',') });
      return {
        error,
        required,
      }
    }
  }
  return false;
}
