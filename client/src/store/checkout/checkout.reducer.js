
import { GET_BRANCH, 
         SET_SHIP_METHOD, 
         SELECT_SHIP_METHOD, 
         SELECT_BRANCH, 
         CHANGE_ACTIVE_STEP, 
         SET_PAYMENT_URL, 
         SET_PAY_METHOD, 
         SELECT_PAY_METHOD, 
         STORE_ORDER_SHIPMENT, 
         GET_CUSTOMER_ID, 
         GET_ORDER_PRODUCTS, 
         SEND_ORDER } from './checkout.actions'


         

const initState = {
    active_step: 0, 
    init_ship_methods: [], 
    ship_method: '', 
    init_branches: [], 
    branch: '', 
    init_pay_methods: [], 
    pay_method: '', 
    payment_url: '', 
    order_shipment: {},
    customerId: '', 
    orderProducts: [], 
    orderNumber: '', 
} 


const checkoutReducer = (state = initState, action) => {

switch(action.type) {

    case CHANGE_ACTIVE_STEP:  
        return { 
            ...state, 
            active_step: action.payload, 
        }

    case GET_BRANCH:  
        return { 
            ...state, 
            init_branches: action.payload, 
        }

    case SELECT_BRANCH:  
        return { 
            ...state, 
            branch: action.payload, 
        }

    case SET_SHIP_METHOD:  
        return { 
            ...state, 
            init_ship_methods: action.payload, 
        }

    case SELECT_SHIP_METHOD:  
        return { 
            ...state, 
            ship_method: action.payload, 
        }

    case SET_PAYMENT_URL:  
        return { 
            ...state, 
            payment_url: action.payload, 
        }

    case SET_PAY_METHOD: 
        return { 
            ...state, 
            init_pay_methods: action.payload, 
        }

    case SELECT_PAY_METHOD: 
        return { 
            ...state, 
            pay_method: action.payload, 
        }
        
    case STORE_ORDER_SHIPMENT: 
        return { 
            ...state, 
            order_shipment: action.payload, 
        }
        
    case GET_CUSTOMER_ID: 
        return { 
            ...state, 
            customerId: action.payload, 
        }

        
    case GET_ORDER_PRODUCTS: 
        return { 
            ...state, 
            orderProducts: action.payload, 
        }

    case SEND_ORDER: 
        return { 
            ...state, 
            orderNumber: action.payload, 
        }



    default: 
        return state;
     
    }
}


export default checkoutReducer;