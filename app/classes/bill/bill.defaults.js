import i18next from '../../utils/i18next/i18next';

export default {
  /* Defaults */
  defaults: {
    name: i18next.t('defaultName', i18next.t('class.bill.name')),
    id: null, // automatically generated hash
    type: 0,
    balance: null,
    apr: 0,
    payment: null,
    periods: null,
    amortization: [],
    futureValue: 0,
    interestRate: 0,
  },
};
