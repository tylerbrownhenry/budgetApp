import i18next from 'i18next';
import generateDefaults from './generateDefaults';
import data from '../../classes/deposit/deposit.defaults';

const functionName = i18next.t('error.file.generateDefaults.name');
const {
  settings,
} = data;

describe('generateDefaults', () => {
  test('is defined', () => {
    expect(generateDefaults).toBeDefined();
    expect(typeof generateDefaults).toEqual('function');
    const name = functionName.indexOf('error.file.generateDefaults.name');
    expect(name === -1).toBeTruthy();
  });

  test('called with not arguments returns an error', () => {
    const required = i18next.t('parameter.settings.name');
    const message = i18next.t('error.function.missingArguments', {
      required,
      functionName,
    });
    const response = generateDefaults();
    expect(response).toHaveProperty('error');
    expect(response).toBeDefined();
    expect(response.error).toEqual(message);
    expect(response.error.length !== 0).toBeTruthy();
    expect(response.error.indexOf('error.array.isNot') === -1).toBeTruthy();
  });

  test('called with a setting with no key return an error', () => {
    const newSettings = settings;
    delete newSettings[0].key
    const response = generateDefaults(settings);
    const required = 'key';
    const message = i18next.t('error.function.missingArguments', {
      functionName,
      required,
    });
    delete newSettings[0];
    expect(response).toHaveProperty('error');
    expect(response.error).toEqual(message);
    expect(response.error.length !== 0).toBeTruthy();
    expect(response.error.indexOf('error.function.missingArguments') === -1).toBeTruthy();
  });

  test('called with a string as prop return error', () => {
    const response = generateDefaults('notValid');
    const message = i18next.t('error.array.isNot', {
      item: 'settings',
    });
    expect(response).toHaveProperty('error');
    expect(response.error).toEqual(message);
    expect(response.error.length !== 0).toBeTruthy();
    expect(response.error.indexOf('error.array.isNot') === -1).toBeTruthy();
  });

  test('called with requirements and defaults returns both as props on response', () => {
    const generateDefaultsResponse = generateDefaults(settings);
    expect(generateDefaultsResponse).toHaveProperty('defaults');
    expect(generateDefaultsResponse).toHaveProperty('required');
  });
});
