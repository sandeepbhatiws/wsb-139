import React from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {

  const params = useParams();

  console.log(params);

  return (
    <>
      <div class="container my-5">
        <div class="row details-snippet1">
          <div class="col-md-7">
            <div class="row">
              <div class="col-md-2 mini-preview">
                <img class="img-fluid" src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt="Preview"/>
                  <img class="img-fluid" src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt="Preview"/>
                    <img class="img-fluid" src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt="Preview"/>
                      <img class="img-fluid" src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt="Preview"/>
                      </div>
                      <div class="col-md-10">
                        <div class="product-image">
                          <img class="img-fluid" src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt="Main Image"/>
                        </div>

                      </div>
                    </div>

                  </div>
                  <div class="col-md-5">
                    <div class="category"><span class="theme-text">Category:</span> Women</div>
                    <div class="title">Black Dress For Women</div>
                    <div class="ratings my-2">
                      <div class="stars d-flex">
                        <div class="theme-text mr-2">Product Ratings: </div>
                        <div>&#9733;</div>
                        <div>&#9733;</div>
                        <div>&#9733;</div>
                        <div>&#9733;</div>
                        <div>&#9733;</div>
                        <div class="ml-2">(4.5) 50 Reviews</div>
                      </div>
                    </div>
                    <div class="price my-2">$100.00 <strike class="original-price">$120.00</strike></div>
                    <div class="theme-text subtitle">Brief Description:</div>
                    <div class="brief-description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dicta reiciendis odio consequuntur sunt magnam eum facilis quaerat dolor aperiam labore facere amet officiis, unde quae distinctio earum culpa omnis soluta voluptate tempora placeat?.
                    </div>

                    {/* <!-- TO REMOVE COLORS --> */}
                    <div>
                      <div class="subtitle my-3 theme-text">Colors:</div>
                      <div class="select-colors d-flex">
                        <div class="color red"></div>
                        <div class="color silver"></div>
                        <div class="color black"></div>
                      </div>
                    </div>

                    <hr/>
                      <div class="row">
                        <div class="col-md-3">
                          <input type="number" class="form-control" value="1"/>
                        </div>
                        <div class="col-md-9"><button class="btn addBtn btn-block">Add to basket</button></div>
                      </div>

                  </div>
              </div>

              




            </div>
          </>
          )
}
