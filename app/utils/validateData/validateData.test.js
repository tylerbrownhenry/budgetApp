import validateData from './validateData';
import data from './validateData.samples';
const {samples, defaults} = data;
import classes from '../../classes/classes';
const {Deposit} = classes;
import i18next from 'i18next';

test('validateData is defined', () => {
    expect(validateData).toBeDefined();
    expect(typeof validateData).toEqual('function');
});

test('validateData called with not arguments returns an error', () => {
    const validateResponse = validateData();
    expect(validateResponse).toHaveProperty('error');
    const functionName = i18next.t('namesFunctionValidateData');
    const required = i18next.t('parameters.option.name');
    const errorMessage = i18next.t('functionMissingArguments', {functionName, required});
    expect(errorMessage).toBeDefined();
    expect(validateResponse.error).toEqual(errorMessage);
});

test('validateData called with invalid class returns an error (developer notes)', () => {
    const validateResponse = validateData({values:{},required: 'shouldBeAnArray'});
    expect(validateResponse).toHaveProperty('error');
});

test('validateData throws error when creating new Deposit with no account', () => {
    try{
        let newDeposit = new Deposit();
    } catch(e){
        expect(e.error).toBeDefined();
        expect(e.required).toBeDefined();
    }
});