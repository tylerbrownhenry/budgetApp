import i18next from '../../utils/i18next/i18next';

export default {
  /* Defaults */
  defaults: {
    name: i18next.t('defaultName', i18next.t('class.dashboard.name')),
    id: null, // automatically generated hash,
    states: [],
    unsavedChanges: true,
    default: 0,
    messages: {
      errors: [],
      info: [],
      warning: [],
      updates: [],
    },
  },
};
