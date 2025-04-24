import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../common/Breadcrumb'
import { Link } from 'react-router-dom';
import { MdFilterAltOff, MdModeEdit, MdModeEditOutline } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import { FaFilter } from 'react-icons/fa';
import axios from 'axios'
import { toast } from 'react-toastify';
import { Pagination } from "flowbite-react";

export default function ViewCategory() {
  // let [orderModal, setOrderModal] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL;

  let [activeFilter, setactiveFilter] = useState(true);
  let [categoryData, setCategoryData] = useState([]);
  let [searchName, setSearchName] = useState('');
  let [imagePath, setImagePath] = useState('');
  let [checkBoxValues, setCheckBoxValues] = useState([]);
  let [status, setStatus] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(10);

  const onPageChange = (page) => setCurrentPage(page);


  useEffect(() => {
    axios.post(`${ apiUrl }parent-categories/view`, {
      name: searchName,
      page : currentPage,
    })
      .then((result) => {
        setImagePath(result.data.base_url);
        setCategoryData(result.data.data);
        setTotalRecords(result.data.total_pages)
      })
      .catch((error) => {
        toast.error('Something went wrong !!');
      })

  }, [searchName, status, currentPage]);

  const search = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);
    setSearchName(event.target.name.value);
    setCurrentPage(1);
  }

  const checkBox = (id) => {
    if(checkBoxValues.includes(id)){
      var dataFilter = checkBoxValues.filter((v) => {
        if(v != id){
          return v;
        }
      })
      setCheckBoxValues([...dataFilter]);
    } else {
      checkBoxValues.push(id);
      setCheckBoxValues([...checkBoxValues]);
    }

    console.log(checkBoxValues);
  }

  const selectAll = () => {
    categoryData.forEach((v) => {
      if(checkBoxValues.includes(v._id)){
      } else {
        checkBoxValues.push(v._id);
        setCheckBoxValues([...checkBoxValues]);
      }
    })
  }

  const changeStatus = () => {
    if(checkBoxValues.length > 0){
      if(confirm('Are you sure you want to change status ?')){
        axios.post('http://localhost:5000/api/admin/parent-categories/change-status', {
          ids: checkBoxValues
        })
        .then((result) => {
          toast.success(result.data.message)
          setCheckBoxValues([]);
          setStatus(!status);
        })
        .catch((error) => {
          toast.error('Something went wrong !!');
        })
      }
    }
  }

  const destroy = () => {
    if(checkBoxValues.length > 0){
      if(confirm('Are you sure you want to delete ?')){
        axios.post('http://localhost:5000/api/admin/parent-categories/delete', {
          ids: checkBoxValues
        })
        .then((result) => {
          toast.success(result.data.message)
          setCheckBoxValues([]);
          setStatus(!status);
        })
        .catch((error) => {
          toast.error('Something went wrong !!');
        })
      }
    }
  }



  return (
    <section className="w-full">

      <Breadcrumb path={"Category"} link={'/category/view'} path2={"View"} slash={"/"} />

      <div className={` rounded-lg border border-gray-300 px-5 py-5 max-w-[1220px] mx-auto mt-10 ${activeFilter ? "hidden" : "block"}`}>

        <form className="flex max-w-sm" onSubmit={ search }>
          <div className="relative w-full">
            <input
              type="text"
              name='name'
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Name"
              required
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
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
          <div className='flex item-center justify-between bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400'>
            <h3 className="text-[26px] font-semibold" >
              View Category
            </h3>
            <div className='flex justify-between '>
              <div onClick={() => setactiveFilter(!activeFilter)} className="cursor-pointer text-[white] mx-3 rounded-[50%] w-[40px] h-[40px]  mx-3 rounded-[50%] w-[40px] h-[40px] flex items-center justify-center  text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {activeFilter ? <FaFilter className='text-[18px]' /> : <MdFilterAltOff className='text-[18px]' />}
              </div>

              <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={ changeStatus } > Change Status</button>
              <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={ destroy }>Delete </button>
            </div>
          </div>
          <div className="border border-t-0 rounded-b-md border-slate-400">

            {/* border-2 border-[red] */}
            <div className="relative overflow-x-auto">


              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">

                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="p-4">
                        <div class="flex items-center">
                          <input id="checkbox-all-search" onClick={ selectAll }
                          

                          checked=
                          {
                            categoryData.length > 0
                            ?
                              (checkBoxValues.length == categoryData.length) ? 'checked' : ''
                            :

                            ''
                          }
                          type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label for="checkbox-all-search" class="sr-only">checkbox</label>
                        </div>
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" class=" w-[10%] ">
                        Image
                      </th>
                      <th scope="col" class=" w-[8%] ">
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
                      (categoryData.length > 0)
                        ?
                        categoryData.map((v, i) => {
                          return (
                            <tr key={i} class="bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600 hover:bg-gray-50">
                              <td class="p-4 w-4">
                                <div class="flex items-center">
                                  <input id="checkbox-table-search-1" onClick={ () => checkBox(v._id) }
                                  checked = { (checkBoxValues.includes(v._id)) ? 'checked' : '' }
                                  type="checkbox" class="bg-gray-100 border-gray-300 h-4 rounded-sm text-blue-600 w-4 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800 dark:ring-offset-gray-800 focus:ring-2 focus:ring-blue-500" />
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                              </td>
                              <td class="px-6 py-4">
                                {v.name }
                              </td>
                              <td class="py-4">
                                {v.image ? <img src={ imagePath+v.image } width={'50px'}/> : 'N/A'}
                              </td>

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

                                <Link to={`/category/update/${v._id}`} >
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
                          <td class="p-4 w-4" colSpan={6}>
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
        <Pagination currentPage={currentPage} totalPages={totalRecords} onPageChange={onPageChange} />
      </div>

      



    </section>
  )
}
