import {createSlice} from "@reduxjs/toolkit"


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        changed:false
    },
    reducers:{
        addItemToCart(state,action){
            const newItem = action.payload
            const existingItem = state.items.find(item=>item.id === newItem.id)
            state.changed = true
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
            state.changed = true

            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id)
            }
            else{
                existingItem.quantity--
            }
        },
        replaceCart(state,action){
            state.items = action.payload.items
        }
    }
})



export const cartActions = cartSlice.actions
export default cartSlice.reducer