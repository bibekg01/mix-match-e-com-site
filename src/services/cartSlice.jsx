import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    
    name: 'cart',
    initialState: {
        cart: [],
        cartCount: 0,
    },
    reducers: {
        addToCart(state, action){
            const id = action.payload.id;
            const existingProduct = state.cart.find((item) => item.id === id );
            if(existingProduct) {
                existingProduct.quantity += 1;
                return;
            }
            state.cart.push({...action.payload, quantity: 1});
        },
        removeFromCart(state, action) {
            state.cart.state.cart.filter((item) => item.id != action.payload.id);
        },
        addToCartCount(state) {
            const uniqueProducts = state.cart.filter(
                (item, index, self) => index === self.findIndex((t) => t.id === item.id)
            );
            state.cartCount = uniqueProducts.length;
        },
    },
});

export const {addToCart, removeFrom, addToCartCount} = cartSlice.actions;
export default cartSlice.reducer;