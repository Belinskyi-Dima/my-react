
import { getOneProductSuccess } from './product.actions'; 
import { setError } from '../error-handler/error-handler.actions'; 

// get one product
export const getProduct = (itemNo) => {
    return (dispatch) => {
        fetch(`http://localhost:5000/api/products/${itemNo}`)
            .then(r => r.json())
            .then(data => dispatch(getOneProductSuccess(data)))
            .catch(err => dispatch(setError(err)))
    }
}