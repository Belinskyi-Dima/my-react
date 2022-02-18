
const api_updateCartParser = (data) => { 

    return data.reduce((acc, item) => {

        const updated_product = {
            product: item.id, 
            sizes: item.size,
        };

        acc.products.push(updated_product); 

        return acc; 
    }, {
            products: [], 
        }
    ); 
}

export default api_updateCartParser;