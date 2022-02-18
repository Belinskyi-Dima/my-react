
export const GET_ONE_PRODUCT_SUCCESS = 'GET_ONE_PRODUCT_SUCCESS';
export const getOneProductSuccess = (productData) => ({
    type: GET_ONE_PRODUCT_SUCCESS,
    payload: productData, 
});