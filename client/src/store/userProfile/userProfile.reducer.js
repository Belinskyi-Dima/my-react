import { GET_USER_PROFILE, EDIT_USER_PROFILE } from './userProfile.actions';

const initState = {
	token: localStorage.getItem('token') || null,
   clientProfileEditSuccess: null,
   userProfile: {},
}

const userProfileReducer = (state = initState, action) => {

   switch (action.type) {
      case GET_USER_PROFILE: {
         return {
           ...state,
           userProfile: action.payload,
         }
      }
   
      case EDIT_USER_PROFILE:
         return {
            ...state,
            editUserProfile: action.payload.success
         }


      default:
         return state;

   }
}


export default userProfileReducer;