
import './App.css';
import Navbar from './Components/Navbar/navbar'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Shop from './Pages/Shop';
import Shopcategory from './Pages/Shopcategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Footer from '../src/Components/Footer/Footer';
import mousebanner from './Components/Assets/banner-mouse-1.jpg';
import keebbanner from './Components/Assets/banner-keeb-1jpg.jpg';
import miscbanner from './Components/Assets/banner-misc-1.jpg';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/'element={<Shop/>}/>
        <Route path='/mouse'element={<Shopcategory banner={mousebanner} category="mouse"/>}/>
        <Route path='/keeb'element={<Shopcategory banner={keebbanner} category="keeb"/>}/>
        <Route path='/misc'element={<Shopcategory banner={miscbanner} category="misc"/>}/>
        <Route path='/product'element={<Product/>}>
          <Route path=':productId'element={<Product/>}/>
        </Route>
        <Route path='/cart'element={<Cart/>}/>
        <Route path='/login'element={<Login/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>  
    </div>
  );
}

export default App;
