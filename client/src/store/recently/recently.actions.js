
export const GET_RECENTLY_PRODUCTS_SUCCESS = 'GET_RECENTLY_PRODUCTS_SUCCESS';
export const getViewedProductsSuccess = (productData) => ({
    type: GET_RECENTLY_PRODUCTS_SUCCESS,
    payload: productData, 
});