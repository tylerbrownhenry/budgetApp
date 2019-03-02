import i18next from '../../utils/i18next/i18next';

export default [
  /* Sample Data */
  {
    name: i18next.t('example.account[0].name'),
    id: '123',
    apr: 7,
    type: 'cc',
    balance: 8345.44,
  }, {
    name: i18next.t('example.account[1].name'),
    id: '234',
    balance: 7200,
    type: 'bank',
  },
];
