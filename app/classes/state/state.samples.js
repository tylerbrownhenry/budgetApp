import i18next from '../../utils/i18next/i18next';
import classes from '../classes';
import samples from '../samples';

const {
  Bill,
  Account,
  Payment,
  Deposit,
} = classes;

export default [
  /* Sample Data */
  {
    name: i18next.t('example.state[0].name'),
    id: '989',
  },
  {
    name: i18next.t('example.state[1].name'),
    id: '855',
    items: {
      accounts: [new Account(samples.account[0])],
      bills: [new Bill(samples.bill[0])],
      payments: [new Payment(samples.payment[0])],
      deposits: [new Deposit(samples.deposit[0])],
    },
    settings: {},
    history: {},
    default: true,
  },
]
