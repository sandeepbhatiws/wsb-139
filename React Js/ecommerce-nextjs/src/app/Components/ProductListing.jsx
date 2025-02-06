"use client";

import React from 'react'
import LeftSideListing from './LeftSideListing'
import RightSideListing from './RightSideListing'

export default function ProductListing() {
    return (
        <>
            <section
                class="container mx-auto flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10"
            >
                
                <LeftSideListing/>

                <RightSideListing/>

                
            </section>
        </>
    )
}
