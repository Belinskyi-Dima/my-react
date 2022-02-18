
import { GET_ALL_PRODUCTS_SUCCESS } from './products.actions'; 




const initState = {
    products: [],
} 


const productsReducer = (state = initState, action) => {

    switch(action.type) {

        case GET_ALL_PRODUCTS_SUCCESS:  
            return { 
                ...state, 
                products: action.payload, 
            }


        default: 
            return state;
          
    }
}
 

export default productsReducer; 