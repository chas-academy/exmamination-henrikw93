const desc = document.getElementById("desc")
const amount = document.getElementById("amount")
const incomeBtn = document.getElementById("incomeBtn")
const expenseBtn = document.getElementById("expenseBtn")
const incomeList = document.getElementById("incomeList")
const expenseList = document.getElementById("expenseList")
const transactionList = document.getElementById("transactionList")
const balance = document.getElementById("balance")



const incomes = []
const expenses = []
let balanceTotal = 0



incomeBtn.addEventListener("click", () => {
    const descInput = desc.value
    const amountInput = Number(amount.value)

    addIncome(descInput, amountInput)

    balance.innerHTML = balanceTotal

    desc.value = ""
    amount.value = ""
})

expenseBtn.addEventListener("click", () => {
    const descInput = desc.value
    const amountInput = Number(amount.value)

    addExpense(descInput, amountInput)

    balance.innerHTML = balanceTotal

    desc.value = ""
    amount.value = ""
})




function addIncome(desc, amount) {

    incomes.push({desc: desc, amount: amount, type: "income"})

    balanceTotal += amount

    incomeList.innerHTML = ""

    for (let income of incomes) {
        const listItem = document.createElement("li")
        listItem.innerHTML = `${income.desc} - ${income.amount} kr (Inkomst)`
        incomeList.appendChild(listItem)
    }
}

function addExpense(desc, amount) {

    expenses.push({desc: desc, amount: amount, type: "expense"})

    balanceTotal -= amount

    expenseList.innerHTML = ""

    for (let expense of expenses) {
        const listItem = document.createElement("li")
        listItem.innerHTML = `${expense.desc} - ${expense.amount} kr (Utgift)`
        expenseList.appendChild(listItem)
    }
}
