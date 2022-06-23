import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem"

const ExpensesList = (props) => {

    if(props.items.length === 0){
        return <p className="expenses-list_fallback">Harcama bulunamadı.</p>
    }

    const transmitRemoveItem = (itemId) => {
        props.transmitRemoveItem(itemId)
    }

    return (
        <ul className="expenses-list">
            {
                props.items.map((val,id)=>{
                    return <ExpenseItem 
                            key={id}
                            id={val.id} 
                            title={val.title} 
                            amount={val.amount} 
                            date={val.date} 
                            transmitRemoveItem={(itemId)=>{transmitRemoveItem(itemId)}}
                            />
                    })
            }
        </ul>
    )

}

export default ExpensesList