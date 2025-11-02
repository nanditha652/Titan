import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Upload.css'

const Upload = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // stops page refresh

    const form = event.target;
    const product = form.product.value;
    const about = form.about.value;
    const gender = form.gender.value;
    const agree = form.agree.checked;
    const bio = form.bio.value
console.log( "product",product,"about", about, "gender", gender,"bio", bio,"agree", agree)

    // basic validation
    if (product === "" || about === "" || gender === "" || agree === "" || bio === "") {
      toast.warn("Please fill all fields!");
      return;
    }else{

    // data object
    const details = { product, about, gender, agree, bio};
    // send data to backend
    
fetch('http://localhost:6300/website', {
method: 'POST',
headers: {
  'Content-Type': 'application/json',
},
body: JSON.stringify(details),
})
.then((res) => res.json())

  .then((data) => {
    console.log("Response:", data);
    toast.success('Added successfully');

    form.reset();

    window.location.href = "/update";

  })

  .catch((error) => {

    console.error('Upload error:', error);

    toast.error('Failed to upload');

  });
}
  };
  return (
   <div>
<ToastContainer />
<div className="card upload">
<div className="card-body upload">
<form onSubmit={handleSubmit}>
  <h2>Product Details</h2><br/>

  <div className="upload1">
    <label><b>Product Name:</b></label>
    <select name="product" className="form-select ms-3">
      <option value="">-- Select Product --</option>
      <option value="Fast Track">Fast Track</option>
      <option value="Sonata">Sonata</option>
      <option value="Raga">Raga</option>
    </select>
  </div><br/>
  <div className="upload2">
    <label><b>Description:</b></label>
    <input
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
      NEXT
    </button>
  </div>
 </form>
 </div>
 </div>
 </div>
);
};
export default Upload;