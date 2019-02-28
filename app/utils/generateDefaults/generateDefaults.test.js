import generateDefaults from './generateDefaults';
// import data from './validateData.samples';
// const {samples, defaults} = data;
import i18next from 'i18next';
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

// test('validateData called with invalid class returns an error', () => {
//     const validateResponse = validateData(samples[0]);
//     expect(validateResponse).toHaveProperty('error');
//     const errorMessage = i18next.t('functionMissingArguments', {class:samples[0].class});
//     expect(errorMessage).toBeDefined();
//     console.log(errorMessage);
//     expect(validateResponse.error).toEqual(errorMessage);
// });