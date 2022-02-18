
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 

import { getWholeCartAPI, 
         getWholeCartLS, 
         addProduct_toCart, 
         deleteProduct_fromCart, 
         delProFromCart } from '../store/cart/cart.thunks'; 


import { putTotalAmount } from '../store/cart/cart.actions'; 

import gen_cartParser from '../helpers/gen_cartParser'; 




const useCart = () => {  
 
    const isLogged = useSelector((state) => state.authReducer.isAuth);

    const cart_products = useSelector((state) => state.cartReducer.products); 
    const product_details = useSelector((state) => state.cartReducer.productsRender);
    const total = useSelector((state) => state.cartReducer.total);

    const dispatch = useDispatch(); 

    


    useEffect(() => {

        isLogged ? dispatch(getWholeCartAPI()) : dispatch(getWholeCartLS());
    }, [isLogged]); 




    useEffect(() => { 

        let total = (product_details.reduce((sum, item) => sum + item.price*item.quantity, 0)).toFixed(2); 
        dispatch(putTotalAmount(total));
    }, [product_details]); 




    const add_products_to_cart = (product_id, sl_size) => {
    
        if (isLogged) {
            dispatch(addProduct_toCart(gen_cartParser({id: product_id, size: [{name: sl_size, quantity: 1}]}, 'add'), isLogged)); 

        } else {
            dispatch(addProduct_toCart(gen_cartParser({id: product_id, size: [{name: sl_size, quantity: 1}]}, 'add'), isLogged)); 
        } 
    }




    const change_count_of_products = (product, operation) => {
        return {
            'decrease': () => { 
                if (product.quantity > 1 && product.quantity <= 5) {
                    dispatch(deleteProduct_fromCart(gen_cartParser({id: product.id, size: [{name: product.size, quantity: 1}]}, 'del'), isLogged)); 

                }
            }, 
            'increase': () => {
                if (product.quantity > 0 && product.quantity < 5) { 

                    dispatch(addProduct_toCart(gen_cartParser({id: product.id, size: [{name: product.size, quantity: 1}]}, 'add'), isLogged)); 

                }
            } 
        }[operation](); 
    } 




    const delete_product_from_cart = (product) => { 

        dispatch(delProFromCart(gen_cartParser({id: product.id, size: [{name: product.size, quantity: 1}]}, 'delWhole'), isLogged)); 
    }




    return {
        cart_products,               // get all products from cart
        total,                       // total amount 
        add_products_to_cart,        // add product to cart function, call it from 'Add to cart' btn
        change_count_of_products,    // increase/decrease count of product in tje cart
        delete_product_from_cart,    // delete position (whole product) from cart 
    }
}

export default useCart; 