
import { getCart, addProductToCart, reduceProductsCount, deleteProductFromCart } from './cart.actions'; 
import { setError } from '../error-handler/error-handler.actions'; 

import { useAPIToken } from '../../hooks/useAPIToken';
import api_cartParser from '../../helpers/api_cartParser';
import api_updateCartParser from '../../helpers/api_updateCartParser';

import ls_getter from '../../helpers/ls_getter';




const { server, header } = useAPIToken();
 


// get cart from server
export const getWholeCartAPI = () => {  

    return (dispatch) => {

        fetch(`${server}/cart`, {
            method: 'GET', 
            headers: header, 
        })
            .then(r => r.json())
            .then(data => { 
                if (data) { 
                    dispatch(getCart(api_cartParser(data)));
                } else {
                    fetch(`${server}/cart`, {
                        method: 'POST', 
                        headers: header, 
                        body: JSON.stringify(api_updateCartParser(ls_getter())),
                    })
                        .then(r => r.json())
                        .then(data => dispatch(getCart(api_cartParser(data)))) 
                        .catch(err => dispatch(setError(err)))
                }
            })
            .catch(err => dispatch(setError(err)))
    }
} 




// get cart from local storage
export const getWholeCartLS = () => {
    return (dispatch) => {
             
        dispatch(getCart({cart_id: '', 
                          products: ls_getter() }));
    }
} 




// add product to cart
export const addProduct_toCart = (new_product, isLogged) => {

    return (dispatch) => {

        if (isLogged) {
            fetch(`${server}/cart`, {
                method: 'PUT', 
                headers: header,
                body: JSON.stringify(api_updateCartParser(new_product)),
            })
                .then(r => r.json())
                .then(data => {dispatch(addProductToCart(api_cartParser(data)))})
                .catch(err => dispatch(setError(err)))
        } else {
            dispatch(addProductToCart({cart_id: '', 
                                       products: new_product }));
        }
    }
}




// decrease counter of product position in cart
export const deleteProduct_fromCart = (product, isLogged) => {
    return (dispatch) => {

        if (isLogged) {
            fetch(`${server}/cart`, {
                method: 'PUT', 
                headers: header,
                body: JSON.stringify(api_updateCartParser(product)),
            })
                .then(r => r.json())
                .then(data => {dispatch(addProductToCart(api_cartParser(data)))})
                .catch(err => dispatch(setError(err)))
        } else { 
            dispatch(reduceProductsCount({cart_id: '', 
                                          products: product }));
        }
    } 
}




// delete whole cart position from cart
export const delProFromCart = (product, isLogged) => {
    return (dispatch) => {

        if (isLogged) { 

            if (product.length > 0) {
                fetch(`${server}/cart`, {
                    method: 'PUT', 
                    headers: header,
                    body: JSON.stringify(api_updateCartParser(product)),
                })
                    .then(r => r.json())
                    .then(data => dispatch(deleteProductFromCart(api_cartParser(data))))
                    .catch(err => dispatch(setError(err)))
            } else {
                fetch(`${server}/cart`, {
                    method: 'DELETE', 
                    headers: header,
                })
                    .then(r => r.json()) 
                    .then(data => dispatch(deleteProductFromCart({ cart_id: '', products: [] })))
                    .catch(err => dispatch(setError(err)))
            }

        } else {
            dispatch(deleteProductFromCart({cart_id: '', 
                                            products: product }));
        }
    }
}