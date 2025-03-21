
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
  let [materialDetails, setMaterialDetails] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if(!updateIdState){
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
    }  else {
      axios.put(`http://localhost:5000/api/admin/materials/update/${ updateId }`, {
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
    }
    
  };

  // update work
  const [updateIdState,setUpdateIdState]=useState(false)

  let updateId=useParams().id
  
  useEffect(()=>{
    if(updateId==undefined){
      setUpdateIdState(false)
    }
    else{

      axios.post(`http://localhost:5000/api/admin/materials/details/${ updateId }`)
      .then((result) => {
        if(result.data.status == true){
          setMaterialDetails(result.data.data);
        } else {
          toast.error(result.data.message);
        }
      })
      .catch((error) => {
          toast.error('Something went wrong !!');
      })

      setUpdateIdState(true)
    }
  },[updateId])

 

  return (
    <section className="w-full">
      <Breadcrumb path={"Meterial"} path2= {updateIdState ? "Update" : "Add"}  slash={"/"} />
      <div className="w-full min-h-[610px]">
        <div className="max-w-[1220px] mx-auto py-5">
          <h3 className="bg-slate-100 border border-slate-400 rounded-t-md text-[26px] font-semibold px-4 py-3">
            {updateIdState ? "Update Meterial" : "Add Meterial"}  
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="border border-slate-400 border-t-0 p-3 rounded-b-md">
            
              <div className="">
                <div className="mb-5">
                  <label
                    htmlFor="Meterial"
                    className="text-gray-900 text-md block font-medium"
                  >
                    Material Name
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: "Meterial name is required" })}
                    id="Meterial"
                    className="border-2 border-gray-300 rounded-lg shadow-sm text-[19px] text-gray-900 text-sm w-full block focus:border-blue-500 focus:ring-blue-500 px-3 py-2.5"
                    placeholder="Meterial Name" defaultValue={ materialDetails.name }
                  />
                  {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="order"
                    className="text-gray-900 text-md block font-medium"
                  >
                    Order
                  </label>
                  <input
                    type="number"
                    {...register("order", { required: "Order is required" })}
                    id="order" defaultValue={ materialDetails.order }
                    className="border-2 border-gray-300 rounded-lg shadow-sm text-[19px] text-gray-900 text-sm w-full block focus:border-blue-500 focus:ring-blue-500 px-3 py-2.5"
                    placeholder="Order"
                  />
                  {errors.order && <p className="text-red-500">{errors.order.message}</p>}
                </div>
              </div>
           
            <button
              type="submit"
              className="bg-purple-700 rounded-lg text-sm text-white focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium hover:bg-purple-800 my-5 px-5 py-2.5"
            >
             {updateIdState ? "Update Material" : "Add Material"}  
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
