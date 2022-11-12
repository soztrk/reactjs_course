import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import Card from "../ui/Card"
import { MoneyFormat } from "../../utility/Numbers"

const ExpenseItem = (props) => {

    const removeItemHandler = () => {
        if(window.confirm("Emin misiniz?")){
            props.transmitRemoveItem(props.id)
        }
    }

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />            
                <div className="expense-item_description">
                    <h2>{props.title}</h2>
                    <div className="expense-item_price">{MoneyFormat(props.amount)}₺</div>
                </div>
                <button onClick={removeItemHandler} className="alternative">Sil</button>
            </Card>
        </li>
    )
}

export default ExpenseItem