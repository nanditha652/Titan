
import './App.css';
import Productpage from './pages/Productpage';
import fasTrack from "./constant/Fastrack";
import SonataData from "./constant/Sonata";
import titanData from './constant/Titan';
import Navbar from './compent/Navbar';
import Footer from './footer/Footer';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import {HelmetProvider} from 'react-helmet-async'
import Homepage from './pages/Homepage';
import Productcart from './pages/Productcart';
import Favourite from './pages/Fav'
import Upload from './pages/Upload';
import Update from './pages/Update';
import Edit from './pages/Edit';
import Fetchfile from './pages/Singlecrud';
import Form from './pages/Validation';
import Register from './pages/Register';
import Login from './pages/Login';
function App() {
  return (
    <div>

    <HelmetProvider>
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
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/update' element={<Update/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/fetch'element={<Fetchfile/>}/>
        <Route path='/form'element={<Form/>}/>
        <Route path='/register'element={<Register/>}/>
        <Route path='/login'element={<Login/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
      </HelmetProvider>

  </div>
  );
}

export default App;
