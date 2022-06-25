import React,{useState} from "react"

const CartContext = React.createContext({
    cartItems:[],
    onAddToCart : (itemId,quantity)=>{},
    onIncreaseQuantity : (itemId)=>{},
    onDecreaseQuantity: (itemId)=>{},   
})

export const CartContextProvider = (props) => {

    const [cartItems,setCartItems] = useState([])

    const addToCartHandler = (itemId,quantity) => {
        setCartItems(prevCartItems=>{
            const updatedCartItems = [...prevCartItems]
            updatedCartItems.unshift({id:itemId,quantity:quantity})
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