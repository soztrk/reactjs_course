import "./Expenses.css"
import ExpenseFilter from "./ExpenseFilter"
import Card from "../ui/Card"
import {useState} from "react"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"

const Expenses = (props) => {

  const [filteredYear,setFilteredYear] = useState("2020")

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(item=>{return String(item.date.getFullYear()) === filteredYear})

  const transmitRemoveItem = (itemId) => {
    props.transmitRemoveItem(itemId)
  }

  return(
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} transmitRemoveItem={(itemId)=>{transmitRemoveItem(itemId)}} />
    </Card>
  )

}

export default Expenses