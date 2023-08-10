import React,{useEffect, useState} from "react"
import { useDispatch, useSelector} from "react-redux"
import { addtocart } from "../../redux/actions/actionsCart"
import { removeItemFromCart } from "../../redux/actions/actionsCart"
import{useParams} from "react-router-dom"

const Cart = (data) =>{
    const dispatch=useDispatch()
    const [total, setTotal] = useState(0);
    const [count,setCount]=useState(0);
    const increment = () => {
      setCount(count + 1);
    };
    const decrement = () => {
      count > 0 && setCount(count - 1);
    };
    const params = useParams();
    const { id: productId } = params;

    useEffect(()=>{
        if(productId){
     dispatch(addtocart(productId))
        }
 },[dispatch,productId])
 const handleRemove  = (itemId) => {
  dispatch(removeItemFromCart(itemId));
}
 const cart = useSelector ((state)=>state.cartReducer.cartItems)

return(
    <div>
        
       <ul>
            {cart.map((item) => (
             
             <div key={item.id} className="cart-item">
              <li >
                <div className="row">
                  <div>
                    <img
                      src={item.image}
                      alt={item.desc}
                      className="small"
                    ></img>
                  </div>



                  <div>${item.prix}</div>
                  <button onClick={() => {setCount(count+1)}}>+</button>
      <p>{count}</p>
      <button onClick={() => {setCount(count-1)}}>-</button>
                  <button onClick={() => handleRemove(item.id)} >Remove</button>
                </div>
              </li>
              </div>
))}

          </ul>


    </div>
)

}
export default Cart