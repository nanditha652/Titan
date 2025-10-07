
import './App.css';
import Productpage from './pages/Productpage';
import fasTrack from "./constant/Fastrack";
import SonataData from "./constant/Sonata";
import titanData from './constant/Titan';
import Navbar from './compent/Navbar';
import Footer from './footer/Footer';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Productcart from './pages/Productcart';
import Favourite from './pages/Fav'

function App() {
  return (
    <div>

      <BrowserRouter>
      <Navbar/>
      
      {/* <Homepage/> */}
      <Routes>
        <Route path='/homepage' element={<Homepage/>}/>
        <Route path='/fast' element={<Productpage data={fasTrack}/>}/>
        <Route path='/sonata' element={<Productpage data={SonataData}/>}/>
        <Route path='/titan' element={<Productpage data={titanData}/>}/>
        <Route path='/cart' element={<Productcart/>}/>
        <Route path='/fav' element={<Favourite/>}/>
  
      </Routes>
      <Footer/>
      </BrowserRouter>

  </div>
  );
}

export default App;
