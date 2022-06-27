import classes from "./CartItem.module.css"
import Button from "../../parts/Button/Button"

const CartItem = (props) => {
    
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
                <Button onClick={props.onDecreaseQuantity}>-</Button>
                <Button onClick={props.onIncreaseQuantity}>+</Button>
            </div>
        </li>
    )
}

export default CartItem