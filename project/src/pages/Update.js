import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
import './Update.css'

const Update = () => {

const [ProductItems, setProductItems] = useState([]);

useEffect(() => {

fetch(`http://localhost:6300/gettitandata`)

  .then((res) => res.json())

  .then((data) => setProductItems(data))

  .catch((error) => {

  console.error('Fetch error:', error);

  toast.error('Failed to load data');

  });

}, []);

const DeleteItems = (id) => {

fetch(`http://localhost:6300/del/${id}`, {

  method: "DELETE"})

  .then((res) => res.json())

  .then((data) => {

  toast.error('Deleted successfully');

  setProductItems((prevProductItems) =>

  prevProductItems.filter((Item) => Item._id !== id)

);

  })
  .catch((error) => {
  console.error('Delete error:', error);
  toast.error('Failed to delete item');
  });

};

return (

<div className='table'>

<div className='card'>

<table>

<thead>

<tr>

<th>Product Name</th>

<th>Description</th>

<th>Gender</th>

<th>About Product</th>

<th>ACTIONS</th>

</tr>

</thead>

<tbody>

{ProductItems?.map((Item) => (

<tr key={Item._id}>

  <td>{Item.product}</td>


  <td>{Item.about}</td>

  <td>{Item.gender}</td>

  <td>{Item.bio}</td>

  <td>

    <button

      className='btn5'

      onClick={() => DeleteItems(Item._id)}>

      Delete

    </button>

    <Link to={`/edit/${Item._id}`}>

      <button className='btn5'>

        <FiEdit />

      </button>

    </Link>

  </td>

</tr>

))}

</tbody>

</table>

</div>

</div>

);

};





export default Update;