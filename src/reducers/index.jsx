import CartReducers from './CartReducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    cart: CartReducers,
});

export default rootReducer;
