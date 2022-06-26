import React,{useReducer} from "react"

const Context = React.createContext({
    modalVisible: false,
    cartItems:[],
    onAddToCart : (itemId,quantity)=>{},
    onIncreaseQuantity : (itemId)=>{},
    onDecreaseQuantity: (itemId)=>{}, 
    onModalState : (state)=>{} 
})

const defaultState = {
    items: [],
    modal:false
  };

const reducer = (state,action) => {

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
            if(updatedState.items.length <= 0) updatedState.modal = false
            return updatedState

        case "MODAL_STATE" : 
            
            updatedState.modal = action.modal
            return updatedState

        default: return state
    }
}

export const ContextProvider = (props) => {

    const [state,dispatchAction] = useReducer(reducer,defaultState)

    const addToCartHandler = (itemId,quantity) => {
        dispatchAction({type:"ADD_TO_CART",item:{id:itemId,quantity:quantity}})
    }

    const changeQuantityHandler = (itemId,icrease) => {
        dispatchAction({type:"CHANGE_QUANTITY",item:{id:itemId,icrease:icrease}})
    }

    const modalStateHandler = (state) => {
        dispatchAction({type:"MODAL_STATE",modal:state})
    }

    return (
        <Context.Provider
        value={{
            modalVisible:state.modal,
            cartItems:state.items,
            onAddToCart:addToCartHandler,
            onChangeQuantity:changeQuantityHandler,
            onModalState:modalStateHandler
        }} >
            {props.children}
        </Context.Provider>
    )
}

export default Context