import { GET_USER_PAGES } from './userPages.actions'; 

const initState = {
    page: false,
} 


const userPagesReducer = (state = initState, action) => {

    switch(action.type) {

        case GET_USER_PAGES:  
            return { 
                ...state, 
                page: action.payload, 
            }


        default: 
            return state;
          
    }
}
 

export default userPagesReducer;