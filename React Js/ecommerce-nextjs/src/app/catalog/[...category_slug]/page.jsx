"use client"
import ProductDetails from '@/app/Components/ProductDetails';
import ProductListing from '@/app/Components/ProductListing'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    const params = useParams();

    

  return (
    <>
        {
            params.category_slug[1]
            ?
            <ProductDetails/>
            :
            <ProductListing/>
        }
      
    </>
  )
}
