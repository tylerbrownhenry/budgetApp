import i18next from 'i18next';
import validateData from './validateData';
import data from './validateData.samples';
import classes from '../../classes/classes';

const { samples, defaults } = data;
const { Deposit } = classes;

describe('validateData', () => {
  test('is defined', () => {
    expect(validateData).toBeDefined();
    expect(typeof validateData).toEqual('function');
  });

  test('called with not arguments returns an error', () => {
    const response = validateData();
    expect(response).toHaveProperty('error');
    const functionName = i18next.t('error.file.validateData.name');
    const required = i18next.t('parameter.option.name');
    const errorMessage = i18next.t('error.function.missingArguments', { functionName, required });
    expect(errorMessage).toBeDefined();
    expect(response.error).toEqual(errorMessage);
    expect(response.error.length !== 0).toBeTruthy();
    expect(response.error.indexOf('error.function.missingArguments') === -1).toBeTruthy();
  });

  test('called with invalid class returns an error (developer notes)', () => {
    const response = validateData({ values: { }, required: 'shouldBeAnArray' });
    expect(response).toHaveProperty('error');
    const error = i18next.t('error.array.isNot', { item: 'required' });
    expect(response).toEqual({ error });
    expect(response.error.length !== 0).toBeTruthy();
    expect(response.error.indexOf('error.array.isNot') === -1).toBeTruthy();
  });

  test('throws error when creating new Deposit with no account', () => {
    try {
      const newDeposit = new Deposit();
    } catch (e) {
      expect(e.error).toBeDefined();
      expect(e.required).toBeDefined();
    }
  });
});
