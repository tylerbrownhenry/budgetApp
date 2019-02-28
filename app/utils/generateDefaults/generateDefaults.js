import i18next from '../i18next/i18next';

/**
 * Checks that setting has required property 'key'
 * @param  {object} setting
 */
function checkKeyHasKey(setting){
    if(!setting.key) {
        const required = i18next.t('parameters.key.name');
        const functionName = i18next.t('namesFunctionGenerateDefaults');
        const error = i18next.t('functionMissingArguments', { functionName, required} );
        return {
             error
        };
    }
}

/**
 * Transforms a configuration to 'defaults' and 'required' objects
 * @param  {object} settings
 */
export default (settings) =>{
    if(!settings) {
        const functionName = i18next.t('namesFunctionGenerateDefaults');
        const required = i18next.t('namesParameterNameSetttings');
        const error = i18next.t('functionMissingArguments', { functionName, required });
        return {
            error
        };
    }

    if(typeof settings !== 'object') {
        const required = i18next.t('namesParameterNameSetttings');
        const error = i18next.t('notAnArray', { item: required});
        return {
             error
        };
    }

    let defaults = {};
    let required = [];
    let error;
    let failed = false;
    let temp;

    settings.forEach((setting) => {
        if(temp = checkKeyHasKey(setting)){
            failed = true;
            error = temp;
        }
        if(setting.default){
            defaults[setting.key] = setting.default;
        }
        if(setting.required){
            required.push(setting.key);
        }
    });

    if(failed){
        return {
            error
        }
    }

    return {
        defaults,
        required
    }
}