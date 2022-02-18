import { getCategoriesSuccess } from './catalog.actions'; 
import { setError } from '../error-handler/error-handler.actions'; 

// get categories
export const getCategories = () => {
    return (dispatch) => {
        fetch('http://localhost:5000/api/catalog')
            .then(r => r.json())
            .then(data => dispatch(getCategoriesSuccess(data)))
            .catch(err => dispatch(setError(err)))
    }
}