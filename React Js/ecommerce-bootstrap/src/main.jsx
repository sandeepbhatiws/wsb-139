import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './Components/Home'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './assets/css/style.css';
import './assets/css/responsive.css';

import ProductListing from './Components/ProductListing'
import ProductDetail from './Components/ProductDetail'
import Rootlayout from './Components/Rootlayout';
import Context from './ContextAPI/Context';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    

      {/* Method 1 */}
      {/* <Route path="/" element={<Home/>} />
      <Route path="products" element={<ProductListing/>} />
      <Route path="product-details" element={<ProductDetail/>} /> */}

      
      {/* // Method 2 */}

      <Context>
        <Routes>
          <Route element={<Rootlayout/>}>
            <Route path="/" element={<Home/>} />
            <Route path="products/:slug?/:sub_slug?" element={<ProductListing/>} />
            <Route path="product-details/:id" element={<ProductDetail/>} />
          </Route>
        </Routes>
      </Context>

      
      
      {/* <Route path='admin-panel'>
        <Route path='categories'>
          <Route path='add-category' element={<ProductListing/>}/>
          <Route path='view-category' element={<ProductListing/>}/>
        </Route>

        <Route path='products'>
          <Route path='add-product' element={<ProductListing/>}/>
          <Route path='view-product' element={<ProductListing/>}/>
        </Route>
      </Route> */}

    
    

    {/* <ProductListing/>


    <ProductDetail/> */}
  </BrowserRouter>,
)
