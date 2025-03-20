import React, { useEffect, useState } from 'react'
import Sidebar from '../../common/Sidebar'
import Header from '../../common/Header'
import Breadcrumb from '../../common/Breadcrumb'
import Footer from '../../common/Footer'
import { Link } from 'react-router-dom'
import { MdFilterAltOff, MdModeEdit } from 'react-icons/md'
import { FaFilter } from 'react-icons/fa'
import axios from 'axios'

export default function ViewMeterials() {
    let [activeFilter, setactiveFilter] = useState(true);
    let [materialData, setMaterialData] = useState([]);
    let [searchName , setSearchName] = useState('');

    useEffect(() => {
        axios.post('http://localhost:5000/api/admin/materials/view',{
            name : searchName
        })
        .then((result) => {
            setMaterialData(result.data.data);
        })
        .catch((error) => {
            toast.error('Something went wrong !!');
        })

    }, [searchName]);

    const search = (event) => {
        event.preventDefault();
        console.log(event.target.name.value);
        setSearchName(event.target.name.value);

    }

    return (
        <>
            <Breadcrumb path={"Material"} link={"/materials/view-materials"} path2={"View"} slash={"/"} />
            <div className="h-[610px] w-full">
                <div className="max-w-[1220px] mx-auto py-2">



                    <div className={` rounded-lg border border-gray-300 px-5 py-5 max-w-[1220px] mx-auto mt-10 ${activeFilter ? "hidden" : "block"}`}>

                        <form className="flex max-w-sm" onSubmit={ search }>
                            <div className="w-full relative">
                                <input
                                    type="text" name='name'
                                    id="simple-search"
                                    className="bg-gray-50 border border-gray-300 p-2.5 rounded-lg text-gray-900 text-sm w-full block dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder-gray-400 dark:text-white focus:border-blue-500 focus:ring-blue-500 ps-2"
                                    placeholder="Search Name"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-700 border border-blue-700 p-2.5 rounded-lg text-sm text-white dark:bg-blue-600 dark:focus:ring-blue-800 dark:hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium hover:bg-blue-800 ms-2"
                            >
                                <svg
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </form>


                    </div>
                    <div className="w-full min-h-[610px]">
                        <div className="max-w-[1220px] mx-auto py-5">
                            <div className='flex bg-slate-100 border border-slate-400 justify-between rounded-t-md item-center px-4 py-3'>
                                <h3 className="text-[26px] font-semibold" >
                                    View Meterial
                                </h3>
                                <div className='flex justify-between'>
                                    <div onClick={() => setactiveFilter(!activeFilter)} className="flex bg-blue-700 border border-blue-700 h-[40px] justify-center rounded-[50%] text-white w-[40px] cursor-pointer dark:bg-blue-600 dark:focus:ring-blue-800 dark:hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 hover:bg-blue-800 items-center mx-3">
                                        {activeFilter ? <FaFilter className='text-[18px]' /> : <MdFilterAltOff className='text-[18px]' />}
                                    </div>

                                    <button type="button" class="bg-green-700 rounded-lg text-sm text-white dark:bg-green-600 dark:focus:ring-green-800 dark:hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium hover:bg-green-800 mb-2 me-2 px-5 py-2.5"> Change Status</button>
                                    <button type="button" className="bg-red-700 rounded-lg text-sm text-white dark:bg-red-600 dark:focus:ring-red-900 dark:hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium hover:bg-red-800 mb-2 me-2 px-5 py-2.5">Delete </button>
                                </div>
                            </div>
                            <div className="border border-slate-400 border-t-0 rounded-b-md">

                                {/* border-2 border-[red] */}
                                <div className="overflow-x-auto relative">


                                    <div class="shadow-md overflow-x-auto relative sm:rounded-lg">

                                        <table class="text-gray-500 text-left text-sm w-full dark:text-gray-400 rtl:text-right">
                                            <thead class="bg-gray-50 text-gray-700 text-xs dark:bg-gray-700 dark:text-gray-400 uppercase">
                                                <tr>
                                                    <th scope="col" class="p-4">
                                                        <div class="flex items-center">
                                                            <input id="checkbox-all-search" type="checkbox" class="bg-gray-100 border-gray-300 h-4 rounded-sm text-blue-600 w-4 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800 dark:ring-offset-gray-800 focus:ring-2 focus:ring-blue-500" />
                                                            <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                                        </div>
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        Material Name
                                                    </th>

                                                    <th scope="col" class="w-[12%]">
                                                        Order
                                                    </th>
                                                    <th scope="col" class="w-[11%]">
                                                        Status
                                                    </th>
                                                    <th scope="col" class="w-[6%]">
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    (materialData.length > 0)

                                                        ?
                                                        materialData.map((v,i) => {
                                                            return (
                                                                <tr key={i} class="bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600 hover:bg-gray-50">
                                                                    <td class="p-4 w-4">
                                                                        <div class="flex items-center">
                                                                            <input id="checkbox-table-search-1" type="checkbox" class="bg-gray-100 border-gray-300 h-4 rounded-sm text-blue-600 w-4 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800 dark:ring-offset-gray-800 focus:ring-2 focus:ring-blue-500" />
                                                                            <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                                                        </div>
                                                                    </td>
                                                                    <th scope="row" class="flex text-gray-900 dark:text-white items-center px-6 py-4 whitespace-nowrap">

                                                                        <div class="py-4">
                                                                            <div class="text-base font-semibold">{v.name}</div>

                                                                        </div>
                                                                    </th>

                                                                    <td class="px-6 py-4">
                                                                        {v.order}
                                                                    </td>
                                                                    <td class="py-4">
                                                                        {
                                                                            v.status
                                                                            ?
                                                                            <button type="button" class="bg-gradient-to-r rounded-lg text-center text-sm text-white dark:focus:ring-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium from-green-400 hover:bg-gradient-to-br mb-2 me-2 px-5 py-1.5 to-green-600 via-green-500">Active</button>
                                                                            :
                                                                            <button type="button" class="bg-gradient-to-r rounded-lg text-center text-sm text-white dark:focus:ring-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium from-red-400 hover:bg-gradient-to-br mb-2 me-2 px-5 py-1.5 to-red-600 via-red-500">Deactive</button>

                                                                        }
                                                                        
                                                                    </td>
                                                                    <td class="py-4">

                                                                        <Link to={`/material/update/${v._id}`} >
                                                                            <div className="flex bg-blue-700 border border-blue-700 h-[40px] justify-center rounded-[50%] text-white w-[40px] dark:bg-blue-600 dark:focus:ring-blue-800 dark:hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 hover:bg-blue-800 items-center">
                                                                                <MdModeEdit className='text-[18px]' />
                                                                            </div>
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })


                                                        :
                                                        <tr class="bg-white border-gray-200 text-center dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600 hover:bg-gray-50">
                                                            <td class="p-4 w-4" colSpan={5}>
                                                                No Record Found
                                                            </td>
                                                        </tr>
                                                }






                                            </tbody>
                                        </table>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
