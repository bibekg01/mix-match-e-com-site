import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './services/cartSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
});

export default store;