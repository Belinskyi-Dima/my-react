import { GET_CATEGORIES_SUCCESS } from './catalog.actions'; 




const initState = {
    categories: [],
} 


const categoriesReducer = (state = initState, action) => {

    switch(action.type) {

        case GET_CATEGORIES_SUCCESS:  
            return { 
                ...state, 
                categories: action.payload, 
            }


        default: 
            return state;
          
    }
}
 

export default categoriesReducer; 