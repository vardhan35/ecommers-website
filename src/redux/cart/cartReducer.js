import * as actionTypes from './cartConstants'
import {Products} from '../../Products'
const initialState ={
    products : Products,
    // [
    //         {
    //             id : 1,
    //             name : 'Backpack',
    //             image : './image/backpack.jpg'
    //         },
    //         {
    //             id : 2,
    //             name : 'Black Shoe',
    //             image : './image/black-shoe.jpg'
    //         },
    //         {
    //             id : 3,
    //             name : 'Cacti',
    //             image : './image/cacti.jpg'
    //         },
    //         {
    //             id : 4,
    //             name : 'Flowers',
    //             image : './image/flowers.jpg'
    //         },
    //         {
    //             id : 5,
    //             name : 'Gatsby',
    //             image : './image/gatsby.jpg'
    //         },
    //         {
    //             id : 6,
    //             name : 'Glass',
    //             image : './image/glass.jpg'
    //         },
    //         {
    //             id : 7,
    //             name : 'Grey-Chair',
    //             image : './image/grey-chair.jpg'
    //         },
    //         {
    //             id : 8,
    //             name : 'Handbag',
    //             image : './image/handbag-two.jpg'
    //         },
    //         {
    //             id : 9,
    //             name : 'Pen',
    //             image : './image/penn.jpg'
    //         },
    //         {
    //             id : 10,
    //             name : 'Pen(Silver)',
    //             image : './image/silver-penn.jpg'
    //         },
    //         {
    //             id : 11,
    //             name : 'lamp',
    //             image : './image/table-lamp.jpg'
    //         },
    //         {
    //             id : 1,
    //             name : 'Chair (White)',
    //             image : './image/White-chair.jpg'
    //         },
    //         {
    //             id : 12,
    //             name : 'Shoe (White)',
    //             image : './image/white-shoe.jpg'
    //         },
    //     ],
    cart : []
}


const cartReduser=(state = initialState, action)=>{
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            const item = state.products.find(prod=> prod.id === action.payload.id);
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false);
            return{
                ...state,
                cart : inCart ? state.cart.map(item => item.id === action.payload.id ? {...item, qty : item.qty+1} : item) : [...state.cart, {...item, qty : 1}], 
            };
        case actionTypes.REMOVE_FROM_CART:
            return{
                ...state,
                cart : state.cart.filter(item => item.id !== action.payload.id),
            };
        case actionTypes.ADJUST_QTY :
            return{
                ...state, 
                cart: state.cart.map(item => item.id === +action.payload.id ? {...item, qty : action.payload.qty} : item)
            }
        default :
        return state
    }
}

export default cartReduser

