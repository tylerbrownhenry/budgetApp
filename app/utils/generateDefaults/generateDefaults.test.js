import generateDefaults from './generateDefaults';
// import data from './validateData.samples';
// const {samples, defaults} = data;
import i18next from 'i18next';
import data from '../../classes/deposit/deposit.samples';
// import { executionAsyncId } from 'async_hooks';

test('generateDefaults is defined', () => {
    expect(generateDefaults).toBeDefined();
    expect(typeof generateDefaults).toEqual('function');
});

test('generateDefaults called with not arguments returns an error', () => {
    const functionName = i18next.t('namesFunctionGenerateDefaults');
    const required = i18next.t('namesParameterNameSetttings');
    const errorMessage = i18next.t('functionMissingArguments', {required, functionName});
    const generateDefaultsResponse = generateDefaults();
    expect(generateDefaultsResponse).toHaveProperty('error');
    expect(generateDefaultsResponse).toBeDefined();
    expect(generateDefaultsResponse.error).toEqual(errorMessage);
});

test('generateDefaults called with a setting with no key return an error', () => {
    let newSettings = data.settings;
    delete newSettings[0].key
    const generateDefaultsResponse = generateDefaults(data.settings);
    expect(generateDefaultsResponse).toHaveProperty('error');
    delete newSettings[0];
});

test('generateDefaults called with a string as prop return error', () => {
    const generateDefaultsResponse = generateDefaults('notValid');
    expect(generateDefaultsResponse).toHaveProperty('error');
});

test('generateDefaults called with requirements and defaults returns both as props on response', () => {
    const generateDefaultsResponse = generateDefaults(data.settings);
    expect(generateDefaultsResponse).toHaveProperty('defaults');
    expect(generateDefaultsResponse).toHaveProperty('required');
});





