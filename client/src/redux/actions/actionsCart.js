import  axios from "axios"

import { ADD_TO_CART,REMOVE_FROM_CART } from "../actionstypes/actionTypes"
export const addtocart =  (idProduct) => async (dispatch,getState) => {
   const {data} = await axios.get(`/api/product/search/${idProduct}`)
   console.log(data,"hello")
   const {
    cartReducer:{
        cartItems
    }

  } = getState();
  console.log(cartItems,"nihahaha")
  console.log(getState(),"kokoklo")
   dispatch({
            type:ADD_TO_CART,
            payload:
                {name:data.product.name,
                desc:data.product.desc,
                prix:data.product.prix,
                qte:data.product.qte,
                image:data.product.image}
            })
            localStorage.setItem(
                'cartItems',
                JSON.stringify(getState().cartReducer.cartItems)
              );
}
export const removeItemFromCart =  (itemId) =>  {
    return{
        type: REMOVE_FROM_CART,
        payload: itemId,
    }
   
 }