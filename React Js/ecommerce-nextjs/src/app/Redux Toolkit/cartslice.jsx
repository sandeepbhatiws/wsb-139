import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

var cartData = JSON.parse(localStorage.getItem('cartItems'))

const initialState = {
  cart_value: (cartData ? cartData : []),
}

export const userCarts = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const checkCart = state.cart_value.filter((v) => {
        if (v.id == action.payload.id) {
          return v;
        }
      })

      if (checkCart.length == 0) {
        const productData = {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          image: action.payload.image,
          quantity: 1
        }

        const finalData = [productData, ...state.cart_value];
        state.cart_value = finalData;
        toast.success('Add to cart successfully !!');
        localStorage.setItem('cartItems', JSON.stringify(finalData));
      } else {
        var cartNewData = state.cart_value.map((v) => {
          if (action.payload.id == v.id) {
            v.quantity++;
            return v;
          } else {
            return v;
          }
        });

        var finalData = [...cartNewData];
        state.cart_value = finalData;
        toast.success('update cart successfully !!');
        localStorage.setItem('cartItems', JSON.stringify(finalData));
      }


      console.log(checkCart);

      //     console.log(action);
      //   state.value += 1
    },
    deleteCart: (state, action) => {
      if (confirm('Are you sure you want to delete ?')) {
        var finalData = state.cart_value.filter((v) => {
          if (v.id != action.payload) {
            return v;
          }
        })

        state.cart_value = [...finalData];
        localStorage.setItem('cartItems', JSON.stringify(finalData));
        toast.success('Product remove from cart successfully.');
      }
    },
    incrementByQuantity: (state, action) => {
      const finalData = state.cart_value.map((v) => {
        if (v.id == action.payload) {
          if (v.quantity > 1) {
            v.quantity--;
            toast.success('Cart update succesfully');
            return v;
          } else {
            toast.error('Minimun 1 quatity required');
            return v;
          }
        } else {
          return v;
        }
      })

      state.cart_value = [...finalData];
      localStorage.setItem('cartItems',JSON.stringify(finalData));
    },
    decrementByQuantity: (state, action) => {
      const finalData = state.cart_value.map((v) => {
        if (v.id == action.payload) {
            if (v.quantity < 5) {
              v.quantity++;
              toast.success('Cart update succesfully');
              return v;
            } else {
              toast.error('Maximum quatity reached');
              return v;
            }
        } else {
          return v;
        }
      })

      state.cart_value = [...finalData];
      localStorage.setItem('cartItems',JSON.stringify(finalData));
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, deleteCart, incrementByQuantity, decrementByQuantity } = userCarts.actions

export default userCarts.reducer