import classes from "./MealItem.module.css"
import Button from "../../parts/Button/Button"
import Input from "../../parts/Input/Input"
import { useState,useContext } from "react"
import Context from "../../store/Context"

const MealItem = (props) => {

    const [quantity,setQuantity] = useState(1)

    const changeQuantityHandler = (event) => {
        const quantity = event.target.value
        setQuantity(quantity <= 0 ? 1 : quantity)
    }

    const addToCartHandler = () => {
        ctx.onAddToCart(props.id,quantity)
        setQuantity(1)
    }

    const ctx = useContext(Context)

    return(
        <li className={classes.item}>
            <div className={classes.info}>
                <h3>{props.name}</h3>
                <p>{props.desc}</p>
                <div className={classes.price}>${props.price}</div>
            </div>
            <div className={classes.actions}>
                <Input 
                    type="number"
                    label="Quantity" 
                    value={quantity}
                    onChange={changeQuantityHandler} />
                <Button onClick={addToCartHandler}> 
                    +Add
                </Button>
            </div>
        </li>
    )
}

export default MealItem