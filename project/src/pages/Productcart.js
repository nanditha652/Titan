import React from 'react'
import './Productcart.css'
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromcart, updateQuantity } from '../reactredux/Cartslice';
function Productcart() {
    const cart = useSelector((state)=>state.cartvalue.cart)
        const dispatch=useDispatch();

      const incrementCart=(id,quantity)=>{
         dispatch(updateQuantity({id, quantity : quantity+1}))
      }     
              
  const decrementCart=(id,quantity)=>{
    if(quantity>1){
      dispatch(updateQuantity({id, quantity : quantity-1})
      )
    }
  }
  return (
    <div className='container'>
<div className='row productrow'>

    {
        cart.map((data)=>(
        <div className='col-4'>
            <img src={data.image} className="card" alt="..."/>
        <div class="card-body">
            <h5>{data.title}</h5>
            <p>{data.price}</p> 
             
    <button className='movebtn' onClick={()=>dispatch(deleteFromcart(data))}>Delete</button>
    <div className='' style={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>
     <button className='incbtn' onClick={()=>{decrementCart(data.id,data.quantity)}}>-</button>
      {data.quantity}
     <button className='dicbtn' onClick={()=>{incrementCart(data.id,data.quantity)}} >+</button>
          </div>
          </div>
          </div>
        )) }
</div>

    </div>
    
  )
}

export default Productcart