import i18next from '../../utils/i18next/i18next';

export default {
    /* Defaults */
    defaults:{ 
        name:  i18next.t('defaultName', i18next.t('accountName')),
        id: null, //automatically generated hash
        apr: 0,
        type: 'bank',
        balance: 0
    },
    /* Sample Data */
    samples: [{
        name: i18next.t('sampleAccountName'),
        id: '123',
        apr: 7,
        type: 'cc',
        balance: 8345.44
    },{
        name:  i18next.t('sampleAccountName2'),
        id: '234',
        balance: 7200,
        type: 'bank'
    }]
};