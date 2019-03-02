import i18next from '../../utils/i18next/i18next';
import classes from '../classes';
const {State} = classes;
import samples from '../state/state.samples';

export default [
    /* Sample Data */
    {
        name: i18next.t('example.dashboard[0].name'),
        id: '239'
    },
    { 
        name: i18next.t('example.dashboard[1].name'),
        id: '109',
        states: [
            new State(samples[0]),
            new State(samples[1])
        ],
        default: 0,
        unsavedChanges: false,
        messages: {
            error:[],
            update:[
                {
                    message:'new account',
                    date: new Date()
                }
            ]
        }          
    }
]
