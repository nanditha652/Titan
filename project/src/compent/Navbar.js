import React from 'react'
import titanicon from '../images/titanlogo.svg'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='nav'>
      <ul>
  <Link to="/homepage">
    <li><img src={titanicon}  alt='...'/></li>
  </Link>
  <Link to="/fast">
  <li>Fastrack</li>

  </Link>
    <Link to="/sonata">
  <li>Sonata</li>

  </Link>
    <Link to="/titan">
  <li>Titan</li>
  </Link>
        
  <Link to='/cart'><li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
  </svg></li>
  </Link>

  <Link to='/fav'><li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
  </svg></li>
  </Link>
  </ul>
    </div>
  )
}

export default Navbar