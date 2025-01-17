import React from 'react'
import { ToastContainer } from 'react-toastify'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";


export default function Header() {
    return (
        <>
            <ToastContainer />
            <header className='container-fluid'>
                <div class="container">
                    <div class="row">
                        <div class="col-md-2 mt-2">
                            <a class="navbar-brand" href="#">
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

                        <div class="col-md-3 mt-3">
                            <div class="circle float-right">
                                <FaShoppingCart className='text-muted'/>
                                <span class="badge badge-danger">0</span>

                            </div>
                            <div class="circle float-right mr-4">
                                <FaUser className='text-muted' data-target="#exampleModal" data-toggle="modal"/>
                                <span class="badge badge-danger">0</span>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
