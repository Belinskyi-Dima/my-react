
export const GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS';
export const getAllProductsSuccess = (productsData) => ({
    type: GET_ALL_PRODUCTS_SUCCESS,
    payload: productsData, 
});