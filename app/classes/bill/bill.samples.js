import i18next from '../../utils/i18next/i18next';

export default [
    /* Sample Data */
    {
        name: i18next.t('example.bill[0].name'),
        id: '456',
        apr: 7,
        type: 1,
        balance: 1000,
        payment: 93.58,
        periods: 12,
    },{
        name: i18next.t('example.bill[1].name'),
        id: '678',
        apr: 7,
        type: 1,
        balance: 1400,
        payment: 93.58,
        periods: 16
    },
    {
        name: i18next.t('example.bill[2].name'),
        id: '342',
        apr: 7,
        type: 1,
        balance: 1000,
        payment: 62.5,
        periods: 20
    },
    {
        name: i18next.t('example.bill[3].name'),
        id: '435',
        apr: 7,
        type: 1,
        balance: 1000,
        payment: 50,
        periods: 20
    },
    {
        name: i18next.t('example.bill[4].name'),
        id: '673',
        balance: 1000,
        apr: 8.9,
        type: 1,
        payment: 49.43,
        periods: 22
    },
    {
        name: i18next.t('example.bill[5].name'),
        id: '111',
        balance: 1100,
        apr: 8.9,
        type: 1,
        payment: 1000,
        periods: 2
    },
    {
        name: i18next.t('example.bill[6].name'),
        id: '775',
        balance: 1000,
        apr: 8.9,
        type: 1,
        payment: 1007.42,
        periods: 1
    },
    {
        name: i18next.t('example.bill[7].name'),
        id: '342',
        balance: 1000,
        apr: 8.9,
        type: 1
    }
];