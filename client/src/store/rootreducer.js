
import { applyMiddleware, combineReducers } from 'redux'; 
 
import errorHandlerReducer from './error-handler/error-handler.reducer';
import productsReducer from './products/products.reducer';
import categoriesReducer from './catalog/catalog.reducer'; 
import pagesReducer from './footerpages/footerpages.reducer';
import cartReducer from './cart/cart.reducer';
import authReducer from './auth/auth.redecer';
import productReducer from './product/product.reducer';
import searchedProductsReducer from './search/search.reducer';

import checkoutReducer from './checkout/checkout.reducer';

import recentlyReducer from './recently/recently.reducer';
import userPagesReducer from './userProfileTabs/userPages.reducer'
import userProfileReducer from './userProfile/userProfile.reducer'




const rootReducer = combineReducers({
    errorHandlerReducer, 
    productsReducer,
    categoriesReducer, 
    cartReducer,
    authReducer, 
    pagesReducer,
    productReducer,
    searchedProductsReducer, 
    checkoutReducer,
    searchedProductsReducer,
    recentlyReducer,
    userPagesReducer,
    userProfileReducer, 
}); 


export default rootReducer; 