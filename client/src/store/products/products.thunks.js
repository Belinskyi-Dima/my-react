
import { getAllProductsSuccess } from './products.actions'; 
import { setError } from '../error-handler/error-handler.actions'; 

// get all products
export const getProducts = () => {
    return (dispatch) => {
        fetch('http://localhost:5000/api/products')
            .then(r => r.json())
            .then(data => dispatch(getAllProductsSuccess(data)))
            .catch(err => dispatch(setError(err)))
    }
}