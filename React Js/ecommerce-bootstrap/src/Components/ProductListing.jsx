import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import ProductCard from './ProductCard';

export default function ProductListing() {

  const params = useParams();

  const [filterCategories, setFilterCategories] = useState([]);

  useEffect(() => {
    if(params.slug != undefined){
      var slug = [params.slug];
      setFilterCategories(slug)
    } else {
      var slug = [];
      setFilterCategories([])
    }
    
  },[params.slug]);
  

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
      axios.get('https://wscubetech.co/ecommerce-api/categories.php')
      .then((response) => {
          setCategories(response.data.data)
      })
      .catch((error) => {
      toast.error('Something went wrong !!'); 
      });
  },[]);

  const [page, setPage] = useState(1);
  const [sorting, setSorting] = useState('');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
      axios.get('https://wscubetech.co/ecommerce-api/products.php',{
          params : {
            page : page,
            limit : 18,
            sorting : sorting,
            name : name,
            price_from : priceFrom,
            price_to : priceTo,
            discount_from : '',
            discount_to : '',
            ratings : '',
            brands : '',
            categories : filterCategories.toString(),
          }
      })
      .then((response) => {
          setProducts(response.data.data)
      })
      .catch((error) => {

      })
  },[page, sorting, filterCategories, priceFrom, priceTo, name]);

  const filterSorting = (value) => {
    setSorting(value);
  }

  const filterCategory = (slug) => {

    if(filterCategories.includes(slug)){
      var data = filterCategories.filter((v,i) => {
        if(v != slug){
          return v;
        }
      })

      const finalData = [...data];
      setFilterCategories(finalData);
    } else {
      const finalData = [...filterCategories, slug];
      setFilterCategories(finalData);

      console.log(finalData);
    }
  }

  const filterPrice = (from, to) => {
    setPriceFrom(from);
    setPriceTo(to);
  }

  const filterName = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  }

  return (
    <>
      <div class="search-section">
        <div class="container-fluid container-xl">
          <div class="row main-content ml-md-0">
            <div class="sidebar col-md-3 px-0">
              <h1 class="border-bottom filter-header d-flex d-md-none p-3 mb-0 align-items-center">
                <span class="mr-2 filter-close-btn">
                  X
                </span>
                Filters
                <span class="ml-auto text-uppercase">Reset Filters</span>
              </h1>
              <div class="sidebar__inner ">
                <div class="filter-body">
                  <div>
                    <h2 class="border-bottom pb-3 filter-title">Categories</h2>
                    <div class="mb-30 filter-options">

                      {
                        categories.map((v,i) => {
                          return(
                            <div class="custom-control custom-checkbox mb-3">
                              <input type="checkbox" class="custom-control-input  pe-2" id={v.slug}  checked={ (filterCategories.includes(v.slug)) ? 'checked' : '' }  onClick={ () => filterCategory(v.slug) }/>
                                <label class="custom-control-label ps-2" for={v.slug}>{ v.name }</label>
                            </div>
                          )
                        })
                      }
                      
                    </div>
                    {/* <!--seating option end--> */}
                    <h2 class="font-xbold body-font border-bottom filter-title">Price Range</h2>
                    <div class="mb-3 filter-options" id="cusine-options">
                      <div class="custom-control custom-checkbox mb-3">
                        <input type="radio" name='price' class="custom-control-input" id="0 - 250" onClick={ () => filterPrice(0,250) }/>
                          <label class="custom-control-label ms-2" for="0 - 250">0 - 250</label>
                      </div>
                      <div class="custom-control custom-checkbox mb-3">
                        <input type="radio" name='price' class="custom-control-input" id="251 - 500" onClick={ () => filterPrice(251,500) }/>
                          <label class="custom-control-label ms-2" for="251 - 500">251 - 500</label>
                      </div>
                      <div class="custom-control custom-checkbox mb-3">
                        <input type="radio" name='price' class="custom-control-input" id="501 - 750" onClick={ () => filterPrice(501,750) }/>
                          <label class="custom-control-label ms-2" for="501 - 750">501 - 750</label>
                      </div>
                      <div class="custom-control custom-checkbox mb-3">
                        <input type="radio" name='price' class="custom-control-input" id="751 - 1000" onClick={ () => filterPrice(751,1000) }/>
                          <label class="custom-control-label ms-2" for="751 - 1000">751 - 1000</label>
                      </div>
                      <div class="custom-control custom-checkbox mb-3">
                        <input type="radio" name='price' class="custom-control-input" id="1001 - 1250" onClick={ () => filterPrice(1001,1250) }/>
                          <label class="custom-control-label ms-2" for="1001 - 1250">1001 - 1250</label>
                      </div>
                      <div class="custom-control custom-checkbox mb-3">
                        <input type="radio" name='price' class="custom-control-input" id="1251 - 1500" onClick={ () => filterPrice(1251,1500) }/>
                          <label class="custom-control-label ms-2" for="1251 - 1500">1251 - 1500</label>
                      </div>
                    </div>

                    {/* <!-- cusine filters end --> */}
                    <h2 class="font-xbold body-font border-bottom filter-title">Price Range</h2>
                    <div class="mb-3 theme-clr xs2-font d-flex justify-content-between">
                      <span id="slider-range-value1">$100</span>
                      <span id="slider-range-value2">$10,000</span>
                    </div>
                    <div class="mb-30 filter-options">
                      <div>
                        <div id="slider-range">
                          <form>
                            <div class="form-group">
                              <input type="range" class="form-control-range" id=""/>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <h2 class="border-bottom filter-title">Services</h2>
                    <div class="mb-3 filter-options" id="services-options">
                      <div class="custom-control custom-checkbox mb-3">
                        <input type="checkbox" class="custom-control-input" id="Breakfast" checked/>
                          <label class="custom-control-label" for="Breakfast">Breakfast</label>
                      </div>
                      <div class="custom-control custom-checkbox mb-3">
                        <input type="checkbox" class="custom-control-input" id="other"/>
                          <label class="custom-control-label" for="other">Other</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="content col-md-9">
              <div class="d-flex justify-content-between border-bottom align-items-center mb-3">
                <h2 class="title">Products</h2>

                <input type='text' name='product_name' onKeyUp={ filterName }/>

                <div class="filters-actions">
                  <div>
                    <button class="btn filter-btn d-md-none"><svg xmlns="http://www.w3.org/2000/svg" class="mr-2" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" /></svg>
                      Filter</button>
                  </div>
                  <div class="d-flex align-items-center">

                    <div class="dropdown position-relative sort-drop">
                      <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      Product Filter
                    </button>
                      <div class="dropdown-menu dropdown-menu-end p-0 no-caret">
                        {/* selected  */}
                        <a class="dropdown-item" onClick={() => filterSorting(1) } href="javascript:void(0)">Name ASC</a>
                        <a class="dropdown-item" onClick={() => filterSorting(2) } href="javascript:void(0)">Name DESC</a>
                        <a class="dropdown-item" onClick={() => filterSorting(3) } href="javascript:void(0)">Price ASC</a>
                        <a class="dropdown-item" onClick={() => filterSorting(4) } href="javascript:void(0)">Price DESC</a>
                        <a class="dropdown-item" onClick={() => filterSorting(5) } href="javascript:void(0)">Discounted Price ASC</a>
                        <a class="dropdown-item" onClick={() => filterSorting(6) } href="javascript:void(0)">Discounted DESC</a>
                        <a class="dropdown-item" onClick={() => filterSorting(7) } href="javascript:void(0)">Rating Low to High</a>
                        <a class="dropdown-item" onClick={() => filterSorting(8) } href="javascript:void(0)">Rating High to Low</a>
                        
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div class="row row-grid">
                {
                    products.map((v,i) => {
                        return(
                            <ProductCard key={i} productData={v} column={4}/>
                        )
                    })
                }
                {/* <div class="col-md-6 col-lg-4 col-xl-4">
                  <img src="https://dummyimage.com/300X400/000/fff" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
