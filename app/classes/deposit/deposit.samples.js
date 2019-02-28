import generateDefaults from '../../utils/generateDefaults/generateDefaults';
import i18next from '../../utils/i18next/i18next';

const settings = [
    {
        key: 'name',
        default: i18next.t('defaultName', i18next.t('depositName'))
    },
    {
        key: 'id',
        default: null //automatically generated hash
    }, 
    {
        key: 'amount',
        default: 0
    },
    {
        key: 'account',
        required: true
    },
    {
        key: 'type',
        default: 'fixed'
    },
    {
        key: 'schedule',
        default: null
    }
];

const {defaults, required} = generateDefaults(settings);

export default {
    /* Defaults */
    defaults,
    required,
    settings,
    /* Sample Data */
    samples: [{
        name:  i18next.t('sampleDepositName'),
        id: '754',
        amount: 1000,
        account: '234',
        type: 'fixed',
        schedule: {
                value: 'everyTwoWeek',
                options: [{
                    value: 'dayOfWeek',
                    options: [{
                        value: 'friday'
                    }]
                }]
            }
    },{
        account: '234',
        id: '123'
    }]
};
