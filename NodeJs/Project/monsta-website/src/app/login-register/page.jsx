"use client"
import React, { useEffect, useState } from 'react'
import "./login-register.css"
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation'

export default function page() {

    const router = useRouter();
    const [userToken, setuserToken] = useState(localStorage.getItem('userToken') ? localStorage.getItem('userToken') : '');

    useEffect(() => {
        if(userToken){
            router.push('/my-dashboard');
        }
    },[userToken]);

    const registerUser = (event) => {
        event.preventDefault();

        axios.post('http://localhost:5000/api/website/users/register',event.target)
        .then((result) => {
            if(result.data.status){
                event.target.reset();
                toast.success(result.data.message);
                localStorage.setItem('userToken', result.data.token);
                router.push('/');
            } else {
                toast.error(result.data.message);
            }
        })
        .catch((error) => {
            toast.error('Something went wrong !!');
        })    
    }

    const loginUser = (event) => {
        event.preventDefault();

        axios.post('http://localhost:5000/api/website/users/login',event.target)
        .then((result) => {
            if(result.data.status){
                event.target.reset();
                toast.success(result.data.message);
                localStorage.setItem('userToken', result.data.token);
                router.push('/');
            } else {
                toast.error(result.data.message);
            }
        })
        .catch((error) => {
            toast.error('Something went wrong !!');
        })    
    }

  return (
    <div>
    
    <div className="breadcrumbs_area">
        <div className="container">   
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb_content">
                        <h3>My account</h3>
                        <ul>
                            <li><a href="index.html">home</a></li>
                            <li> {">"}</li>
                            <li>My account</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>         
    </div>

    <div className="customer_login">
        <div className="container">
            <div className="row">
               
                <div className="col-lg-6 col-md-6">
                    <div className="account_form">
                        <h2>login</h2>
                        <form onSubmit={ loginUser } autoComplete='off'>
                            <p>   
                                <label>Email <span>*</span></label>
                                <input type="text" name='email'/>
                             </p>
                             <p>   
                                <label>Password <span>*</span></label>
                                <input type="password" name='password'/>
                             </p>   
                            <div className="login_submit">
                               <a href="#">Lost your password?</a>
                                <label htmlFor="remember">
                                    <input id="remember" type="checkbox"/>
                                    Remember me
                                </label>
                                <button type="submit">login</button>
                                
                            </div>

                        </form>
                     </div>    
                </div>
                
                <div className="col-lg-6 col-md-6">
                    <div className="account_form register">
                        <h2>Register</h2>
                        <form onSubmit={ registerUser } autoComplete='off'>
                            <p>   
                                <label>Name <span>*</span></label>
                                <input type="text" name='name'/>
                            </p>
                            <p>   
                                <label>Email address  <span>*</span></label>
                                <input type="text" name='email'/>
                             </p>
                             <p>   
                                <label>Password <span>*</span></label>
                                <input type="password" name='password'/>
                             </p>
                            <div className="login_submit">
                                <button type="submit">Register</button>
                            </div>
                        </form>
                    </div>    
                </div>
                
            </div>
        </div>    
    </div>
    
    </div>
  )
}
