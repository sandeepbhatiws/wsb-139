import React, { useState } from 'react'
import UserForm from './UserForm'
import UserData from './UserData'

export default function Home() {

    const [allUserData, setAllUserData] = useState([]);
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
        <UserForm setAllUserData={setAllUserData} allUserData={allUserData} formData={formData} setFormData={setFormData} states={states} setStates={setStates}/>

        <UserData allUserData={allUserData} setAllUserData={setAllUserData} formData={formData} setFormData={setFormData} states={states} setStates={setStates}/>
    </>
  )
}
