"use client";

import React, { useEffect, useState } from 'react'
import LeftSideListing from './LeftSideListing'
import RightSideListing from './RightSideListing'
import { useParams } from 'next/navigation';

export default function ProductListing() {

    const params = useParams();

    const [filterCategories , setFilterCategories] = useState([]);
    const [filterBrands , setFilterBrands] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if(params.category_slug != undefined){
            setFilterCategories(params.category_slug)
        }
    },[params.category_slug]);
    

    return (
        <>
            <section
                class="container mx-auto flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10"
            >
                
                <LeftSideListing filterCategories={filterCategories} setFilterCategories={setFilterCategories}  setCurrentPage={setCurrentPage} filterBrands={filterBrands} setFilterBrands={setFilterBrands}/>

                <RightSideListing filterCategories={filterCategories} currentPage={currentPage} setCurrentPage={setCurrentPage} filterBrands={filterBrands}/>

                
            </section>
        </>
    )
}
