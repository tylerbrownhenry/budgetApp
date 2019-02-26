class Bank {
  constructor(name = 'Unnamed', type = 'bank', balance = 0) {
    let privateValues = {
      name,
      type,
      balance,
      apr
    };
    this.get = (prop) =>{
      return privateValues[prop];
    }
    this.set = (prop, value) =>{
      return privateValues[prop] = value;
    }
    this.monthlyInterest = () => {
      return privateValues.apr / 12;
    }
  }
}

module.exports = Bank;