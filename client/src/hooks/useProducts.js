
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 

import { getProducts } from '../store/products/products.thunks'; 




const useProducts = () => {  
 
    const products = useSelector((state) => state.productsReducer.products); 
     
    const dispatch = useDispatch(); 


    useEffect(() => {
        dispatch(getProducts()); 

    }, []); 


    return {
        products, 
    }
}

export default useProducts; 