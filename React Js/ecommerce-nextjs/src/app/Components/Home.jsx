"use client";
import React, { useEffect, useState } from 'react'
import ShopCategory from './ShopCategory'
import ProductSection from './ProductSection';
import { toast } from 'react-toastify';
import axios from 'axios';
import ProductLoading from './ProductLoading';

export default function Home() {

    const [topArrival, setTopArrival] = useState([]);
    const [recommodation, setRecommondation] = useState([]);
    const [topArrivalLoader, setTopArrivalLoader] = useState(true);

    useEffect(() => {
        axios.get('https://wscubetech.co/ecommerce-api/products.php',{
            params : {
                limit : 8,
                categories : 'furniture, mens-shoes'
            }
        })
        .then((response) => {
            setTopArrival(response.data.data);
            setTopArrivalLoader(false);
        })
        .catch(() => {
            toast.error('Something went wrong !!')
        })

    },[]);


    return (
        <>
            {/* <!-- Offer image  --> */}

            <div class="relative">
                <img
                    class="w-full object-cover brightness-50 filter lg:h-[500px]"
                    src="/images/header-bg.jpeg"
                    alt="Living room image"
                />

                <div
                    class="absolute top-1/2 left-1/2 mx-auto flex w-11/12 max-w-[1200px] -translate-x-1/2 -translate-y-1/2 flex-col text-center text-white lg:ml-5"
                >
                    <h1 class="text-4xl font-bold sm:text-5xl lg:text-left">
                        Best Collection for Home decoration
                    </h1>
                    <p class="pt-3 text-xs lg:w-3/5 lg:pt-5 lg:text-left lg:text-base">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
                        aperiam natus, nulla, obcaecati nesciunt, itaque adipisci earum
                        ducimus pariatur eaque labore.
                    </p>
                    <button
                        class="mx-auto mt-5 w-1/2 bg-amber-400 px-3 py-1 text-black duration-100 hover:bg-yellow-300 lg:mx-0 lg:h-10 lg:w-2/12 lg:px-10"
                    >
                        Order Now
                    </button>
                </div>
            </div>

            {/* <!-- /Offer image  -->

            <!-- Cons bages --> */}

            <section
                class="container mx-auto my-8 flex flex-col justify-center gap-3 lg:flex-row"
            >
                {/* <!-- 1 --> */}

                <div
                    class="mx-5 flex flex-row items-center justify-center border-2 border-yellow-400 py-4 px-5"
                >
                    <div class="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-6 w-6 text-violet-900 lg:mr-2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                            />
                        </svg>
                    </div>

                    <div class="ml-6 flex flex-col justify-center">
                        <h3 class="text-left text-xs font-bold lg:text-sm">Free Delivery</h3>
                        <p class="text-light text-center text-xs lg:text-left lg:text-sm">
                            Orders from $200
                        </p>
                    </div>
                </div>

                {/* <!-- 2 --> */}

                <div
                    class="mx-5 flex flex-row items-center justify-center border-2 border-yellow-400 py-4 px-5"
                >
                    <div class="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-6 w-6 text-violet-900 lg:mr-2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                            />
                        </svg>
                    </div>

                    <div class="ml-6 flex flex-col justify-center">
                        <h3 class="text-left text-xs font-bold lg:text-sm">Money returns</h3>
                        <p class="text-light text-left text-xs lg:text-sm">
                            30 Days guarantee
                        </p>
                    </div>
                </div>

                {/* <!-- 3 --> */}

                <div
                    class="mx-5 flex flex-row items-center justify-center border-2 border-yellow-400 py-4 px-5"
                >
                    <div class="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-6 w-6 text-violet-900 lg:mr-2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                            />
                        </svg>
                    </div>

                    <div class="ml-6 flex flex-col justify-center">
                        <h3 class="text-left text-xs font-bold lg:text-sm">24/7 Supports</h3>
                        <p class="text-light text-left text-xs lg:text-sm">
                            Consumer support
                        </p>
                    </div>
                </div>
            </section>

            {/* <!-- /Cons bages  --> */}

            <ShopCategory/>
            
            {
                topArrivalLoader
                ?
                <ProductLoading/>
                :
                (topArrival.length > 0)
                    ?
                        <ProductSection heading='Top Arrival' allProducts={topArrival}/>
                    :
                ''
            }

            <div class="mx-auto max-w-[1200px] px-5">
                <section
                    class="mt-10 flex max-w-[1200px] justify-between bg-violet-900 px-5"
                >
                    <div class="py-8 px-3 lg:px-16">
                        <p class="text-white">ONLINE EXCLUSIVE</p>
                        <h2 class="pt-6 text-5xl font-bold text-yellow-400">15% OFF</h2>
                        <p class="pt-4 text-white">
                            ACCENT CHAIRS, <br />
                            TABLES & OTTOMANS
                        </p>
                        <button
                            href="#"
                            class="mt-6 bg-amber-400 px-4 py-2 duration-100 hover:bg-yellow-300"
                        >
                            Shop now
                        </button>
                    </div>

                    <img
                        class="-mr-5 hidden w-[550px] object-cover md:block"
                        src="/images/sale-bage.jpeg"
                        alt="Rainbow credit card with macbook on a background"
                    />
                </section>
            </div>

            {
                (recommodation.length > 0)
                ?
                <ProductSection heading='RECOMMENDED FOR YOU'/>
                :
                ''
            }

            
        </>
    )
}
