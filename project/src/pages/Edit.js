import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';

import { toast,ToastContainer } from 'react-toastify';

const Edit = () => {
const{id}=useParams();
const [productsItems,setproductsItems]=useState ({})
useEffect(()=>{
  fetch(`http://localhost:6300/getid/${id}`)
    .then((res)=>res.json())
    .then((data)=>setproductsItems(data))
  },[])
 const handleUpdate=(event)=>{
  event.preventDefault();
  const form = event.target;
  const product = form.product.value;
  const about = form.about.value;
  const gender = form.gender.value;
  const agree = form.agree.checked;
  const bio = form.bio.value
  const details = { product, about, gender, agree, bio};
fetch(`http://localhost:6300/edit/${id}`,{
  method:"PATCH",
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(details),
  })
  .then((res)=>res.json())
  .then((data)=>{
  toast.warn("successfully updated");
  window.location.href="/update";
  })
}
 return (
 <div>
<ToastContainer/>
<div class="card update6">
<div class="card-body update5">
<form onSubmit={handleUpdate}>
  <h2>Product Details</h2><br/>
<div className="upload1">
    <label><b>Product Name:</b></label>
    <select name="product" className="form-select ms-3" defaultValue={productsItems.product}>
      <option value="" >-- Select Product --</option>
      <option value="Fast Track">Fast Track</option>
      <option value="Sonata">Sonata</option>
      <option value="Raga">Raga</option>
    </select>
  </div><br/>
  <div className="upload2">
    <label><b>Description:</b></label>
    <input
    defaultValue={productsItems.about}
      type="text"
      name="about"
      className="form-control ms-3"
      placeholder="Enter product description"/>
  </div><br/>
  <label><b>Gender:</b></label><br/>
  <input type="radio" name="gender" value="Male" /> Male
<input type="radio" name="gender" value="Female" /> Female
<input type="radio" name="gender" value="Other" /> Other
<br/>
<br/>
<label><b>Quantity Stock:</b></label><br/>
<div>
<input type="checkbox" name="agree" />
<label>Available in stock</label>
</div>
<br/>
<h6><b>Details:</b></h6>
<textarea
  name="bio"
  className="form-control ms-3"
  rows="3"
  placeholder="Enter product or personal bio"></textarea><br/>

  <div className="upload4 mt-3">
    <button type="submit" className="btn btn-secondary">
      Go To Titan Home
    </button>
  </div>
 </form>
   </div>
   </div>
    </div>
  )
}
export default Edit