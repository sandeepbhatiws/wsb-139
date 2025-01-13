import React, { useState } from 'react'
import UserForm from './UserForm'
import UserData from './UserData'

export default function Home() {

    const [allUserData, setAllUserData] = useState([]);


  return (
    <>
        <UserForm setAllUserData={setAllUserData}/>

        <UserData allUserData={allUserData}/>
    </>
  )
}
