
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { productsToRender } from '../store/cart/cart.actions'; 
import { changeProductsCount } from '../store/cart/cart.actions';
import { setError } from '../store/error-handler/error-handler.actions';

import { useAPIToken } from './useAPIToken';




const useCartDetails = () => { 

    const { server } = useAPIToken();

    const cart_products = useSelector((state) => state.cartReducer.products); 
    const product_details = useSelector((state) => state.cartReducer.productsRender); 
    const productsCounter = useSelector((state) => state.cartReducer.productsCounter); 
    
    const dispatch = useDispatch();

    

    const parser = (data) => {

        let result_products = []; 

         
        cart_products.forEach(item => {
            let received_product = data.products.find(i => i._id === item.id); 


            item.size.forEach(j => {

                result_products.push({
                    id: item.id, 
                    name: received_product.name,
                    price: received_product.currentPrice, 
                    imageUrl: received_product.imageUrls[0], 
                    color: received_product.color, 
                    size: j.name, 
                    quantity: j.quantity,
                });
            })
        })

        return result_products; 
    }

 
    useEffect(() => {

        let result = cart_products.map(item => item.id).join(','); 

         

        if (result) {
            fetch(`${server}/products/filter?_id=${result}`)
                .then(r => r.json())
                .then(data => dispatch(productsToRender(parser(data)))) 
                .catch(err => dispatch(setError(err)))
        } else {
            dispatch(productsToRender([])); 
        }

    }, [cart_products]); 



    useEffect(() => { 

        let count = (product_details.reduce((sum, item) => sum + item.quantity, 0));
        dispatch(changeProductsCount(count));

    }, [product_details]);
    
    
    return {
        product_details, 
        productsCounter, 
    }
}

export default useCartDetails; 