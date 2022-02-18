
import { GET_CART, 
         ADD_PRODUCT_TO_CART, 
         REDUCE_PRODUCTS_COUNT, 
         DELETE_PRODUCT_FROM_CART, 
         PUT_TOTAL_AMOUNT, 
         CHANGE_PRODUCTS_COUNT, 
         PRODUCTS_TO_RENDER } from './cart.actions'; 




const initState = {
    cart_id: '', 
    products: [],
    productsCounter: 0, 
    total: 0, 
    productsRender: [], 
} 


const cartReducer = (state = initState, action) => {

    switch(action.type) {

        case GET_CART:  
            return { 
                ...state, 
                cart_id: action.payload.cart_id, 
                products: action.payload.products, 
            }

        case ADD_PRODUCT_TO_CART: 
            return { 
                ...state, 
                cart_id: action.payload.cart_id, 
                products: action.payload.products, 
                
            }

        case REDUCE_PRODUCTS_COUNT: 
            return { 
                ...state,
                cart_id: action.payload.cart_id, 
                products: action.payload.products,
            }

        case DELETE_PRODUCT_FROM_CART: 
            return { 
                ...state,
                cart_id: action.payload.cart_id, 
                products: action.payload.products,
            }

        case PUT_TOTAL_AMOUNT: 
            return { 
                ...state,
                total: action.payload, 
            }

        case CHANGE_PRODUCTS_COUNT: 
            return { 
                ...state,
                productsCounter: action.payload, 
            }

        case PRODUCTS_TO_RENDER: 
            return { 
                ...state,
                productsRender: action.payload, 
            }




        default: 
            return state;
          
    }
}
 

export default cartReducer;