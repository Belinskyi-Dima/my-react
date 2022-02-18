
import { GET_ONE_PRODUCT_SUCCESS } from './product.actions'; 




const initState = {
    product: {},
    productRequestState: 'loading' 
} 


const productReducer = (state = initState, action) => {

    switch(action.type) {

        case GET_ONE_PRODUCT_SUCCESS:  
            return { 
                ...state, 
                product: action.payload, 
                productRequestState: 'success'
            }


        default: 
            return state;
          
    }
}
 

export default productReducer; 