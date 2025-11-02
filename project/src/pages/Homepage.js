import React from 'react'
import menandwomen from '../images/menandwomen.png';
import titanwatch from '../images/titanwatch.png';
import ragacollection from '../images/ragacollection.png';
import backgroundimges from '../images/backgroundimges.png';
import backmen1 from '../images/backmen1.png';
import backwomen2 from '../images/backwomen2.png';
import cook from '../images/cocktails.webp'
import edge from '../images/edge.webp'
import mariti from '../images/maritime.webp'
import memoir from '../images/memoir.webp'
import silver from '../images/silvers.webp'
import steller from '../images/stellar.webp'
import won from '../images/women.webp'
import auto from '../images/automatics.webp'
import teat from '../images/testimonial.svg'
import disweb from '../images/Discover.webp'
import disblod from '../images/Discoverblod.webp'
import discoule from '../images/DiscoverCouple.webp'
import disluxe from '../images/DiscoverLuxe.webp'
import dissporty from '../images/DiscoverSporty.webp'
import gurant from '../images/Gurantee.svg'
import retur from '../images/Return.svg'
import ship from '../images/Shipping.svg'
import { Helmet } from 'react-helmet-async';

import './Homepage.css'
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <>
    <Helmet>
      <title>Titan Watch</title>
      <meta name='dis' content='hi'/>
    </Helmet>
    <div>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={menandwomen} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={titanwatch} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={ragacollection}class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>

<div>
    <section className='title'>
        <ul className='list'>
        <li>Cocktails</li>
        <li>Beastsellers</li>
        <li>Luxury</li>
        <li>New Arrivals</li>
        <li>Workwear</li>
        <li>Internation</li>
        <li>Raga</li>
        <li>Smart</li>
        <li>Clocks</li>
        
    </ul>
    </section>
</div>

<div>
    <section>
        <img className='image' src={backgroundimges} alt='...'/>
    </section>

    <div className='row1'>
        <div className='col1'>
            <img className='bag1' src={backmen1} alt='...'/>
        </div>

        <div className='col2'>
            <img className='bag2' src={backwomen2} alt='...'/>
        </div>

    </div>

</div><br/>

<div>
  <section className='create2'>
    <center>
      <h2>Collection</h2>
    </center><br/>
    <div className='row5'>
      <div className='col3'>
        <img className='image4' src={cook} alt='...'/>
        <img className='image4' src={edge} alt='...'/>
        <img className='image4' src={mariti} alt='...'/>
        <img className='image4' src={memoir} alt='...'/>
      </div>

      <div className='col4'>
        <img className='image4' src={silver} alt='...'/>
        <img className='image4' src={steller} alt='...'/>
        <img className='image4' src={won} alt='...'/>
        <img className='image4' src={auto} alt='...'/>
      </div>

    </div>

  </section>
</div>

<div>
  <section className='create4'>
    <center>
      <h2>Testimonials</h2>
    </center><br/>
    <div className='row11'>
      <div className='col8'><br/>
        <img src={teat} alt='...'/>
        <p>Titan watches are not solely a luxury brand but Indian brand<br/> that has a significant presence in the mass-market and also<br/> offers premium and ultra-luxury collections like Nebula,Xylys,<br/> and the Edge series, as well as an ultra-luxury Jalsa model a flying<br/> tourbillon. While the brand has focusedinnovating in the premium <br/>sector, its overall market both accessible. </p>
        <h4 className='tex4'>RAHUL</h4>

      </div>

      <div className='col9'><br/>
        <img src={teat} alt='...'/>
        <p>Titan Company is a joint venture between the Tata Group<br/> and the Tamil Nadu Industrial Development Corporation <br/>(TIDCO). Founded in 1984, Titan has grown to become a<br/> prominent name in the lifestyle sector, known for its in<br/> watches, jewellery, and eyewear.  </p>
        <h4 className='tex4'>ANCHAL</h4>
      </div>
    </div>
  </section>
</div><br/>
<br/><br/>
<div>
  <section className='textvalue'>
    <center>
      <h2>Discover Your Style</h2>
    </center><br/>
  <br/>
    <div class="carousel">
    <div class="card1">
      <img src={disweb} alt=""/>
    </div>
    <div class="card1">
      <img src={disblod} alt=""/>
    </div>
    <div class="card1">
      <img src={discoule} alt=""/>
    </div>
    <div class="card1">
      <img src={disluxe} alt=""/>
    </div>
    <div class="card1">
      <img src={dissporty} alt=""/>
    </div>
  </div>
  </section>
</div>

<div>
  <section>
    <div className='row20'>
      <div className='col15'>
        <img className='detals' src={gurant} alt='...'/>
        <h6>100% ORIGINAL</h6>
      </div>

      <div className='col16'>
        <img className='detals' src={retur} alt='...'/>
        <h6>7 DAY RETURN</h6>
      </div>

      <div className='col17'>
        <img className='detals' src={ship} alt='...'/>
        <h6>FREE SHIPPING</h6>
      </div>

    </div>

    <center>
      <h2 className='cent'>LOGIN FOR THE BEST EXPERIENCE</h2>
      <Link to='/register'><button className='btnlo'>REGISTER NOW</button></Link>
    </center>    
  </section></div>

<br/>
</>
  )
}

export default Homepage