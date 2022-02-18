
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 

import { getSearchedProducts } from '../store/search/search.thunks'; 




const useSearch = (searchParam) => {  
 
    const searchedProducts = useSelector((state) => state.searchedProductsReducer.searchedProducts); 
    const searchedProductsRequestState = useSelector((state) => state.searchedProductsReducer.searchedProductsRequestState); 
     
    const dispatch = useDispatch(); 


    useEffect(() => {
        dispatch(getSearchedProducts(searchParam)); 

    }, []); 


    return {
        searchedProducts, 
        searchedProductsRequestState
    }
}

export default useSearch; 