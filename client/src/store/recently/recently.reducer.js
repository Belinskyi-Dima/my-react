
import { GET_RECENTLY_PRODUCTS_SUCCESS } from './recently.actions'; 

const initState = {
    recentlyViewedProducts: [],
    recentlyViewedProductsRequestState: 'loading' 
} 

const recentlyViewedProductsReducer = (state = initState, action) => {
	// console.log(state.recentlyViewedProducts);
    switch(action.type) {
        
        case GET_RECENTLY_PRODUCTS_SUCCESS:  
            return { 
                ...state, 
                recentlyViewedProducts: action.payload, 
                recentlyViewedProductsRequestState: 'success'
            }
        default: 
            return state;
          
    }
}

export default recentlyViewedProductsReducer; 