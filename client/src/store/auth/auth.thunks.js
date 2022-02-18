import { signInSuccess, signInError } from './auth.actions';
import { setError } from '../error-handler/error-handler.actions';

export const signIn = (userData) => {
   return (dispatch) => {
      fetch('http://localhost:5000/api/customers/login', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(userData)
      })
         .then(r => {
            if (r.ok) {
               return r.json()
            } else {
               dispatch(signInError(true))
            }
         })
         .then(data => {
            if (data) {
               dispatch(signInSuccess(data))
               localStorage.setItem('token', data.token)
            } else {
               return false
            }
         })
         .catch(err => { 
            dispatch(setError(err))
         })
   }
}

export const signUp = (userData) => {
   return (dispatch) => {
      fetch('http://localhost:5000/api/customers', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(userData)
      })
         .then(r => {
            console.log(r);
            if (r.ok) {
               dispatch(signInError('success'))
               return r.json()
            } else {
               dispatch(signInError('error'))
            }
         })
         .then(data => {
         })
         .catch(err => dispatch(setError(err)))
   }
}