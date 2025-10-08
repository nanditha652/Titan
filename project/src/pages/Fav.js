import React from 'react'
import './Fav.css'

import { useSelector, useDispatch } from 'react-redux';
import { favdelete} from '../reactredux/Favslice';

function Favourite() {
    const favditemsfromredux= useSelector((state)=> state.favoritvalue.favItems)
    const dispatch=useDispatch()

  return (
    <div className='container'>
    <div className='row productrow'>
    
        {
            favditemsfromredux.map((data)=>(
            <div className='col-4'>
                <img src={data.image} className="card" alt="..."/>
            <div class="card-body">
                <h5>{data.title}</h5>
                <p>{data.price}</p> 
                 
        <button className='btn8' onClick={()=>dispatch(favdelete(data))}>Delete</button>
       
              </div>
              </div>
            )) }
    </div>
        </div>
  )
}

export default Favourite