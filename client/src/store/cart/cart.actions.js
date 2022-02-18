
export const GET_CART = 'GET_CART';
export const getCart = (cart) => ({
    type: GET_CART,
    payload: cart, 
});
 

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const addProductToCart = (cart) => ({
    type: ADD_PRODUCT_TO_CART,
    payload: cart, 
});


export const REDUCE_PRODUCTS_COUNT = 'REDUCE_PRODUCTS_COUNT';
export const reduceProductsCount = (cart) => ({
    type: REDUCE_PRODUCTS_COUNT,
    payload: cart, 
});


export const DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART';
export const deleteProductFromCart = (cart) => ({
    type: DELETE_PRODUCT_FROM_CART,
    payload: cart, 
});


export const PUT_TOTAL_AMOUNT = 'PUT_TOTAL_AMOUNT';
export const putTotalAmount = (amount) => ({
    type: PUT_TOTAL_AMOUNT,
    payload: amount, 
});


export const CHANGE_PRODUCTS_COUNT = 'CHANGE_PRODUCTS_COUNT';
export const changeProductsCount = (count) => ({
    type: CHANGE_PRODUCTS_COUNT,
    payload: count, 
}); 

export const PRODUCTS_TO_RENDER = 'PRODUCTS_TO_RENDER';
export const productsToRender = (products) => ({
    type: PRODUCTS_TO_RENDER,
    payload: products, 
});