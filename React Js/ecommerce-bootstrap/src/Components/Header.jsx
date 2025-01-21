import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Header() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('https://wscubetech.co/ecommerce-api/categories.php')
        .then((response) => {
            setCategories(response.data.data)
        })
        .catch((error) => {
        toast.error('Something went wrong !!'); 
        });
    },[]);


    return (
        <>
            <ToastContainer />
            <header className='container-fluid'>
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-md-2 mt-2">
                            <a class="navbar-brand" href="/">
                                <img src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg" alt="image of logo" class="img-fluid " />
                            </a>
                        </div>

                        <div class="col-md-7">
                            <div class="input-group mt-3">
                                <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="button" id="button-addon2">
                                        <FaSearch />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 mt-3 d-flex justify-content-end">
                            <div class="circle me-3">
                                <FaShoppingCart className='text-muted'/>
                                <span class="badge badge-danger">0</span>

                            </div>
                            <div class="circle mr-4">
                                <FaUser className='text-muted' data-target="#exampleModal" data-toggle="modal"/>
                                <span class="badge badge-danger">0</span>

                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <hr/>
        
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light " id="navbar">

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav" id="nav">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/">Home</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to="/products">All</Link>
                            </li>

                            {
                                categories.map((v,i) => {
                                    return (
                                    
                                        (i < 10) ? 
                                            
                                                <li class="nav-item" key={i}>
                                                    <Link class="nav-link" to={ `/products/${v.slug}` }>{ v.name }</Link>
                                                </li> 
                                            
                                        : ''

                                    )
                                })
                            }
                            
                        </ul>
                    </div>
                </nav>
            </div>
            <hr id="hr"/>
        </>
    )
}
