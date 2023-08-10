import { useDispatch } from "react-redux"
import { deleteProduct } from "../../redux/actions/actionsProduct"
import { addOrder } from "../../redux/actions/actionsOrder";
import EditProduct from "./EditProduct"
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import Cart from "../pages/Cart"
import "../../App.css";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBBtn,
    MDBRipple,
  } from "mdb-react-ui-kit";
  <script crossOrigin="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"></script>;
const ProductCard=({data})=>{
  const user=useSelector((state)=>state.authReducer.user)
  const order=useSelector((state)=>state.orderReducer.user)
  const cart=useSelector((state)=>state.cartReducer.user)
  
  console.log(user,"user")
   const dispatch = useDispatch();
   const navigate = useNavigate()
   const deletee=()=>{
    dispatch(deleteProduct(data._id))
   }
   const addtocart=()=>{
    navigate(`/cart/${data._id}`)
   }
    return(
    <>  
 <div class="gallery">
  <div class="content">
    <img src={data.image}/>
    <p>{data.design}</p>
    <h6>{data.prix}$</h6>
    <button onClick={addtocart}>ADD TO CART</button>
    {user && user.isAdmin && (<>
      <button onClick={deletee}>Delete</button>
      <button ><EditProduct data={data} /></button></>)}
  </div>
 </div>
</>
    )
}
export default ProductCard
