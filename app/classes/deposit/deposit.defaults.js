import generateDefaults from '../../utils/generateDefaults/generateDefaults';
import i18next from '../../utils/i18next/i18next';

const settings = [
  {
    key: 'name',
    default: i18next.t('defaultName', i18next.t('class.deposit.name')),
  },
  {
    key: 'id',
    default: null, // automatically generated hash
  },
  {
    key: 'amount',
    default: 0,
  },
  {
    key: 'account',
    required: true,
  },
  {
    key: 'type',
    default: 'fixed',
  },
  {
    key: 'schedule',
    default: null,
  },
];

const { defaults, required } = generateDefaults(settings);

export default {
  /* Defaults */
  defaults,
  required,
  settings,
};
