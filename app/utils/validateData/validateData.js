import i18next from '../i18next/i18next';

/**
 * Checks that input has required props
 * @param  {object} option
 * @param  {string} className
 */
export default (option, className) => {
        if(!option) {
            const functionName = i18next.t('namesFunctionValidateData');
            const required = i18next.t('namesParameterNameOption');
            const error = i18next.t('functionMissingArguments', { functionName, required });
            return {
                error
            };
        }
        const requirements = option.required;
        const values = option.values;
        if(requirements){
            let checkRequire = typeof requirements !== 'object';
            let checkValues = typeof values !== 'object'
            if(checkRequire || checkValues) {
                let item = [];
                if(checkRequire){
                    item.push(i18next.t('namesParameterNameRequired'));
                }
                if(checkValues){
                    item.push(i18next.t('namesParameterNameValues'));
                }
                item = item.join(',');
                const error = i18next.t('notAnArray', { item });
                return {
                     error
                };
            } else {
                let failed = false;
                let required = [];
                requirements.forEach(requirement => {
                    if(!values[requirement]){
                        failed = true;
                        required.push(requirement);
                    }
                });
                if(failed){
                    const functionName = `${i18next.t('namesParameterNameClass')}:${className}`;
                    const error = i18next.t('constructorMissingArguments', { functionName, required: required.join(',')});
                    return {
                        error,
                        required
                    }
                }
            }
        }
        return;
}