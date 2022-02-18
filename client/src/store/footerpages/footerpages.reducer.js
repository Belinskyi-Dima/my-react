import { GET_FOOTER_PAGES } from './footerpages.action'; 




const initState = {
    page: false,
} 


const pagesReducer = (state = initState, action) => {

    switch(action.type) {

        case GET_FOOTER_PAGES:  
            return { 
                ...state, 
                page: action.payload, 
            }


        default: 
            return state;
          
    }
}
 

export default pagesReducer; 