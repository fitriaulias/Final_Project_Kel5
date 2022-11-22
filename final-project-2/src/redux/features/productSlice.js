import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: localStorage.getItem("allProducts")
    ? JSON.parse(localStorage.getItem("allProducts"))
    : [],
  cartTotalPrice: 0,
  cartTotalQuantity: 0,
};

export const products = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProducts: (state, action) => {
            state.products = action.payload
            localStorage.setItem('allProducts', JSON.stringify(action.payload))
        },
        updateStock: (state, action) => {
            const allProducts = JSON.parse(localStorage.getItem('allProducts'))
            const item = allProducts.find((item) => item.id === action.payload.id);
            item.stock = action.payload.stock
            const index = state.products.findIndex((product) => product.id === item.id);
            allProducts[index] = item
            localStorage.setItem('allProducts', JSON.stringify(allProducts))
            state.products = allProducts;
        }
    }
})

export const {
    addProducts,
    updateStock
} = products.actions

export default products.reducer
