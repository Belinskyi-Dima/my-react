
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 

import { getProduct } from '../store/product/product.thunks'; 




const useProduct = (itemNo) => {  
 
    const product = useSelector((state) => state.productReducer.product); 
    const productRequestState = useSelector((state) => state.productReducer.productRequestState); 
     
    const dispatch = useDispatch(); 


    useEffect(() => {
        dispatch(getProduct(itemNo)); 

    }, []); 


    return {
        product, 
        productRequestState
    }
}

export default useProduct; 