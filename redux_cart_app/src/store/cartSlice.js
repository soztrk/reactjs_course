import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        totalQuantity:0,
    },
    reducers:{
        addItemToCart(state,action){
            const newItem = action.payload
            const existingItem = state.items.find(item=>item.id === newItem.id)

            if(!existingItem){
                state.items.push({
                    id:newItem.id,
                    name:newItem.name,
                    price:newItem.price,
                    quantity:1
                })
            }
            else{
                existingItem.quantity++
            }
        },
        removeItemFromCart(state,action){
            const id = action.payload
            const existingItem = state.items.find(item=>item.id === id)

            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id)
            }
            else{
                existingItem.quantity--
            }
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer