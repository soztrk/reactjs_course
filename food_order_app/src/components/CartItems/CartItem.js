import classes from "./CartItem.module.css"
import Button from "../../parts/Button/Button"
import { useContext } from "react"
import CartContext from "../../store/CartContext"

const CartItem = (props) => {

    const cartCtx = useContext(CartContext)

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
                <Button onClick={()=>{cartCtx.onChangeQuantity(props.id,true)}}>+</Button>
                <Button onClick={()=>{cartCtx.onChangeQuantity(props.id,false)}}>-</Button>
            </div>
        </li>
    )
}

export default CartItem