import React, { useState } from 'react'
import ProductCard from './ProductCard'

export default function ProductSection({ heading, allProducts }) {

    const [products, setProducts] = useState(allProducts ? allProducts : []);

    return (
        <>
            {/* <!-- /Special offer card --> */}

            <p class="mx-auto mt-10 mb-5 max-w-[1200px] px-5">{heading}</p>

            {/* <!-- Recommendations --> */}
            <section
                class="mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-5 pb-10 lg:grid-cols-4"
            >
                {/* <!-- 1 --> */}
                {
                    products.map((v,i) => {
                        return(
                            <ProductCard key={i} data={v}/>
                        )  
                    })
                }
                
                
            </section>
            {/* <!-- /Recommendations --> */}
             
        </>
    )
}
