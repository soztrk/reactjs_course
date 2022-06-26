import React,{useContext, useState} from "react"
import AlertContext from "./AlertContext"

const CartContext = React.createContext({
    cartItems:[],
    onAddToCart : (itemId,quantity)=>{},
    onIncreaseQuantity : (itemId)=>{},
    onDecreaseQuantity: (itemId)=>{},   
})

export const CartContextProvider = (props) => {

    const [cartItems,setCartItems] = useState([])
    const alertCtx = useContext(AlertContext)

    const addToCartHandler = (itemId,quantity) => {
        setCartItems(prevCartItems=>{
            let match = false
            const updatedCartItems = [...prevCartItems]
            updatedCartItems.forEach((val)=>{
                if(val.id === itemId) {
                    val.quantity = Number(val.quantity) + Number(quantity)
                    match = true
                }
            })
            if(!match) updatedCartItems.unshift({id:itemId,quantity:quantity})
            return updatedCartItems
        })
    }

    const changeQuantityHandler = (itemId,icrease) => {
        setCartItems(prevCartItems=>{
            const updatedCartItems = [...prevCartItems]
            updatedCartItems.forEach((val,index)=>{
                if(itemId === val.id) icrease ? val.quantity++ : val.quantity--
                if(val.quantity <= 0) updatedCartItems.splice(index,1)
            })
            if(updatedCartItems.length <= 0) alertCtx.onModalState(false)
            return updatedCartItems
        })
    }

    return (
        <CartContext.Provider
        value={{
            cartItems:cartItems,
            onAddToCart:addToCartHandler,
            onChangeQuantity:changeQuantityHandler
        }} >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext