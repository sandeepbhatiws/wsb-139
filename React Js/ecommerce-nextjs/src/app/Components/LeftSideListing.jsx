import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export default function LeftSideListing({filterCategories , setFilterCategories}) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('https://wscubetech.co/ecommerce-api/categories.php')
        .then((response) => {
            setCategories(response.data.data);
        })
        .catch(() => {
            toast.error('Something went wrong !!')
        })

    }, []);

    const filterCategory = (slug) => {

        if(filterCategories.includes(slug)){
            var data = filterCategories.filter((v,i) => {
            if(v != slug){
                return v;
            }
            })

            const finalData = [...data];
            setFilterCategories(finalData);
        } else {
            const finalData = [...filterCategories, slug];

            console.log(finalData);
            setFilterCategories(finalData);
        }
    }

    return (
        <>
            <section class="hidden w-[300px] flex-shrink-0 px-4 lg:block">
                <div class="flex border-b pb-5">
                    <div class="w-full filter-height">
                        <p class="mb-3 font-medium">CATEGORIES</p>

                        {
                            categories.map((v,i) => {
                                return(
                                    <div class="flex w-full justify-between">
                                        <div class="flex justify-center items-center">
                                            <input type="checkbox" id={v.slug} checked={ (filterCategories.includes(v.slug)) ? 'checked' : '' }  onClick={ () => filterCategory(v.slug) } />
                                            <label class="ml-4" for={v.slug}>{v.name}</label>
                                        </div>
                                        <div>
                                            <p class="text-gray-500">(12)</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        

                        
                    </div>
                </div>

                <div class="flex border-b py-5">
                    <div class="w-full filter-height">
                        <p class="mb-3 font-medium">BRANDS</p>

                        <div class="flex w-full justify-between">
                            <div class="flex justify-center items-center">
                                <input type="checkbox" />
                                <p class="ml-4">APEX</p>
                            </div>
                            <div>
                                <p class="text-gray-500">(12)</p>
                            </div>
                        </div>

                        <div class="flex w-full justify-between">
                            <div class="flex justify-center items-center">
                                <input type="checkbox" />
                                <p class="ml-4">Call of SOFA</p>
                            </div>
                            <div>
                                <p class="text-gray-500">(15)</p>
                            </div>
                        </div>

                        <div class="flex w-full justify-between">
                            <div class="flex justify-center items-center">
                                <input type="checkbox" />
                                <p class="ml-4">Puff B&G</p>
                            </div>
                            <div>
                                <p class="text-gray-500">(14)</p>
                            </div>
                        </div>

                        <div class="flex w-full justify-between">
                            <div class="flex justify-center items-center">
                                <input type="checkbox" />
                                <p class="ml-4">Fornighte</p>
                            </div>
                            <div>
                                <p class="text-gray-500">(124)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex border-b py-5">
                    <div class="w-full">
                        <p class="mb-3 font-medium">PRICE</p>

                        <div class="flex w-full">
                            <div class="flex justify-between">
                                <input
                                    x-mask="99999"
                                    min="50"
                                    type="number"
                                    class="h-8 w-[90px] border pl-2"
                                    placeholder="50"
                                />
                                <span class="px-3">-</span>
                                <input
                                    x-mask="999999"
                                    type="number"
                                    max="999999"
                                    class="h-8 w-[90px] border pl-2"
                                    placeholder="99999"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex border-b py-5">
                    <div class="w-full">
                        <p class="mb-3 font-medium">SIZE</p>

                        <div class="flex gap-2">
                            <div
                                class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                            >
                                XS
                            </div>
                            <div
                                class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                            >
                                S
                            </div>
                            <div
                                class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                            >
                                M
                            </div>

                            <div
                                class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                            >
                                L
                            </div>

                            <div
                                class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                            >
                                XL
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex py-5">
                    <div class="w-full">
                        <p class="mb-3 font-medium">COLOR</p>

                        <div class="flex gap-2">
                            <div
                                class="h-8 w-8 cursor-pointer border border-white bg-gray-600 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                            ></div>
                            <div
                                class="h-8 w-8 cursor-pointer border border-white bg-violet-900 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                            ></div>
                            <div
                                class="h-8 w-8 cursor-pointer border border-white bg-red-900 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                            ></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
