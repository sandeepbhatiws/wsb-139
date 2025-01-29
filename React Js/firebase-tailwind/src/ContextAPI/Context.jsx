import React, { createContext, useState } from 'react'

var commonContext = createContext();

export default function Context({children}) {

    var checkLogin = JSON.parse(localStorage.getItem('userLogin'));

    const [isLogin, setisLogin] = useState((checkLogin ? true : false));

    const data = {isLogin, setisLogin};

  return (
    <commonContext.Provider value={ data }>
        {children}
    </commonContext.Provider>
  )
}

export {commonContext};