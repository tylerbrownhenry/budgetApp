import i18next from '../../utils/i18next/i18next';

export default {
  /* Defaults */
  defaults: {
    name: i18next.t('defaultName', i18next.t('class.state.name')),
    id: null, // automatically generated hash
    items: {
      accounts: [],
      bills: [],
      payments: [],
      deposits: [],
    },
    settings: {},
    history: {},
    default: false,
  },
};
