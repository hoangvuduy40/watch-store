export const actAddCart = (product) => {
    return {
        type: 'ADD_CART',
        payload: product,
    };
};
export const deleteQuantityCart = (product) => {
    return {
        type: 'DELETE_QUANTITY_CART',
        payload: product,
    };
};
export const updateCart = (product) => {
    return {
        type: 'UPDATE_CART',
        payload: product,
    };
};
export const deleteAllCart = (product) => {
    return {
        type: 'DELETE_ALL_CART',
        payload: product,
    };
};
export const deleteCart = () => {
    return {
        type: 'DELETE_CART',
    };
};
