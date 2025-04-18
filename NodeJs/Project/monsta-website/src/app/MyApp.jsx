"use client"
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Redux Store/store'

export default function MyApp({children}) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
