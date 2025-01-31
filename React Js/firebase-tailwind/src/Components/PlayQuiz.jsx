import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { commonContext } from '../ContextAPI/Context';

export default function PlayQuiz() {

    const navigate = useNavigate();

    let { isLogin, setisLogin } = useContext(commonContext);


    useEffect(() => {
        if(!isLogin){
            navigate('/login');
        }
    },[]);
    
  return (
    <div>
      
    </div>
  )
}
