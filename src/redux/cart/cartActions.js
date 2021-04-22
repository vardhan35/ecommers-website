import * as actionTypes from './cartConstants'

export const addToCart = (id)=>{
    return{
        type : actionTypes.ADD_TO_CART,
        payload : {
            id : id,
        }
    }
}
export const removeFromCart = (id)=>{
    return{
        type : actionTypes.REMOVE_FROM_CART,
        payload : {
            id : id,
        }
    }
}

export const addjustQty = (id, value)=>{
    return{
        type : actionTypes.ADJUST_QTY,
        payload : {
            id : id,
            qty : value
        }
    }
}