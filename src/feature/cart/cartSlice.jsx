import {createSlice} from '@reduxjs/toolkit'
import {CART_ITEM_QTY_DECREMENT, CART_ITEM_QTY_INCREMENT} from '../../types/cartQtyType'

const initialState = {
    cartItems : [],
    cartItemCount: 0
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItems: (state, action) => {
            let isExists = false;
            const newItem = action.payload;
            state.cartItems = state.cartItems.map(item => {
                if(item.productID === newItem.productID){
                    item.cartQty ++;
                    item.cartPrice =  item.cartQty * item.price;
                    isExists = true;
                }
                return item;    
            })
            if(!isExists){
                state.cartItems.push({...newItem, cartQty:1, cartPrice: newItem.price});
                state.cartItemCount++;
            }
        },
        deleteItem: (state, action)=>{
            state.cartItems = state.cartItems.filter(item => item.productID !== action.payload.productID);
            state.cartItemCount--;
        },
        itemQtyHandler: (state, action)=>{
            state.cartItems = state.cartItems.map((item)=>{
                if(action.payload.productID === item.productID){
                    if(action.payload.type === CART_ITEM_QTY_INCREMENT){
                        item.cartQty ++;
                        item.cartPrice = item.cartQty * item.price;
                    }
                    if(action.payload.type === CART_ITEM_QTY_DECREMENT){
                        item.cartQty --;
                        item.cartPrice = item.cartQty * item.price;
                    }
                }
                return item;
            })
            
        }
    }
})

export const {addItems, itemQtyHandler, deleteItem} = cartSlice.actions;

export default cartSlice.reducer;