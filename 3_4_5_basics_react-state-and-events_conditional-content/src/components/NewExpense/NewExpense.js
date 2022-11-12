import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"
import { useState } from "react"
import { UniqueRandomNumber } from "../../utility/Numbers"

const NewExpense = (props) => {

    const [formVisibility,setFormVisibility] = useState(false)

    const submitFormHandler = (formData) => {
        const expenseFormData = {...formData,id:UniqueRandomNumber()}
        props.onAddExpense(expenseFormData)
        setFormVisibility(false)
    }

    const formVisibilityHandler = () => {
        setFormVisibility(true)
    }

    const cancelFormHandler = () => {
        setFormVisibility(false)
    }

    let formContent = <button onClick={formVisibilityHandler}>Yeni Harcama Ekle</button>

    if(formVisibility) formContent = <ExpenseForm onSubmitForm={submitFormHandler} onCanelForm={cancelFormHandler} />

    return <div className="new-expense">{formContent}</div>
}

export default NewExpense