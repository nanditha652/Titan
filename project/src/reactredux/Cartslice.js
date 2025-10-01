import {createSlice} from '@reduxjs/toolkit';

const storeage = localStorage.getItem('cart');

const initialState ={
    cart:storeage?JSON.parse(storeage):[]
}
const CartSlice = createSlice({
    name: 'cartvalue',
    initialState,
    reducers:{
        addTocart: (state,action)=>{
            const newlist = action.payload
            const existlist = state.cart.find(Items=>Items.id === newlist)

            if(existlist){
                existlist.quantity = newlist.quantity
            }
            else{
                state.cart.push(newlist)
            }

            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        deleteFromcart : (state,action)=>{
            state.cart=state.cart.filter(Items=>Items.id !== action.payload.id)

            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        updateQuantity : (state,action)=>{
            const{id,quantity} = action.payload
            const itemUpdate = state.cart.find(Items=>Items.id === id)

            if(itemUpdate){
                itemUpdate.quantity = quantity
            }
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
    }
})
export default CartSlice.reducer;
export const {addTocart, deleteFromcart, updateQuantity} = CartSlice.actions