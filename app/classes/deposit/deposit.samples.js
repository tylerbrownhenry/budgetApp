import i18next from '../../utils/i18next/i18next';

export default [
  /* Sample Data */
  {
    name: i18next.t('example.deposit[0].name'),
    id: '754',
    amount: 1000,
    account: '234',
    type: 'fixed',
    schedule: {
      value: 'everyTwoWeek',
      options: [{
        value: 'dayOfWeek',
        options: [{
          value: 'friday',
        }],
      }],
    },
  }, {
    account: '234',
    id: '123',
  },
];
