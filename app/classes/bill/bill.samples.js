import i18next from '../../utils/i18next/i18next';

export default {
    /* Defaults */
    defaults:{ 
        name:  i18next.t('defaultName', i18next.t('depositName')),
        id: null, //automatically generated hash
        type: 0,
        balance: null,
        apr: 0,
        payment: null,
        periods: null,
        amortization: [],
        futureValue: 0,
        interestRate: 0,
    },
    /* Sample Data */
    samples: [{
        name: i18next.t('sampleBillName'),
        id: '456',
        apr: 7,
        type: 1,
        balance: 1000,
        payment: 93.58,
        periods: 12,
    },{
        name: i18next.t('sampleBillName2'),
        id: '678',
        apr: 7,
        type: 1,
        balance: 1400,
        payment: 93.58,
        periods: 16
    },
    {
        name: i18next.t('sampleBillName3'),
        id: '342',
        apr: 7,
        type: 1,
        balance: 1000,
        payment: 62.5,
        periods: 20
    },
    {
        name: i18next.t('sampleBillName4'),
        id: '435',
        apr: 7,
        type: 1,
        balance: 1000,
        payment: 50,
        periods: 20
    },
    {
        name: i18next.t('sampleBillName5'),
        id: '673',
        balance: 1000,
        apr: 8.9,
        type: 1,
        payment: 49.43,
        periods: 22
    }],
    amortization: {
        first:{ 
            principle: '87.75',
            interest: '5.83',
            start: '1000.00',
            end: '912.25',
            month: 1 
        },
        last:{ 
            principle: '93.54',
            interest: '0.04',
            start: '6.14',
            end: '-87.41',
            month: 12
        }
    }
};