import React, { useEffect, useState } from "react";
import $ from "jquery";
import "dropify/dist/css/dropify.min.css";
import "dropify/dist/js/dropify.min.js";
import Breadcrumb from "../../common/Breadcrumb";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import axios, { toFormData } from "axios";
import { toast } from "react-toastify";

export default function AddSubCategory() {
  let [parentCategories, setParentCategories] = useState([]);
  let [parentCategoriesId, setParentCategoriesId] = useState('');
  let [categoryDetails, setCategoryDetails] = useState({});
  const [defaultImage, setDefaultImage] = useState(null);
  const [updateIdState, setUpdateIdState] = useState(false);
  let updateId = useParams().id;
  const navigate = useNavigate();

  const {
      register,
      handleSubmit,
      setValue,
      formState: { errors },
    } = useForm();


    // ✅ **Load Category Data for Update Case**
  useEffect(() => {
    axios
      .post(`http://localhost:5000/api/admin/sub-categories/parent-categories`,{
        params : {
          active_status : true
        }
      })
      .then((result) => {
        if (result.data.status === true) {
          setParentCategories(result.data.data);
        } else {
          toast.error(result.data.message);
        }
      })
      .catch(() => {
        toast.error("Something went wrong !!");
      });


    if (updateId !== undefined) {
      axios
        .post(`http://localhost:5000/api/admin/sub-categories/details/${updateId}`)
        .then((result) => {
          if (result.data.status === true) {
            const imageUrl = result.data.base_url + result.data.data.image;
            setDefaultImage(imageUrl);
            setCategoryDetails(result.data.data);
            setValue("name", result.data.data.name);
            setValue("order", result.data.data.order);
            setValue("parent_category_id", result.data.data.parent_category_id);
            setParentCategoriesId(result.data.data.parent_category_id);
          } else {
            toast.error(result.data.message);
          }
        })
        .catch(() => {
          toast.error("Something went wrong !!");
        });

      setUpdateIdState(true);
    } else {
      setUpdateIdState(false);
    }
  }, [updateId]);

  // ✅ **Initialize Dropify & Handle Default Image Update**
  useEffect(() => {
    const dropifyElement = $("#image");

    if (dropifyElement.data("dropify")) {
      dropifyElement.data("dropify").destroy();
      dropifyElement.removeData("dropify");
    }

    // **Force Update Dropify Input**
    dropifyElement.replaceWith(
      `<input type="file" accept="image/*" name="image" id="image"
        class="dropify" data-height="250" data-default-file="${defaultImage}"/>`
    );

    // **Reinitialize Dropify**
    $("#image").dropify();

    // **Update React Hook Form when File Changes**
    $("#image").on("change", function (event) {
      if (event.target.files.length > 0) {
        setValue("image", event.target.files[0]); // ✅ Sync React Hook Form
      }
    });
  }, [defaultImage]); // ✅ Runs when `defaultImage` updates


  const setParentCategory = (name) => {
    setValue("parent_category_id", name.target.value);

  }

  // ✅ **Handle Form Submission**
  const onSubmit = (data) => {
    console.log(data);

    if (data.image && data.image.length > 0) {
      data.image = data.image[0];
    }

    

    if(!updateIdState){
      axios.post('http://localhost:5000/api/admin/sub-categories/add', toFormData(data))
      .then((result) => {
        if(result.data.status == true){
          toast.success(result.data.message);
          navigate('/category/sub-category/view');
        } else {
          toast.error(result.data.message);
        }
      })
      .catch((error) => {
        toast.error('Something went wrong !!');
      })
    }  else {
      axios.put(`http://localhost:5000/api/admin/sub-categories/update/${ updateId }`, toFormData(data))
      .then((result) => {
        if(result.data.status == true){
          toast.success(result.data.message);
          navigate('/category/sub-category/view');
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

  return (
    <section className="w-full">
      <Breadcrumb path={"Sub Category"} link={'/category/sub-category/view'} path2={"Add"} slash={"/"} />
      <div className="w-full min-h-[610px]">
        <div className="max-w-[1220px] mx-auto py-5">
          <h3 className="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">
            Add Sub Category
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="border border-t-0 p-3 rounded-b-md border-slate-400">
            <div className="flex gap-5">
              <div className="w-1/3">
                <label
                  htmlFor="categoryImage"
                  className="block  text-md font-medium text-gray-900"
                >
                  Category Image
                </label>
                {
                  updateIdState
                  ?
                    <input
                      type="file"
                      accept="image/*"
                      name="image"
                      id="image"
                      className="dropify"
                      data-height="250"
                    />
                  :
                    <input
                      type="file"
                      accept="image/*"
                      name="image"
                      // {...register("image", { required: "Category image is required" })}
                      id="image"
                      className="dropify"
                      data-height="250"
                    />

                }
                {errors.categoryImage && <p className="text-red-500">{errors.categoryImage.message}</p>}
              </div>

              <div className="w-2/3">
                {/* Parent Category Dropdown */}
                <div className="mb-5">
                  <label className="block  text-md font-medium text-gray-900">
                    Parent Category Name
                  </label>
                  <select {...register("parent_category_id", { required: "Please select category" })}
                    name="parentCatSelectBox"

                    onChange={ setParentCategory }
                    className="border-2 border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                  >
                    <option value="">Select Category</option>
                    {
                      parentCategories.map((v,i) => {
                        return(
                          <option value={v._id} selected={ (parentCategoriesId == v._id) ? 'selected' : '' } >{v.name}</option>
                        )
                      })
                    }
                  </select>
                  {errors.parent_category_id && <p className="text-red-500">{errors.parent_category_id.message}</p>}
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block  text-md font-medium text-gray-900"
                  >
                    Category Name
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: "Category name is required" })}
                    id="name"
                    defaultValue={categoryDetails.name}
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                    placeholder="Category Name"
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
                    type="text"
                    defaultValue={categoryDetails.order}
                    {...register("order", { required: "Category Order is required" })}
                    id="categoryName"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                    placeholder="Category Order"
                  />
                  {errors.order && <p className="text-red-500">{errors.order.message}</p>}
                </div>

              </div>


            </div>
            <button
              type="submit"
              className="focus:outline-none my-5 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              {updateIdState ? "Update Sub Category" : "Add Sub Category"}
            </button>
          </form>


        </div>
      </div>
    </section>
  );
}
