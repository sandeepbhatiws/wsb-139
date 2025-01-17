import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Components/Home'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './assets/css/style.css';
import './assets/css/responsive.css';

import ProductListing from './Components/ProductListing'
import ProductDetail from './Components/ProductDetail'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>

    {/* <ProductListing/>


    <ProductDetail/> */}
  </StrictMode>,
)
