import "./ExpenseForm.css"
import { useState } from "react"

const ExpenseForm = (props) => {

    const [enteredTitle,setEnteredTitle] = useState("")
    const [enteredAmount,setEnteredAmount] = useState("")
    const [enteredDate,setEnteredDate] = useState("")

    /*

    single state aproach

    const [userInput,setUserInput] = useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:''
    })

    */
    
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
       
        /* 

        single state aproach

        // not good for react work cycyle => setUserInput({...userInput,enteredTitle:event.target.value})  

        setUserInput((prevState)=>{
            return{
                ...prevState,enteredTitle:event.target.value
            }
        })
        */
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        if(enteredTitle === "" || enteredAmount === "" || enteredDate === "") {
            return alert("Lütfen tüm alanları doldurun!")
        }

        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }

        // send data to parent
        props.onSubmitForm(expenseData)

        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    const cancelHandler = () => {
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')

        props.onCanelForm()
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense_controls">
                <div className="new-expense_control">
                    <label>Başlık</label>
                    <input onChange={titleChangeHandler} value={enteredTitle} type="text" />
                </div>
                <div className="new-expense_control">
                    <label>Miktar</label>
                    <input onChange={amountChangeHandler} value={enteredAmount} type="number" />
                </div>
                <div className="new-expense_control">
                    <label>Tarih</label>
                    <input onChange={dateChangeHandler} value={enteredDate} type="date" min="2019-01-01" max="2022-12-31" />
                </div>
            </div>
            <div className="new-expense_actions">
                <button onClick={cancelHandler}>İptal</button>
                <button type="submit">Ekle</button>
            </div>
        </form>
    )
}

export default ExpenseForm