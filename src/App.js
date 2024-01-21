import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsList from './components/ProductsList';
import { Routes, Route } from "react-router-dom";
import About from './components/About';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <>
    <Navbar />

    <Routes>
      <Route path='/' element={
        <>
          <Slider />
          <ProductsList />
        </>
      }>
      </Route>
      <Route path='about' element={<About />}>
      </Route>
      <Route path='product/:productID' element={<ProductDetails />}></Route>
    </Routes>
<Outlet><Outlet/>

    </>
  );
}

export default App;
