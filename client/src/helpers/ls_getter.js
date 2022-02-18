
// returns array of products from local storage
const ls_getter = () => { 

    const retrievedStore = JSON.parse(localStorage.getItem('persist:root'));
    const ls_products = retrievedStore ? JSON.parse(retrievedStore.cartReducer).products : [];


    return ls_products; 
} 

export default ls_getter; 