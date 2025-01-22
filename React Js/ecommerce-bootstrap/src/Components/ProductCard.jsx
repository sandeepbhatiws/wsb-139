import React from 'react'

export default function ProductCard({productData, column}) {
  return (
    <>
        <div class={ (column == 4) ? 'col-md-4' : 'col-md-3' }>
            <div class="card mb-3">
                <img class="card-img-top" src={productData.image} alt="Card image cap"/>
                    <div class="card-body text-center">
                        <p class="card-text  p-3">
                          <a href={` /product-details/${productData.id} `} class= "text-dark">{productData.name}</a></p>
                        <h4 class="pb-0 pt-0">${productData.price}</h4>
                    </div>
            </div>
        </div>
    </>
  )
}
