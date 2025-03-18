import React, { useEffect, useState } from "react";
import Breadcrumb from "../../common/Breadcrumb";
import { ChromePicker } from "react-color";
import { Link, useParams } from "react-router-dom";

export default function AddColor() {
  const [color, setColor] = useState("#000000");
  const [colorName, setColorName] = useState("");
  const [colorOrder, setColorOrder] = useState("");

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      colorName,
      color,
      colorOrder,
    });
    alert(`Color Added: ${colorName} - ${color}`);
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
    <>
    <nav className="flex border-b-2" aria-label="Breadcrumb">
          <ol className="p-3 px-6 inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center ">
              <Link href={"/home"} className="inline-flex items-center text-md font-medium text-gray-700 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                /
                <Link href={"/color/view"} className="ms-1 text-md font-medium text-gray-700 hover:text-blue-600 md:ms-2">Color</Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                / Add
              </div>
            </li>
          </ol>
        </nav>
      {/* <Breadcrumb path={"Color"} link={"/colors/view-color"} path2={"Add"} slash={"/"} /> */}

      <div className="w-full">
        <div className="max-w-[1220px] mx-auto py-5">
          <h3 className="text-[20px] font-semibold bg-slate-100 py-2 px-3 rounded-t-md border border-slate-400">
            Add Colors
          </h3>
          <form 
            className="p-3 border border-t-0 rounded-b-md border-slate-400"
            onSubmit={handleSubmit}
          >
            {/* Color Name */}
            <div className="mb-5">
              <label
                htmlFor="colorName"
                className="block  text-md font-medium text-gray-900"
              >
                Color Name
              </label>
              <input
                type="text"
                id="colorName"
                name="colorName"
                value={colorName}
                onChange={(e) => setColorName(e.target.value)}
                className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                placeholder="Enter Color Name"
                required
              />
            </div>

            {/* Color Picker */}
            <div className="mb-5">
              <label
                htmlFor="colorPicker"
                className="block  text-md font-medium text-gray-900"
              >
                Color Picker
              </label>
              <div className="flex items-center gap-3">
                <ChromePicker color={color} onChange={handleColorChange} />
                <div
                  className="w-10 h-10 border border-gray-400 rounded-md"
                  style={{ backgroundColor: color }}
                ></div>
              </div>
            </div>

            {/* Color Order */}
            <div className="mb-5">
              <label
                htmlFor="colorOrder"
                className="block  text-md font-medium text-gray-900"
              >
                Order
              </label>
              <input
                type="number"
                id="colorOrder"
                name="colorOrder"
                value={colorOrder}
                onChange={(e) => setColorOrder(e.target.value)}
                className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                placeholder="Enter Order"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="focus:outline-none my-10 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
           {updateIdState ? "Update Color" : "Add Color"}  
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
