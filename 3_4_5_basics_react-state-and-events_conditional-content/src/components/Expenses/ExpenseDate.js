import "./ExpenseDate.css"

const ExpenseDate = (props) => {

    const day = props.date.toLocaleString('tr-TR',{day:"2-digit"})
    const month = props.date.toLocaleString('tr-TR',{month:"long"})
    const year = props.date.getFullYear();

    return(
        <div className="expense-date">
            <div className="expense_date_day">{day}</div>
            <div className="expense_date_month">{month}</div>
            <div className="expense_date_year">{year}</div>
        </div>
    )

}

export default ExpenseDate