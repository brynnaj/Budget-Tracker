class Budget {
  constructor() {
    this.incomes = [];
    this.expenses = [];
    this.totalIncomeElement = document.getElementById('total-income');
    this.totalExpensesElement = document.getElementById('total-expenses');
    this.totalBudgetElement = document.getElementById('total-budget');

  // Call the "updateSummary" method once the Budget object is created to initialize the summary
  this.updateSummary();
}

// Add income entry to the incomes array, update the summary, and clear input fields
addIncome(description, amount) {
  this.incomes.push({ description, amount });
  this.updateSummary();
  this.clearInputFields('income-description', 'income-amount');
}

// Add expense entry to the expenses array, update the summary, and clear input fields
addExpense(description, amount) {
  this.expenses.push({ description, amount });
  this.updateSummary();
  this.clearInputFields('expense-description', 'expense-amount');
}

// Clear input fields based on provided IDs
clearInputFields(descriptionId, amountId) {
  // Clear the input fields by setting their values to an empty string
  document.getElementById(descriptionId).value = '';
  document.getElementById(amountId).value = '';
}

// Update the summary elements with total income, total expenses, and total budget
updateSummary() {
  const totalIncome = this.calculateTotal(this.incomes);
  const totalExpenses = this.calculateTotal(this.expenses);
  const totalBudget = totalIncome - totalExpenses;

  this.totalIncomeElement.textContent = `$${totalIncome.toFixed(2)}`;
  this.totalExpensesElement.textContent = `$${totalExpenses.toFixed(2)}`;
  this.totalBudgetElement.textContent = `$${totalBudget.toFixed(2)}`;
}

// Calculate the total amount for an array of items
calculateTotal(items) {
  return items.reduce((total, item) => total + item.amount, 0);
}
}

// Create a new Budget instance
const budget = new Budget();

// Add event listeners for the "Add Income" button
document.getElementById('add-income').addEventListener('click', function () {
const description = document.getElementById('income-description').value;
const amount = parseFloat(document.getElementById('income-amount').value);

// Check if input is valid, add income, or show an alert
if (description && !isNaN(amount) && amount > 0) {
  budget.addIncome(description, amount);
} else {
  alert('Please enter valid income details.');
}
});

// Add event listeners for the "Add Expense" button
document.getElementById('add-expense').addEventListener('click', function () {
const description = document.getElementById('expense-description').value;
const amount = parseFloat(document.getElementById('expense-amount').value);

// Check if input is valid, add expense, or show an alert
if (description && !isNaN(amount) && amount > 0) {
  budget.addExpense(description, amount);
} else {
  alert('Please enter valid expense details.');
}
});