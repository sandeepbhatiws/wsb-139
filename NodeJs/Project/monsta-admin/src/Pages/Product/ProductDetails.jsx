import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../common/Breadcrumb'
import $, { param } from "jquery";
import "dropify/dist/css/dropify.min.css";
import "dropify/dist/js/dropify.min.js";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios, { toFormData } from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function ProductDetails() {

  const [categories, setCategories] = useState([]);
  const [categoryValue, setCategoryValue] = useState('');
  const [subCategories, setSubCategories] = useState([]);
  const [materials, setMaterails] = useState([]);
  const [colors, setColors] = useState([]);
  const [updateIdState, setUpdateIdState] = useState(false);

  useEffect(() => {
    $(".dropify").dropify({
      messages: {
        default: "Drag and drop ",
        replace: "Drag and drop ",
        remove: "Remove",
        error: "Oops, something went wrong"
      }
    });
  }, []);

  const [value, setValue] = useState('');


  useEffect(() => {
    axios.post('http://localhost:5000/api/admin/parent-categories/view')
      .then((result) => {
        setCategories(result.data.data);
      })
      .catch((error) => {
        toast.error('Something went wrong !!');
      })

      
      axios.post('http://localhost:5000/api/admin/materials/view')
      .then((result) => {
        setMaterails(result.data.data);
      })
      .catch((error) => {
        toast.error('Something went wrong !!');
      })

      axios.post('http://localhost:5000/api/admin/colors/view')
      .then((result) => {
        setColors(result.data.data);
      })
      .catch((error) => {
        toast.error('Something went wrong !!');
      })


  },[]);

  useEffect(() => {

    if(categoryValue != ''){
      axios.post('http://localhost:5000/api/admin/sub-categories/view',{
          parent_category_id : categoryValue
        }
      )
      .then((result) => {
        setSubCategories(result.data.data);
      })
      .catch((error) => {
        toast.error('Something went wrong !!');
      })
    } else {
      setSubCategories([]);
    }
    

  },[categoryValue]);

  var getCategoryValue = (event) => {
    setCategoryValue(event.target.value)
  }

  var navigate = useNavigate();

  const formHandler = (event) => {
    event.preventDefault();

    if(!updateIdState){
      axios.post('http://localhost:5000/api/admin/products/add', (event.target))
      .then((result) => {
        if(result.data.status == true){
          toast.success(result.data.message);
          navigate('/product/product-items');
        } else {
          toast.error(result.data.message);
        }
      })
      .catch((error) => {
        toast.error('Something went wrong !!');
      })
    }  else {
      axios.put(`http://localhost:5000/api/admin/products/update/${ updateId }`, (event.target))
      .then((result) => {
        if(result.data.status == true){
          toast.success(result.data.message);
          navigate('/product/product-items');
        } else {
          toast.error(result.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error('Something went wrong !!');
      })
    }


  }

  return (
    <section className="w-full">

      <Breadcrumb
        path={"Product"}
        path2={"Product Details"}
        slash={"/"}
      />


      <div className='w-full px-6 py-6  '>

        <form onSubmit={ formHandler }>
          <div className="grid grid-cols-3 gap-[10px] ">
            <div className="for-images ">

              <div className="">
                <label
                  htmlFor="categoryImage"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Product Image
                </label>
                <input
                  type="file"
                  name='image'
                  id="categoryImage"
                  className="dropify"
                  data-height="250"
                />

              </div>

              <div className="">
                <label
                  htmlFor="categoryImage"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Back Image
                </label>
                <input
                  type="file"
                  name='images[]'
                  id="categoryImage"
                  className="dropify"
                  multiple="multiple"
                  data-height="250"
                />

              </div>
            </div>

            <div className="middle">

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Prodct Name
                </label>
                <input
                  type="text" name='name'
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder='Prodct Name'
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Select Category
                </label>
                <select name='parent_category_id' onChange={ getCategoryValue } className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Select Category</option>
                  
                  {
                    categories.map((v,i) => {
                      return(
                        <option value={ v._id }>{ v.name }</option>
                      )
                    })
                  }
                </select>

              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Select Meterial
                </label>
                <select className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>
                  {
                    materials.map((v,i) => {
                      return(
                        <option value={ v._id }>{ v.name }</option>
                      )
                    })
                  }

                </select>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Select Prodcut Type
                </label>
                <select className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>
                  <option value="">Featured</option>
                  <option value="">New Arrivals</option>
                  <option value="">Onsale</option>


                </select>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Is Top Rated
                </label>
                <select className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>
                  <option value="">Yes</option>
                  <option value="">No</option>

                </select>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Actual Price
                </label>
                <input
                  type="text"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder='Actual Price'
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Total In Stocks
                </label>
                <input
                  type="text"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder='Total In Stocks'
                />
              </div>



            </div>

            {/* for right */}
            <div className="right-items">
              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f] "
                >
                  Prodct Code
                </label>
                <input
                  type="text"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder='Prodct Code'
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Select Sub Category
                </label>
                <select className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>

                  {
                    subCategories.map((v,i) => {
                      return(
                        <option value={ v._id }>{ v.name }</option>
                      )
                    })
                  }

                </select>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Select Color
                </label>
                <select className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>

                  {
                    colors.map((v,i) => {
                      return(
                        <option value={ v._id }>{ v.name }</option>
                      )
                    })
                  }

                </select>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Is Best Selling
                </label>
                <select className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>
                  <option value="">Yes</option>
                  <option value="">No</option>

                </select>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Is Upsell
                </label>
                <select className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>
                  <option value="">Yes</option>
                  <option value="">No</option>

                </select>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Sale Price
                </label>
                <input
                  type="text"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder=' Sale Price'
                />
              </div>


              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Order
                </label>
                <input
                  type="text"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder='Order'
                />
              </div>


            </div>
          </div>

          <div className='py-[40px]'>
            <label
              htmlFor="categoryImage"
              className="block  text-md font-medium text-gray-900 text-[#76838f]"
            >
              Description
            </label>
            <ReactQuill theme="snow" value={value} onChange={setValue} className='h-[200px]' />
          </div>

          <button class=" mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 "> Create Product </button>

        </form>

      </div>
    </section>
  )
}
