
const api_cartParser = (data) => { 

    return data.products.reduce((acc, item) => {

        const new_product = {
            id: item.product._id,
            size: item.sizes.reduce((ac, i) => { 

                const new_size = {
                    name: i.name, 
                    quantity: i.quantity
                }; 

                ac.push(new_size); 

                return ac;

            }, []), 
        };
    
        acc.products.push(new_product);
        return acc; 
    }, {
        cart_id: data._id, 
        products: [], 
        }
    ); 
}

export default api_cartParser; 