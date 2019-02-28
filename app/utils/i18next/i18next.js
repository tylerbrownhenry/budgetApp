import i18next from 'i18next';

/*
*  Sets languages/text in a central location and prepares for translation later
*/
i18next.init({
    lng: 'en',
    debug: false,
    resources: {
      en: {
        translation: {
            "depositName": 'Deposit',
            "paymentName": "Payment",
            "billName": "Bill",
            "accountName": 'Bank',
            "defaultName": 'Unnamed {{label}}',
            "samplePaymentName": "Chase Credit Card Payment",
            "sampleDepositName": "Bank of America Desposit",
            "sampleBillName": "Power Bill",
            "sampleBillName2": 'High Balance Credit Card',
            "sampleBillName3": 'Credit Card with Low Balance but more periods',
            "sampleBillName4": 'Credit Card with Low Balance but even more periods',
            "sampleBillName5": 'Credit Card with Low Balance but high apr',
            "sampleAccountName": 'Chase Credit Card',
            "sampleAccountName2": "Bank of America Checking",
            "namesFunctionValidateData": 'Validate Data',
            "namesFunctionSubmitData": 'Submit Data',
            "namesFunctionGenerateDefaults": "Generate Defaults",
            "namesParameterNameOption": 'option',
            "namesParameterNameSetttings": 'settings',
            "namesParameterNameKey": 'key',
            "namesParameterNameClass": 'class',
            "namesParameterNameRequired": 'required',
            "namesParameterNameValues": 'values',
            "functionMissingArguments": `{{functionName}} called missing required argument(s) [{{required}}]'`,
            "constructorMissingArguments": `{{functionName}} requires [{{required}}]'`,
            "doesNotExist": `"{{missing}}" does not exist`,
            "notAnArray": 'Provided "{{item}}" is/are not an Array(s)',
            "classDoesNotExist": 'Class "{{class}}" does not exist'
        }
      }
    }
  });

  export default i18next;