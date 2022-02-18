import { getUserProfile, editUserProfile } from './userProfile.actions';
import { setError } from '../error-handler/error-handler.actions';

export const setAuthToken = () => {
   const token = localStorage.getItem('token')
   if (token) {
     dispatch({
        type: types.clientProfileGetSuccess,
     })
   }
};

export const getProfile = () => {
   return (dispatch) => {
      fetch('http://localhost:5000/api/customers/customer', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then(user => {
        dispatch(getUserProfile(user));
        localStorage.getItem('token', data.token);
      })
   }
}

export const editProfile = () => {
   return (dispatch) => {
      fetch('http://localhost:5000/api/customers', {
         method: 'PUT'
      })
         .then(r => r.json())
         .then(data => {
            dispatch(editUserProfile(clientProfile))
            localStorage.getItem('token', data.token)
         }).catch(err => { 
            dispatch(setError(err))
         })
   }
}