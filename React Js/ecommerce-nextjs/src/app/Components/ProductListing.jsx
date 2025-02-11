"use client";

import React, { useState } from 'react'
import LeftSideListing from './LeftSideListing'
import RightSideListing from './RightSideListing'

export default function ProductListing() {

    const [allFilter, setAllFilter] = useState({
        limit : 15
    });

    return (
        <>
            <section
                class="container mx-auto flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10"
            >
                
                <LeftSideListing allFilter={allFilter} setAllFilter={setAllFilter}/>

                <RightSideListing allFilter={allFilter} setAllFilter={setAllFilter}/>

                
            </section>
        </>
    )
}
