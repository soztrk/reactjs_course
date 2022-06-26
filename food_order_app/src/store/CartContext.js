import React,{useContext, useState, useReducer} from "react"
import AlertContext from "./AlertContext"

const CartContext = React.createContext({
    cartItems:[],
    onAddToCart : (itemId,quantity)=>{},
    onIncreaseQuantity : (itemId)=>{},
    onDecreaseQuantity: (itemId)=>{},   
})

const defaultCartState = {
    items: []
  };

const cartReducer = (state,action) => {

    const updatedState = {...state}

    switch(action.type){

        case "ADD_TO_CART" :

            let match = false
            
            updatedState.items.forEach((val)=>{
                if(val.id === action.item.id) {
                    val.quantity = Number(val.quantity) + Number(action.item.quantity)
                    match = true
                }
            })
            if(!match) updatedState.items.unshift({id:action.item.id,quantity:action.item.quantity})
            return updatedState

        case "CHANGE_QUANTITY" :

            updatedState.items.forEach((val,index)=>{
                if(val.id === action.item.id) action.item.icrease ? val.quantity++ : val.quantity--
                if(val.quantity <= 0) updatedState.items.splice(index,1)
            })
            //if(updatedState.items.length <= 0) alertCtx.onModalState(false) // ERROR
            return updatedState

        default: return state
    }
}

export const CartContextProvider = (props) => {

    const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultCartState)
    //const [cartItems,setCartItems] = useState([])
    

    const addToCartHandler = (itemId,quantity) => {

        /* setCartItems(prevCartItems=>{
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
        }) */

        dispatchCartAction({type:"ADD_TO_CART",item:{id:itemId,quantity:quantity}})
    }

    const changeQuantityHandler = (itemId,icrease) => {
        /*
        setCartItems(prevCartItems=>{
            const updatedCartItems = [...prevCartItems]
            updatedCartItems.forEach((val,index)=>{
                if(itemId === val.id) icrease ? val.quantity++ : val.quantity--
                if(val.quantity <= 0) updatedCartItems.splice(index,1)
            })
            if(updatedCartItems.length <= 0) alertCtx.onModalState(false)
            return updatedCartItems
        })
        */
       dispatchCartAction({type:"CHANGE_QUANTITY",item:{id:itemId,icrease:icrease}})
    }

    return (
        <CartContext.Provider
        value={{
            cartItems:cartState.items,
            onAddToCart:addToCartHandler,
            onChangeQuantity:changeQuantityHandler
        }} >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext