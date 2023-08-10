import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionstypes/actionTypes";
const initState={
        cartItems: localStorage.getItem('cartItems')
          ? JSON.parse(localStorage.getItem('cartItems'))
          : []

}
const cartReducer=(state=initState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
        return{
            ...state,
            cartItems:[...state.cartItems,action.payload]
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload),
            };
            default:
                return state
        }
    }
export default cartReducer