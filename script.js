// Object that store the users information
// I use const instead of let since I am not reusing or changing the value of the variable
const account = {
    name: "Alex",
    expenses: [],
    income: [],
};

// Function that adds an expense to the account
// Here I use let instead of const since I am reusing and changing the value of the expense variable
// New object named expnse is created with two properties, descripton and amount
// Then the expense is added to the account object by using push
function addExpenses(description, amount) {
    let expense = {
        description: description,
        amount: amount
    };
    account.expenses.push(expense);
    alert("Expense added successfully");
}

// Function that adds income to the account
// Same as the addExpenses function above, income is added to the account object by using push
function addIncome(amount) {
    let income = {
        amount: amount
    };
    account.income.push(income);
    alert("Income added successfully");
}

// Function that lists all expenses stored in the account object 
// Start with empty string to be able recive descriptions and amounts from the loop
// Loops through expenses array in the account object and creates expense description and ammount
// Then displays the expenses string with alert

function listAllExpenses() {
    let expensesString = "";
    for (let i = 0; i < account.expenses.length; i++) {
        let expense = account.expenses[i];
        expensesString += `${expense.description}: ${expense.amount} Kr\n`;
    }
    alert(expensesString);
}

// Function that gets summary 
// Initializes two variable to 0
// then loops thorugh expenses and income in the account object and adds up the amount and assigns to each variable
// Calculates the balance by taking total expenses minus total income and creates a string and displays it
function getSummary() {
    let totalExpenses = 0;
    for (let i = 0; i < account.expenses.length; i++) {
        totalExpenses += account.expenses[i].amount;
    }

    let totalIncome = 0;
    for (let i = 0; i < account.income.length; i++) {
        totalIncome += account.income[i].amount;
    }

    let balance = totalIncome - totalExpenses;
    let summary = `${account.name}, here is a summary of your budget:\nTotal Income: ${totalIncome} Kr\nTotal Expenses: ${totalExpenses} Kr\nBalance: ${balance} Kr`;
    alert(summary);
}

// The menu function
// Presents the menu using prompt
// Uses if/else statements to perform the different actions in the choice variable
function menu() {
    let choice = prompt("Select an option: \n1. Add expenses\n2. Add income\n3. List all expenses\n4. Get summary\n5. Exit");

    if (choice == "1") {
        let expenseDescription = prompt("Enter expense description:");
        let expenseAmount = parseFloat(prompt("How much was your expense?"));
        addExpenses(expenseDescription, expenseAmount);
    } else if (choice == "2") {
        let incomeAmount = parseFloat(prompt("Enter income amount:"));
        addIncome(incomeAmount);
    } else if (choice == "3") {
        listAllExpenses();
    } else if (choice == "4") {
        getSummary();
    } else if (choice == "5") {
        alert("Exiting app...");
    } else {
        alert("Invalid choice, please try again.");
    }
    if (choice != "5") {
        menu();
    }
}

menu();

// I chose to use if/else instead of switch
// As I understand it, switch should be used when you have alot of conditons to check and when you are only checking the value of one variable
// So in this case using switch could make more sense but I am more familiar with if/else and that is why I went with it