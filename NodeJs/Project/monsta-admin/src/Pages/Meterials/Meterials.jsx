




import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Breadcrumb from "../../common/Breadcrumb";
import $ from "jquery";
import "dropify/dist/css/dropify.min.css";
import "dropify/dist/js/dropify.min.js";
import { useNavigate, useNavigation, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function Meterials() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios.post('http://localhost:5000/api/admin/materials/add', {
      name : data.name,
      order : data.order,
    })
    .then((result) => {
      if(result.data.status == true){
        toast.success(result.data.message);
        navigate('/material/view');
      } else {
        toast.error(result.data.message);
      }
    })
    .catch((error) => {
      console.log(error);
      toast.error('Something went wrong !!');
    })
  };

  // update work
  const [updateIdState,setUpdateIdState]=useState(false)

  let updateId=useParams().id
  
  useEffect(()=>{
    if(updateId==undefined){
      setUpdateIdState(false)
    }
    else{
      setUpdateIdState(true)
    }
  },[updateId])

 

  return (
    <section className="w-full">
      <Breadcrumb path={"Meterial"} path2= {updateIdState ? "Update" : "Add"}  slash={"/"} />
      <div className="w-full min-h-[610px]">
        <div className="max-w-[1220px] mx-auto py-5">
          <h3 className="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">
            {updateIdState ? "Update Meterial" : "Add Meterial"}  
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="border border-t-0 p-3 rounded-b-md border-slate-400">
            
              <div className="">
                <div className="mb-5">
                  <label
                    htmlFor="Meterial"
                    className="block  text-md font-medium text-gray-900"
                  >
                    Material Name
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: "Meterial name is required" })}
                    id="Meterial"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                    placeholder="Meterial Name"
                  />
                  {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="order"
                    className="block  text-md font-medium text-gray-900"
                  >
                    Order
                  </label>
                  <input
                    type="number"
                    {...register("order", { required: "Order is required" })}
                    id="order"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                    placeholder="Order"
                  />
                  {errors.order && <p className="text-red-500">{errors.order.message}</p>}
                </div>
              </div>
           
            <button
              type="submit"
              className="focus:outline-none my-5 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
             {updateIdState ? "Update Material" : "Add Material"}  
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
