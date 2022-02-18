
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 

import { getRecentlyViewedProducts } from '../store/recently/recently.get'; 




const useRecentlyViewed = (items) => {  
    const recentlyViewedProducts = useSelector((state) => state.recentlyReducer.recentlyViewedProducts); 
    const recentlyViewedProductsRequestState = useSelector((state) => state.recentlyReducer.recentlyViewedProductsRequestState);
        
    const dispatch = useDispatch(); 


    useEffect(() => {
		 
		//  console.log(items);
		if(items){
            dispatch(getRecentlyViewedProducts(items)); 
        }
    }, [items]); 


    return {
        recentlyViewedProducts, 
        recentlyViewedProductsRequestState
    }
}

export default useRecentlyViewed; 