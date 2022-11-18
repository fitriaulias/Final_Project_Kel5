import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addAllItem: (state, action) => {
            state.products = action.payload
            localStorage.setItem('allProducts', JSON.stringify(action.payload))
        },
        updateItemStock: (state, action) => {
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
    addAllItem,
    updateItemStock
} = productSlice.actions

export default productSlice.reducer
