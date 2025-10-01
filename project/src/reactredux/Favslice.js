import {createSlice} from '@reduxjs/toolkit';

const storeage = localStorage.getItem('favItems');

const initialState ={
    favItems:storeage?JSON.parse(storeage):[]
}
const Favoriteslice = createSlice({
    name: 'favoritvalue',
    initialState,
    reducers:{
        favTocart: (state,action)=>{
            const newlist = action.payload
            const existlist = state.favItems.find(Items=>Items.id === newlist)

            if(existlist){
                existlist.quantity = newlist.quantity
            }
            else{
                state.favItems.push(newlist)
            }

            localStorage.setItem('cart', JSON.stringify(state.favItems))
        },
        favdelete : (state,action)=>{
            state.favItems=state.favItems.filter(Items=>Items.id !== action.payload.id)

            localStorage.setItem('cart', JSON.stringify(state.favItems))
        },
    }
})
export default Favoriteslice.reducer;
export const {favTocart, favdelete} = Favoriteslice.actions