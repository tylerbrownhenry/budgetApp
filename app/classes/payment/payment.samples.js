import i18next from '../../utils/i18next/i18next';

export default {
    /* Defaults */
    defaults:{ 
        name: i18next.t('defaultName', i18next.t('paymentName')),
        id: null //automatically generated hash
    },
    /* Sample Data */
    samples: [{
        name: i18next.t('samplePaymentName'),
        id: '989'
    }]
};