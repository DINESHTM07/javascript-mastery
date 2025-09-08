function createExpenseTracker() {
  let expenses = [];

  return {
    addExpense(description, amount) {
     expenses.push({ description: description, amount: amount });
    },

    getTotalExpenses() {
      total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
      return total;
    },

    getExpenseReport() {
      return expenses;
    },
  };
}


const tracker = createExpenseTracker();
tracker.addExpense("Groceries", 50);
tracker.addExpense("Bus Ticket", 20);

console.log(tracker.getTotalExpenses());
console.log(tracker.getExpenseReport()); 