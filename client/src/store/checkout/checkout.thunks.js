
import { getBranch, 
         setShipMethod, 
         setPayMethod, 
         setPaymentUrl, 
         getCustomerId, 
         getOrderProducts, 
         sendOrder } from './checkout.actions'; 

import api_branchParser from '../../helpers/api_branchParser';
import api_shipMethodsParser from '../../helpers/api_shipMethodsParser';

import { useAPIToken } from '../../hooks/useAPIToken';




const { server, header } = useAPIToken();



export const get_branch = (search_str) => {

    return (dispatch) => {

        if (search_str) {
            // fetch(`https://publicapi.meest.com/locator/${search_str}`)
            fetch(`https://publicapi.meest.com/branches/${search_str}`) 
            .then(r => r.json())
            .then(data => dispatch(getBranch(api_branchParser(data.result))))
            // .catch(err => dispatch(setError(err)))
        }
    }
}



export const get_ship_methods = () => {

    return (dispatch) => {

            fetch(`${server}/shipping-methods`) 
            .then(r => r.json())
            .then(data => dispatch(setShipMethod(api_shipMethodsParser(data))))
            // .catch(err => dispatch(setError(err)))
    }
}



export const get_pay_methods = () => {

    return (dispatch) => {

            fetch(`${server}/payment-methods`) 
            .then(r => r.json())
            .then(data => dispatch(setPayMethod(api_shipMethodsParser(data))))
            // .catch(err => dispatch(setError(err)))
    }
}



export const get_payment_link = (url_param) => {

    return (dispatch) => {
        
        fetch(`https://api.stripe.com/v1/prices?currency=EUR&unit_amount=${url_param}&product=prod_L8xZcQvYIm3Wno`, {
            method: 'POST', 
            headers: {
                'Content_Type': 'application/x-www-form-urlencoded', 
                'Authorization': 'Bearer sk_test_51KSfC7F5Br8R7teBnCci26Rg6gY86T4wIfmT3Vr3YNscaqWvc9AHp8Hg3cYPvIdFlUpr6APFispMaKoic8DLKVey00oVpPS7BW'
            },
        })
            .then(r => r.json())
            .then(data => {
                fetch(`https://api.stripe.com/v1/payment_links?line_items[0][price]=${data.id}&line_items[0][quantity]=1&after_completion[redirect][url]=http://localhost:3000/checkout/payment-successful&after_completion[type]=redirect`, {
                    method: 'POST', 
                    headers: {
                        'Content_Type': 'application/x-www-form-urlencoded', 
                        'Authorization': 'Bearer sk_test_51KSfC7F5Br8R7teBnCci26Rg6gY86T4wIfmT3Vr3YNscaqWvc9AHp8Hg3cYPvIdFlUpr6APFispMaKoic8DLKVey00oVpPS7BW'
                    },
                })
                .then(r => r.json())
                .then(data => dispatch(setPaymentUrl(data.url)))
            })
            // .catch(err => dispatch(setError(err)))
    }
}



export const get_order_products = (IDs) => {

    return (dispatch) => {
       
            fetch(`${server}/products/filter?_id=${IDs}`, {
                method: 'GET', 
                headers: header,
            })
            .then(r => r.json())
            .then(data => dispatch(getOrderProducts(data.products)))
            // .catch(err => dispatch(setError(err)))
    }
}



export const get_customer_id = () => {

    return (dispatch) => {
       
            fetch(`${server}/customers/customer`, {
                method: 'GET', 
                headers: header,
            })
            .then(r => r.json())
            .then(data => dispatch(getCustomerId(data._id)))
            // .catch(err => dispatch(setError(err)))
    }
}



export const send_order = (order) => {

    return (dispatch) => {

            fetch(`${server}/orders`, {
                method: 'POST', 
                headers: header, 
                body: JSON.stringify(order), 
            }) 
            .then(r => r.json())
            .then(data => dispatch(sendOrder(data.order.orderNo)))
            // .catch(err => dispatch(setError(err)))
    }
}