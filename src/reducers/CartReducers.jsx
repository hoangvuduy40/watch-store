const initialState = {
    list: [],
    logger: false,
};

const CartReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CART': {
            const productInCart = state.list.find(
                (p) => p.id == action.payload.id,
            );
            if (!productInCart) {
                const newCart = [...state.list];
                newCart.push(action.payload);
                const objIndex = newCart.findIndex(
                    (obj) => obj.id == action.payload.id,
                );
                newCart[objIndex].quantity = 1;
                return { ...state, list: newCart, logger: true };
            } else {
                const newCart = state.list;
                const objIndex = newCart.findIndex(
                    (obj) => obj.id == action.payload.id,
                );

                if (newCart[objIndex].quantity === 1) {
                    newCart[objIndex].quantity = 2;
                } else {
                    newCart[objIndex].quantity = newCart[objIndex].quantity + 1;
                }
                return { ...state, list: [...newCart], logger: true };
            }
        }
        case 'DELETE_QUANTITY_CART': {
            const newCart = state.list;
            const objIndex = newCart.findIndex(
                (obj) => obj.id == action.payload.id,
            );

            if (newCart[objIndex].quantity > 1) {
                newCart[objIndex].quantity = newCart[objIndex].quantity - 1;
                console.log(newCart[objIndex].quantity);
            } else {
                newCart.splice(objIndex, 1);
            }
            return { ...state, list: [...newCart], logger: false };
        }
        case 'UPDATE_CART': {
            const newCart = state.list;
            const objIndex = newCart.findIndex(
                (obj) => obj.id == action.payload.id,
            );
            newCart[objIndex].quantity = action.payload.quantity;

            return { ...state, list: [...newCart] };
        }
        case 'DELETE_ALL_CART': {
            const newCart = state.list;
            const objIndex = newCart.findIndex(
                (obj) => obj.id == action.payload.id,
            );
            newCart.splice(objIndex, 1);
            return { ...state, list: [...newCart] };
        }
        case 'DELETE_CART': {
            return { ...state, list: [] };
        }
        case 'SET_LOGGER': {
            return { ...state, logger: false };
        }
        case 'ADD_CART_DETAIL': {
            const productInCart = state.list.find(
                (p) => p.id == action.payload.id,
            );
            if (!productInCart) {
                const newCart = [...state.list];
                newCart.push(action.payload);
                return { ...state, list: newCart, logger: true };
            } else {
                const newCart = [...state.list];
                const objIndex = newCart.findIndex(
                    (obj) => obj.id == action.payload.id,
                );
                newCart[objIndex].quantity = action.payload.quantity;
                return { ...state, list: [...newCart], logger: true };
            }
        }
        default:
            return state;
    }
};

export default CartReducers;
