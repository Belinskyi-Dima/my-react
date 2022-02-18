import { SIGN_IN_SUCCESS, SIGN_IN_ERROR } from './auth.actions';




const initState = {
   isAuth: false,
   authError: 'none'
}


const authReducer = (state = initState, action) => {

   switch (action.type) {

      case SIGN_IN_SUCCESS:
         return {
            ...state,
            isAuth: action.payload.success
         }

      case SIGN_IN_ERROR:
         return {
            ...state,
            authError: action.payload
         }


      default:
         return state;

   }
}


export default authReducer;