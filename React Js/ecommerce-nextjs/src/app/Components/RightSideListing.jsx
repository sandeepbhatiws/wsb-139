import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import axios from 'axios';
import { toast } from 'react-toastify';
import ProductLoading from './ProductLoading';

export default function RightSideListing({allFilter, setAllFilter}) {

    const [products, setProducts] = useState([]);
    const [isLoader, setLoader] = useState(true);

    useEffect(() => {
        axios.get('https://wscubetech.co/ecommerce-api/products.php', {
            params: allFilter
        })
            .then((response) => {
                setProducts(response.data.data);
                setLoader(false);
            })
            .catch(() => {
                toast.error('Something went wrong !!')
            })

    }, []);

    return (
        <>
            <div className='w-full'>
                <div class="mb-5 flex items-center justify-between px-5">
                    <div class="flex gap-3">
                        <button class="flex items-center justify-center border px-6 py-2">
                            Sort by
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="mx-2 h-4 w-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </button>

                        <button
                            class="flex items-center justify-center border px-6 py-2 md:hidden"
                        >
                            Filters
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="mx-2 h-4 w-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </button>
                    </div>

                    <div class="hidden gap-3 lg:flex">
                        <button class="border bg-amber-400 py-2 px-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="h-5 w-5"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                                />
                            </svg>
                        </button>

                        <button class="border py-2 px-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="h-5 w-5"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {
                    (isLoader)
                    ?
                        <ProductLoading />
                    :
                    
                        (products.length > 0)
                        ?
                        <section class="mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-5 pb-10 lg:grid-cols-3">
                            {
                                products.map((v, i) => {
                                    return (
                                        <ProductCard key={i} data={v} />
                                    )
                                })
                            }
                        </section>
                        :
                        <section class="mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-5 pb-10 lg:grid-cols-3"> No Record Found !!</section>
                    
                }

                
            </div>
        </>
    )
}



// {
//     topArrivalLoader
//         ?
//         <ProductLoading />
//         :
//         (topArrival.length > 0)
//             ?
//             <ProductSection heading='Top Arrival' allProducts={topArrival} />
//             :
//             ''
// }
