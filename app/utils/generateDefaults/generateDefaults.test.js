import generateDefaults from './generateDefaults';
import i18next from 'i18next';
import data from '../../classes/deposit/deposit.defaults';
const {settings} = data;

describe('generateDefaults', () =>{

    test('is defined', () => {
        expect(generateDefaults).toBeDefined();
        expect(typeof generateDefaults).toEqual('function');
    });

    test('called with not arguments returns an error', () => {
        const functionName = i18next.t('error.file.generateDefaults.name');
        const required = i18next.t('parameter.settings.name');
        const errorMessage = i18next.t('error.function.missingArguments', {required, functionName});
        const generateDefaultsResponse = generateDefaults();
        expect(generateDefaultsResponse).toHaveProperty('error');
        expect(generateDefaultsResponse).toBeDefined();
        expect(generateDefaultsResponse.error).toEqual(errorMessage);
    });

    test('called with a setting with no key return an error', () => {
        let newSettings = settings;
        delete newSettings[0].key
        const generateDefaultsResponse = generateDefaults(settings);
        expect(generateDefaultsResponse).toHaveProperty('error');
        delete newSettings[0];
    });

    test('called with a string as prop return error', () => {
        const generateDefaultsResponse = generateDefaults('notValid');
        expect(generateDefaultsResponse).toHaveProperty('error');
    });

    test('called with requirements and defaults returns both as props on response', () => {
        const generateDefaultsResponse = generateDefaults(settings);
        expect(generateDefaultsResponse).toHaveProperty('defaults');
        expect(generateDefaultsResponse).toHaveProperty('required');
    });

});




