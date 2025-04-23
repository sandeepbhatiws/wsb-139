"use client";
import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie';
import { useState } from 'react';


const initialState = {
  user: localStorage.getItem("user") ?? '',
  token: localStorage.getItem("token") ?? '',
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    userDetails: (state,{payload}) => {
      state.user= payload.user
      localStorage.setItem('user',state.user)


      state.token= payload.token
      localStorage.setItem('token',state.token)
      Cookies.set("token", payload.token);
    
    },
    logOut: (state) => {

      console.log('Logout User');
      state.user= ''
      localStorage.removeItem('user')

      state.token= ''
      localStorage.removeItem('token')
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { userDetails, logOut} = loginSlice.actions

export default loginSlice.reducer