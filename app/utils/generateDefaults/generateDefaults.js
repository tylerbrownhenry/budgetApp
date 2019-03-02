import i18next from '../i18next/i18next';

const functionName = i18next.t('error.file.generateDefaults.name');

/**
 * Checks that setting has required property 'key'
 * @param  {object} setting
 */
function checkKeyHasKey(setting) {
  if (!setting.key) {
    const required = i18next.t('parameter.key.name');
    const error = i18next.t('error.function.missingArguments', { functionName, required });
    return {
      error,
    };
  }
  return false
}

/**
 * Transforms a configuration to 'defaults' and 'required' objects
 * @param  {object} settings
 */
export default (settings) => {
  if (!settings) {
    const required = i18next.t('parameter.settings.name');
    const error = i18next.t('error.function.missingArguments', { functionName, required });
    return {
      error,
    };
  }

  if (typeof settings !== 'object') {
    const required = i18next.t('parameter.settings.name');
    const error = i18next.t('error.array.isNot', { item: required });
    return {
      error,
    };
  }

  const defaults = {};
  const required = [];
  let error;
  let failed = false;
  let temp;

  settings.forEach((setting) => {
    if (temp = checkKeyHasKey(setting)) {
      failed = true;
      error = temp;
    }
    if (typeof setting.default !== 'undefined') {
      defaults[setting.key] = setting.default;
    }
    if (setting.required) {
      required.push(setting.key);
    }
  });

  if (failed) {
    return {
      error,
    }
  }

  return {
    defaults,
    required,
  }
}
