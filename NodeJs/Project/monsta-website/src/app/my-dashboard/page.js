'use client'
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { logOut } from '../Redux Store/loginSlice';

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [selectedTitle, setSelectedTitle] = useState("Mr.");
    const router = useRouter();
    const [apiStatus, setAPIStatus] = useState(true);
    const [userInfo, setUserInfo] = useState('');

    const dispatch = useDispatch();

    let myName=  useSelector((state)=>state.login.user)
    let userToken=  useSelector((state)=>state.login.token)

    // useEffect(() => {
    //     if(!userToken){
    //         router.push('/login-register');
    //     }
    // },[userToken]);

    

    // const [userToken, setuserToken] = useState(localStorage.getItem('userToken') ? localStorage.getItem('userToken') : '');

    useEffect(() => {
        if(userToken){
            axios.post('http://localhost:5000/api/website/users/view-profile',{}, {
                headers : {
                    'Authorization' : `Bearer ${userToken}`
                }
            })
            .then((result) => {
                if(result.data.status){
                    // toast.success(result.data.message);
                    setUserInfo(result.data.data);
                } else {
                    toast.error(result.data.message);
                }
            })
            .catch((error) => {
                toast.error('Something went wrong !!');
            })
        }
    },[apiStatus]);

    const updateProfile = (event) => {
        event.preventDefault();

        axios.put('http://localhost:5000/api/website/users/update-profile',event.target, {
            headers : {
                'Authorization' : `Bearer ${userToken}`
            }
        })
        .then((result) => {
            if(result.data.status){
                toast.success(result.data.message);
                setAPIStatus(!apiStatus);
            } else {
                toast.error(result.data.message);
            }
        })
        .catch((error) => {
            toast.error('Something went wrong !!');
        })

        console.log(event.target);
    }

    const changePassword = (event) => {
        event.preventDefault();

        axios.put('http://localhost:5000/api/website/users/change-password',event.target, {
            headers : {
                'Authorization' : `Bearer ${userToken}`
            }
        })
        .then((result) => {
            if(result.data.status){
                toast.success(result.data.message);
                setAPIStatus(!apiStatus);
                event.target.reset();
            } else {
                toast.error(result.data.message);
            }
        })
        .catch((error) => {
            toast.error('Something went wrong !!');
        })

        console.log(event.target);
    }

    // let myName=  useSelector((state)=>state.login.user)
    // let userToken=  useSelector((state)=>state.login.token)
    
    

    // const logout = () => {
    //     localStorage.setItem('userToken', '');
    //     setuserToken('');
    // }

    return (
        <>
            <Container fluid className='breadcrumbs_area'>
                <Container className='breadcrumb_content'>
                    <Row>
                        <Col lg={12}>
                            <h3>My Dashboard</h3>
                            <ul className='p-0'>
                                <li><Link href="/">home</Link></li>
                                <li>&gt;</li>
                                <li>My Dashboard</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container fluid className='py-5 border-bottom '>

                <Container>
                    <Row>

                        <Col lg={3} className='dashboard_tab_button'>
                            <ul className='nav flex-column dashboard-list'>
                                <li><a onClick={() => setActiveTab('dashboard')} className={`nav-link ${activeTab === 'dashboard' ? 'active' : ''}`}>My Dashboard</a></li>

                                <li><a onClick={() => setActiveTab('orders')} className={`nav-link ${activeTab === 'orders' ? 'active' : ''}`}>Orders</a></li>

                                <li><a onClick={() => setActiveTab('address')} className={`nav-link ${activeTab === 'address' ? 'active' : ''}`}>Address</a></li>

                                <li><a onClick={() => setActiveTab('profile')} className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}>My Profile</a></li>

                                <li><a onClick={() => setActiveTab('password')} className={`nav-link ${activeTab === 'password' ? 'active' : ''}`}>Change Password</a></li>

                                <li><a onClick={ () => dispatch(logOut()) } className='nav-link'>Logout</a></li>
                            </ul>
                        </Col>


                        <Col lg={9}>

                            {/* Dashboard Content */}
                            {activeTab === 'dashboard' && (
                                <div className='tab-content dashboard_content'>
                                    <h3>My Dashboard</h3>
                                    <p>From your account dashboard, you can easily check & view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
                                </div>
                            )}

                            {/* Orders Content */}
                            {activeTab === 'orders' && (
                                <div className='tab-content dashboard_content'>
                                    <h3>Orders</h3>
                                    <div className='table-responsive order'>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Order</th>
                                                    <th>Date</th>
                                                    <th>Status</th>
                                                    <th>Total</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>May 10, 2018</td>
                                                    <td><span className="success">Completed</span></td>
                                                    <td>Rs. 25.00 for 1 item </td>
                                                    <td><Link href="/product-details/your_product_name" className="view">view</Link></td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>May 10, 2018</td>
                                                    <td>Processing</td>
                                                    <td>Rs. 17.00 for 1 item </td>
                                                    <td><Link href="/product-details/your_product_name" className="view">view</Link></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {/* Address Content */}
                            {activeTab === 'address' && (
                                <div className='tab-content dashboard_content'>
                                    <p>The following addresses will be used on the checkout page by default.</p>

                                    <Row>
                                        <Col xl={6} md={12} className="col-xl-6 col-md-12 billingAddress">
                                            <div>
                                                <h4 className="billing-address">Billing address</h4>
                                                <div className="billingAddressError"></div>
                                                <div className="login">
                                                    <div className="account_form login_form_container">
                                                        <div className="account_login_form">
                                                            <form id="update_billing_address" autoComplete="off" noValidate="noValidate" className="bv-form">

                                                                <div className="col-xl-12">
                                                                    <div className="form-group has-feedback">
                                                                        <label htmlFor="name">Billing Name*</label>
                                                                        <input type="text" className="form-control" id="billing_name" name="billing_name" data-bv-field="billing_name" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-xl-12">
                                                                    <div className="form-group has-feedback">
                                                                        <label htmlFor="name">Billing Email*</label>
                                                                        <input type="text" className="form-control" id="billing_email" name="billing_email" data-bv-field="billing_email" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-xl-12">
                                                                    <div className="form-group has-feedback">
                                                                        <label htmlFor="name">Billing Mobile Number*</label>
                                                                        <input type="text" className="form-control numeric" id="billing_mobile" maxLength="15" name="billing_mobile" data-bv-field="billing_mobile" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-xl-12">
                                                                    <div className="form-group has-feedback">
                                                                        <label htmlFor="name">Billing Address*</label>
                                                                        <input type="text" className="form-control" name="billing_address" id="billing_address" data-bv-field="billing_address" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-xl-12">
                                                                    <div className="form-group has-feedback">
                                                                        <label htmlFor="name">Country*</label>
                                                                        <select className="form-control" name="billing_country_id" id="billing_country_id" data-bv-field="billing_country_id">
                                                                            <option >Select Country</option>
                                                                            <option > Afghanistan</option>
                                                                            <option > Albania</option>
                                                                            <option > Algeria</option>
                                                                            <option > American Samoa</option>
                                                                            <option > Andorra</option>
                                                                            <option >India</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="col-xl-12">
                                                                    <div className="form-group has-feedback">
                                                                        <label htmlFor="billing_state">State*</label>
                                                                        <input type="text" className="form-control" name="billing_state" id="billing_state" data-bv-field="billing_state" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-xl-12">
                                                                    <div className="form-group has-feedback">
                                                                        <label htmlFor="billing_city">City*</label>
                                                                        <input type="text" className="form-control" name="billing_city" id="billing_city" data-bv-field="billing_city" />
                                                                    </div>
                                                                </div>

                                                                <br />
                                                                <div className="login_submit">
                                                                    <button type="submit" className="common_btn text-uppercase" title="Update" id="updateBillingAddress">Update</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col xl={6} md={12} className="shippingAddress">

                                            <div>
                                                <h4 className="shipping-address">Shipping address</h4>
                                                <div className="shippingAddressError"></div>
                                                <div className="login">
                                                    <div className="account_form login_form_container">
                                                        <div className="account_login_form">
                                                            <form id="update_shipping_address" autoComplete="off" noValidate="noValidate" className="bv-form">

                                                                <div className="col-xl-12">
                                                                    <div className="form-group has-feedback">
                                                                        <label htmlFor="name">Shipping Name*</label>
                                                                        <input type="text" className="form-control" id="shipping_name" name="shipping_name" data-bv-field="shipping_name" />

                                                                    </div>
                                                                </div>

                                                                <div className="col-xl-12">
                                                                    <div className="form-group has-feedback">
                                                                        <label htmlFor="name">Shipping Email*</label>
                                                                        <input type="text" className="form-control" id="shipping_email" name="shipping_email" data-bv-field="shipping_email" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-xl-12">
                                                                    <div className="form-group has-feedback">
                                                                        <label htmlFor="name">Shipping Mobile Number*</label>
                                                                        <input type="text" className="form-control numeric" id="shipping_mobile" maxLength="15" name="shipping_mobile" data-bv-field="shipping_mobile" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-xl-12">
                                                                    <div className="form-group has-feedback">
                                                                        <label htmlFor="name">Shipping Address*</label>
                                                                        <input type="text" className="form-control" name="shipping_address" id="shipping_address" data-bv-field="shipping_address" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-xl-12">
                                                                    <div className="form-group has-feedback">
                                                                        <label htmlFor="shipping_country_id">Country*</label>
                                                                        <select className="form-control" name="shipping_country_id" id="shipping_country_id" data-bv-field="shipping_country_id">
                                                                            <option >Select Country</option>
                                                                            <option > Afghanistan</option>
                                                                            <option > Albania</option>
                                                                            <option > Algeria</option>
                                                                            <option > American Samoa</option>
                                                                            <option > Andorra</option>
                                                                            <option > India</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="col-xl-12">
                                                                    <div className="form-group has-feedback">
                                                                        <label htmlFor="shipping_state">State*</label>
                                                                        <input type="text" className="form-control" name="shipping_state" id="shipping_state" data-bv-field="shipping_state" />

                                                                    </div>
                                                                </div>

                                                                <div className="col-xl-12">
                                                                    <div className="form-group has-feedback">
                                                                        <label htmlFor="shipping_city">City*</label>
                                                                        <input type="text" className="form-control" name="shipping_city" id="shipping_city" data-bv-field="shipping_city" />
                                                                    </div>
                                                                </div>


                                                                <div className="login_submit">
                                                                    <button type="submit" className="common_btn text-uppercase" title="Update" id="updateShippingAddress">Update</button>
                                                                </div>

                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                </div>


                            )}



                            {/* Profile Content */}
                            {activeTab === 'profile' && (
                                <div className='tab-content dashboard_content'>
                                    <h3>My Profile</h3>
                                    <div className="login">
                                        <div className="account_form login_form_container">
                                            <div className="account_login_form">
                                                <form id="personal_information" autoComplete="off" noValidate="noValidate" className="bv-form" onSubmit={ updateProfile }>

                                                    <div className="col-xl-12">
                                                        <div className="input-radio">
                                                            <span className="custom-radio">
                                                                <input
                                                                    type="radio"
                                                                    value="Mr."
                                                                    name="title"
                                                                    checked={selectedTitle === "Mr."}
                                                                    onChange={(e) => setSelectedTitle(e.target.value)}
                                                                />
                                                                Mr.
                                                            </span>

                                                            <span className="custom-radio">
                                                                <input
                                                                    type="radio"
                                                                    value="Mrs."
                                                                    name="title"
                                                                    checked={selectedTitle === "Mrs."}
                                                                    onChange={(e) => setSelectedTitle(e.target.value)}
                                                                />
                                                                Mrs.
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="col-xl-12">
                                                        <div className="form-group has-feedback">
                                                            <label htmlFor="name">Name*</label>
                                                            <input type="text" className="form-control" id="name" name="name" data-bv-field="name" defaultValue={userInfo.name} />
                                                        </div>
                                                    </div>

                                                    <div className="col-xl-12">
                                                        <div className="form-group has-feedback">
                                                            <label htmlFor="name">Email*</label>
                                                            <input type="text" className="form-control" id="email" placeholdere="sultankhan.wscube@gmail.com" readOnly="readOnly" defaultValue={userInfo.email} data-bv-field="email" />
                                                        </div>
                                                    </div>

                                                    <div className="col-xl-12">
                                                        <div className="form-group has-feedback">
                                                            <label htmlFor="name">Mobile Number*</label>
                                                            <input type="text" className="form-control numeric" id="mobile_number" maxLength="15" name="mobile_number" data-bv-field="mobile_number" defaultValue={userInfo.mobile_number}  />
                                                        </div>
                                                    </div>

                                                    <div className="col-xl-12">
                                                        <div className="form-group has-feedback">
                                                            <label htmlFor="name">Address*</label>
                                                            <input type="text" className="form-control" name="address" id="address"  data-bv-field="address" />
                                                        </div>
                                                    </div>


                                                    <div className="login_submit">
                                                        <button type="submit" className="common_btn text-uppercase" title="Update" id="updateInfo">Update</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Change Password Content */}
                            {activeTab === 'password' && (
                                <div className='tab-content dashboard_content'>
                                    <h3>Change Password</h3>

                                <div className="login">
                                    <div className="account_form login_form_container">
                                        <div className="account_login_form">
                                        <form method="POST" acceptCharset="UTF-8" id="change_password" className="bv-form" autoComplete="off" noValidate="noValidate" onSubmit={ changePassword }>

                                            <div className="form-group has-feedback">
                                                <label>Current Password</label>
                                                <input type="password" className="form-control" name="current_password" id="currentpassword" data-bv-field="currentpassword"/>
                                            </div>

                                            <div className="form-group has-feedback">
                                                <label>New Password</label>
                                                <input type="password" className="form-control" name="new_password" id="password" data-bv-field="password" />
                                            </div>

                                            <div className="form-group has-feedback">
                                                <label>Confirm Password</label>
                                                <input type="password" className="form-control" id="confirm_password" name="confirm_password" data-bv-field="confirmPassword" />
                                            </div>

                                            <br/>
                                            <div className="login_submit">
                                                <button type="submit" className="common_btn text-uppercase" title="Update" id="passwordUpdate">Change Password</button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                                </div>
                            )}
                        </Col>
                    </Row>
                </Container>

            </Container>
        </>
    );
}
