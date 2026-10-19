

export default class ExpenseTracker {
  constructor() {
    this.transactions = [];
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

  getTotalIncome() {
  return this.transactions.reduce((total, transaction) => {
    if (transaction.type === "income") {
      return total + transaction.amount;
    }

    return total;
  }, 0);
}


getTotalExpenses() {
  return this.transactions.reduce((total, transaction) => {
    if (transaction.type === "expense") {
      return total + transaction.amount;
    }

    return total;
  }, 0);
}


getBalance() {
  return this.getTotalIncome() - this.getTotalExpenses();
}
}