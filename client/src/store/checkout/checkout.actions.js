
export const CHANGE_ACTIVE_STEP = 'CHANGE_ACTIVE_STEP';
export const changeActiveStep = (step) => ({
    type: CHANGE_ACTIVE_STEP,
    payload: step, 
});





export const GET_BRANCH = 'GET_BRANCH';
export const getBranch = (branches) => ({
    type: GET_BRANCH,
    payload: branches, 
});

export const SELECT_BRANCH = 'SELECT_BRANCH';
export const selectBranch = (branch) => ({
    type: SELECT_BRANCH,
    payload: branch, 
});





export const SET_SHIP_METHOD = 'SET_SHIP_METHOD';
export const setShipMethod = (init_ship_methods) => ({
    type: SET_SHIP_METHOD,
    payload: init_ship_methods, 
});

export const SELECT_SHIP_METHOD = 'SELECT_SHIP_METHOD';
export const selectShipMethod = (init_ship_methods) => ({
    type: SELECT_SHIP_METHOD,
    payload: init_ship_methods, 
});





export const SET_PAY_METHOD = 'SET_PAY_METHOD';
export const setPayMethod = (init_pay_methods) => ({
    type: SET_PAY_METHOD,
    payload: init_pay_methods, 
});

export const SELECT_PAY_METHOD = 'SELECT_PAY_METHOD';
export const selectPayMethod = (pay_method) => ({
    type: SELECT_PAY_METHOD,
    payload: pay_method, 
});





export const SET_PAYMENT_URL = 'SET_PAYMENT_URL';
export const setPaymentUrl = (url) => ({
    type: SET_PAYMENT_URL,
    payload: url, 
});




export const GET_ORDER_PRODUCTS = 'GET_ORDER_PRODUCTS';
export const getOrderProducts = (products) => ({
    type: GET_ORDER_PRODUCTS,
    payload: products, 
});



export const GET_CUSTOMER_ID = 'GET_CUSTOMER_ID';
export const getCustomerId = (cusID) => ({
    type: GET_CUSTOMER_ID,
    payload: cusID, 
});




export const STORE_ORDER_SHIPMENT = 'STORE_ORDER_SHIPMENT';
export const storeOrderShipment = (url) => ({
    type: STORE_ORDER_SHIPMENT,
    payload: url, 
});




export const SEND_ORDER = 'SEND_ORDER';
export const sendOrder = (order) => ({
    type: SEND_ORDER,
    payload: order, 
});