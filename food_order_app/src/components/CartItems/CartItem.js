import classes from "./CartItem.module.css"
import Button from "../../parts/Button/Button"
import { useContext } from "react"
import Context from "../../store/Context"

const CartItem = (props) => {

    const ctx = useContext(Context)

    return(
        <li className={classes.cart_item}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.info}>
                    <span className={classes.price}>${props.price}</span>
                    <span className={classes.quantity}>x{props.quantity}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <Button onClick={()=>{ctx.onChangeQuantity(props.id,false)}}>-</Button>
                <Button onClick={()=>{ctx.onChangeQuantity(props.id,true)}}>+</Button>
            </div>
        </li>
    )
}

export default CartItem