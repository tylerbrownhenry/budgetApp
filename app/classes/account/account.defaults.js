import i18next from '../../utils/i18next/i18next';

export default {
  /* Defaults */
  defaults: {
    name: i18next.t('defaultName', i18next.t('class.account.name')),
    id: null, // automatically generated hash
    apr: 0,
    type: 'bank',
    balance: 0,
  },
};
