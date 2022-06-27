import classes from "./CartItemsList.module.css"
import CartItem from "./CartItem"
import { useContext } from "react"
import Context from "../../store/Context"

const CartItemsList = (props) => {
    
    const ctx = useContext(Context)
    
    let totalAmount = 0

    return(
        <div className={classes.cart_items_list}>
            <ul className={classes.cart_items_list}>
                {
                    props.items.map((val,index)=>{

                        totalAmount = totalAmount + (val.price*val.quantity)

                        return <CartItem
                        key={index} 
                        id={val.id}
                        name={val.name}
                        quantity={val.quantity}
                        price={val.price}
                        onIncreaseQuantity={()=>ctx.onChangeQuantity(val.id,true)}
                        onDecreaseQuantity={()=>ctx.onChangeQuantity(val.id,false)} />
                        
                    })
                }
            </ul>
            <div className={classes.total}>
                <span className={classes.total_amount}>Total Amount</span>
                <span className={classes.price}>${totalAmount.toFixed(2)}</span>
            </div>
        </div>
    )
}

export default CartItemsList