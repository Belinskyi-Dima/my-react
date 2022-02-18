
export const GET_SEARCHED_PRODUCTS_SUCCESS = 'GET_SEARCHED_PRODUCTS_SUCCESS';
export const getSearchedProductsSuccess = (productData) => ({
    type: GET_SEARCHED_PRODUCTS_SUCCESS,
    payload: productData, 
});