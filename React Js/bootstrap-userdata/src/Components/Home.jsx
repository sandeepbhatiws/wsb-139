import React, { useState } from 'react'
import UserForm from './UserForm'
import UserData from './UserData'
import { ToastContainer } from 'react-toastify';

export default function Home() {

    var getUser = localStorage.getItem('userInfo');
    var getUser = JSON.parse(getUser);

    const [allUserData, setAllUserData] = useState(getUser ? getUser : []);
    const [states,setStates] = useState([]);

    const [formData, setFormData] = useState({
      name : '',
      email : '',
      mobile_number : '',
      country_id : '',
      state_id : '',
      id : ''
    });


  return (
    <>
      <ToastContainer/>
        <UserForm setAllUserData={setAllUserData} allUserData={allUserData} formData={formData} setFormData={setFormData} states={states} setStates={setStates}/>

        <UserData allUserData={allUserData} setAllUserData={setAllUserData} formData={formData} setFormData={setFormData} states={states} setStates={setStates}/>
    </>
  )
}
