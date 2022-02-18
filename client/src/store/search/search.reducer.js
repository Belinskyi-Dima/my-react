
import { GET_SEARCHED_PRODUCTS_SUCCESS } from './search.actions'; 




const initState = {
    searchedProducts: [],
    searchedProductsRequestState: 'loading' 
} 


const searchedProductsReducer = (state = initState, action) => {

    switch(action.type) {

        case GET_SEARCHED_PRODUCTS_SUCCESS:  
            return { 
                ...state, 
                searchedProducts: action.payload, 
                searchedProductsRequestState: 'success'
            }


        default: 
            return state;
          
    }
}
 

export default searchedProductsReducer; 