import { getViewedProductsSuccess } from './recently.actions' 
import { setError } from '../error-handler/error-handler.actions'; 

const API_KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjQ0NGQ5N2E4Yjk4MGE1MDVlZTExMSIsImZpcnN0TmFtZSI6IkV2YSIsImxhc3ROYW1lIjoiSG9yYmVua28iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NDQyNDMyMTQsImV4cCI6MTY0Nzg0MzIxNH0.ceeWAW2Pq8Mf0DfL-gimMmH5QNbEZLlxYahBy_CpOfI"

// get some searched products
export const getRecentlyViewedProducts = (items) => {
	
    return async (dispatch) => {
        fetch(`http://localhost:5000/api/products/filter?itemNo=${items}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : API_KEY,
            }
        })
            .then(response => response.json())
            .then(data => {
					// console.log(data);
					dispatch(getViewedProductsSuccess(data))
				})
            .catch(err => dispatch(setError(err)))
    }
}