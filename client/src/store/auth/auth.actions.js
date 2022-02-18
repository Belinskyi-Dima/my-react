// export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST'
// export const signInRequest = (user) => {
//    return {
//       action: SIGN_IN_REQUEST,
//       payload: user
//    }
// }

export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const signInSuccess = (data) => {
   return {
      type: SIGN_IN_SUCCESS,
      payload: data
   }
}

export const SIGN_IN_ERROR = 'SIGN_IN_ERROR'
export const signInError = (string) => {
   return {
      type: SIGN_IN_ERROR,
      payload: string
   }
}