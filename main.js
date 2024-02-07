const addExpenseBtn = document.querySelector(".add-expense-btn");
const expenseList = document.querySelector(".expense-list");
const totalExpense = document.querySelector(".total-expense h3");

let expenses = [];
let total = 0;

function renderExpenses() {
    let html = "";
    expenses.forEach(function (expense) {

        html += `
        <div class="expense-item" >
            <div class="expense-item-description"> ${expense.description} </div>
                <div class="expense-item-amount"> $ ${expense.amount} </div>
                <button class="delete-expense-btn" style="cursor: pointer"> &times </button>
        </div>
        
        `;

    });
    expenseList.innerHTML = html;
    totalExpense.innerText = `Total Expenses: $ ${total}`
}

function addExpense() {

    const description = prompt("Enter Expense Description:");
    const amount = parseFloat(prompt("Enter Expense Amount"));

    if (description && amount) {
        const expense = {
            description,
            amount,
        };
        expenses.push(expense)
        total += amount
        renderExpenses()
    }
}


addExpenseBtn.addEventListener("click", addExpense)

function deleteExpense(index) {
    if (index >= 0 && index < expenses.length) {
        const deletedExpense = expenses[index];
        total -= deletedExpense.amount;
        expenses.splice(index, 1);
        renderExpenses();
    }
}

expenseList.addEventListener("click", function (event) {
    const deleteButton = event.target.closest('.delete-expense-btn');
    if (deleteButton) {
        const expenseItem = deleteButton.closest('.expense-item');
        const index = Array.from(expenseItem.parentNode.children).indexOf(expenseItem);
        deleteExpense(index);
    }
});
