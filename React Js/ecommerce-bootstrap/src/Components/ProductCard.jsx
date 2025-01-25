import React, { useContext } from 'react'
import { cartContext } from '../ContextAPI/Context';
import { toast } from 'react-toastify';

export default function ProductCard({productData, column}) {

  var { cartItems, setCartItems } = useContext(cartContext);

  const addToCart = (product) => {

    var cartCheck = cartItems.filter((v) => {
      if(product.id == v.id){
        return v;
      }
    });

    if(cartCheck.length == 0){
      const productData = {
        id  : product.id,
        name  : product.name,
        price  : product.price,
        image  : product.image,
        quantity  : 1
      }
      
      const finalData = [productData, ...cartItems];
      setCartItems(finalData);
      toast.success('Add to cart successfully !!');
      localStorage.setItem('cartItems', JSON.stringify(finalData));
    } else {

      var cartNewData = cartItems.map((v) => {
        if(product.id == v.id){
          v.quantity++;
          console.log(v);
          return v;
        } else {
          return v;
        }
      });

      var finalData = [...cartNewData];
      setCartItems(finalData);
      toast.success('update cart successfully !!');
      localStorage.setItem('cartItems', JSON.stringify(finalData));
    }
    
  }

  return (
    <>
        <div class={ (column == 4) ? 'col-md-4' : 'col-md-3' }>
            <div class="card mb-3">
                <img class="card-img-top" src={productData.image} alt="Card image cap"/>
                    <div class="card-body text-center">
                        <p class="card-text  p-3">
                          <a href={` /product-details/${productData.id} `} class= "text-dark">{productData.name}</a></p>
                        <h4 class="pb-0 pt-0">${productData.price}</h4>
                        <button className='btn btn-primary' onClick={ () => addToCart(productData) }>Add to Cart</button>
                    </div>
            </div>
        </div>
    </>
  )
}
