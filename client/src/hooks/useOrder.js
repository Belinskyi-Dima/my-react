
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'; 




const useOrder = () => {  
 
    const isLogged = useSelector((state) => state.authReducer.isAuth);

    const orderShipment = useSelector((state) => state.checkoutReducer.order_shipment);
    const customerId = useSelector((state) => state.checkoutReducer.customerId);
    const total = useSelector((state) => state.cartReducer.total);
    const orderProducts = useSelector((state) => state.checkoutReducer.orderProducts);
    const cart_products = useSelector((state) => state.cartReducer.products); 
    



    const order_products = () => {

        return cart_products.map(item => item.id).join(',');
    }


    const order = () => {

        if (isLogged) {

            return {
                customerId: customerId,
                email: orderShipment.email,
                mobile: orderShipment.phone,
                letterSubject: "Thank you for order!",
                letterHtml: `<h1>Your order is placed.</h1>
                </br></br> 
                <h2 style=>your order on <span style='color:red;'>${total} EUR</span> is placed. Please wait for delivery</h2>
                </br></br>`,
            }

        } else {

            let result = orderProducts.reduce((acc, item) => {

                acc.products.push({
                    product: item, 
                    sizes: cart_products.find(i => i.id === item._id).size, 
                })

                return acc; 
            }, {
                products: [], 
                email: orderShipment.email,
                mobile: orderShipment.phone,
                letterSubject: "Thank you for order!",
                letterHtml: `<h1>Your order is placed.</h1>
                </br></br> 
                <h2 style=>your order on <span style='color:red;'>${total} EUR</span> is placed. Please wait for delivery</h2>
                </br></br>`,
            })

            return result;

        }
    }

    return {
          order, 
          order_products, 
    }
}

export default useOrder; 