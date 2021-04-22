import { combineReducers } from "redux";
import cartReduser from "./cart/cartReducer";


const rootReducer = combineReducers({
    shop : cartReduser,
})

export default rootReducer