'use client'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import "../globals.css";
import Link from 'next/link';
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";
import axios, { toFormData } from 'axios';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';


    export default function page() {

        const apiUrl = process.env.NEXT_PUBLIC_SECRET_API_URL;

        let userToken=  useSelector((state)=>state.login.token)
        let [userInfo, setUserInfo] = useState('');

        useEffect(() => {
            if(userToken){
                axios.post(apiUrl+'/users/view-profile',{}, {
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
        },[]);

        const { error, isLoading, Razorpay } = useRazorpay();

        const placeOrder = (event) => {
            event.preventDefault();

            var orderDetails = {
                total_amount : 600,
                discount : 100,
                net_amount : 450,
                coupon_id : '',
                product_info : [{id :  1,name : 'Tshirt',description : '',actual_price  : 500,sale_price : 400},{id :  2,name : 'Tshirt',description : '',actual_price  : 500,sale_price : 400}],
                shipping_address : { name : 'Sandeep',    email : 'sandeep@gmail.com',    mobile_number : 1234567,    address : ''},
                billing_address : { name : 'Sandeep',    email : 'sandeep@gmail.com',    mobile_number : 1234567,    address : ''}
            }

            axios.post(apiUrl+'/order-place',orderDetails, {
                headers : {
                    'Authorization' : `Bearer ${userToken}`
                }
            })
            .then((success) => {
                if(success.data.status == true){
                    handlePayment(success.data.order_payment_id, success.data.data.net_amount);
                } else {
                    toast.error('Something Went Wrong !!');
                }
            })
            .catch((error) => {
                toast.error('Something Went Wrong !!');
            })            
        }

        const handlePayment = (order_payment_id,net_amount ) => {
            const options = {
                key: "rzp_test_tFz6O0QKcTtRj6",
                amount: net_amount * 100, // Amount in paise
                currency: "INR",
                name: "WsCube Tech",
                description: "WsCube Tech",
                order_id: order_payment_id, // Generate order_id on server
                handler: (response) => {
                    console.log(response);
                    toast.success('Payment Succesfullyy !!')
                    orderStatus(2,2,response.razorpay_order_id, response.razorpay_payment_id)
                },
                prefill: {
                    name: userInfo.name,
                    email: userInfo.email,
                    contact: userInfo.mobile_number,
                },
                theme: {
                    color: "#F37254",
                },
            };

            const razorpayInstance = new Razorpay(options);

            razorpayInstance.on("payment.failed", function (response) {
                toast.success('Payment Failed !!')
                console.log(response);
                orderStatus(3,1,response.error.metadata.order_id, response.error.metadata.payment_id)
                // alert(response.error.code);
                // alert(response.error.description);
                // alert(response.error.source);
                // alert(response.error.step);
                // alert(response.error.reason);
                // alert(response.error.metadata.order_id);
                // alert(response.error.metadata.payment_id);
            });

            razorpayInstance.open();
        };

        const orderStatus = (payment_status,order_status, order_number, transaction_id) => {
            axios.post(`${apiUrl}/order-place/update-status/${order_number}`,{
                payment_status : payment_status,
                order_status : order_status,
                transaction_id : transaction_id
            }, {
                headers : {
                    'Authorization' : `Bearer ${userToken}`
                }
            })
            .then((success) => {
                if(success.data.status == true){
                    // toast.success(success.data.message)
                } else {
                    toast.error('Something Went Wrong !!');
                }
            })
            .catch((error) => {
                toast.error('Something Went Wrong !!');
            })  
        }



        return (
            <>
                <Container fluid className='breadcrumbs_area'>
                    <Container className='breadcrumb_content'>
                        <Row>
                            <Col lg={12}>
                                <h3>Checkout</h3>
                                <ul className='p-0'>
                                    <li><Link href="/">home</Link></li>
                                    <li>&gt;</li>
                                    <li>Checkout</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </Container>


                <section className='border-bottom border-1 pb-5'>
                    <Container className='checkout_form'>
                        <Row>
                            <Form onSubmit={placeOrder} id='checkout_address' autoComplete='off' noValidate='novalidate' className="bv-form">
                                <Button type='submit' style={{ display: "none", width: "0", height: "0" }}></Button>
                                <Row>
                                    <Col lg={6} md={6}>
                                        <h3>Billing Details</h3>
                                        <Row>
                                            <Col lg={6} className='mb-20'>
                                                <div className="form-group has-feedback">
                                                    <label htmlFor="name">Name*</label>
                                                    <input type="text" className="form-control" id="name" name="name" defaultValue="" data-bv-field="name" /></div>
                                            </Col>

                                            <Col lg={6} className='mb-20'>
                                                <div className="form-group has-feedback">
                                                    <label htmlFor="name">Mobile Number*</label>
                                                    <input type="text" className="form-control numeric" id="mobile_number" maxLength="15" name="mobile_number" defaultValue="" data-bv-field="mobile_number" />
                                                </div>
                                            </Col>

                                            <Col lg={6} className='mb-20'>
                                                <div className="form-group has-feedback">
                                                    <label htmlFor="name">Billing Name*</label>
                                                    <input type="text" className="form-control" id="billing_name" name="billing_name" defaultValue="" data-bv-field="billing_name" />
                                                </div>
                                            </Col>



                                            <Col lg={6} className='mb-20'>
                                                <div className="form-group has-feedback">
                                                    <label htmlFor="name">Billing Email*</label>
                                                    <input type="text" className="form-control" id="billing_email" name="billing_email" defaultValue="" data-bv-field="billing_email" />
                                                </div>
                                            </Col>

                                            <Col xs={12} className='mb-20'>
                                                <div className="form-group has-feedback">
                                                    <label htmlFor="name">Billing Mobile Number*</label>
                                                    <input type="text" className="form-control numeric" id="billing_mobile" maxLength="15" name="billing_mobile" defaultValue="" data-bv-field="billing_mobile" />
                                                </div>
                                            </Col>

                                            <Col xs={12} className='mb-20'>
                                                <div className="form-group has-feedback">
                                                    <label htmlFor="name">Billing Address*</label>
                                                    <input type="text" className="form-control" name="billing_address" id="billing_address" defaultValue="" data-bv-field="billing_address" />
                                                </div>
                                            </Col>

                                            <Col xs={12} className='mb-20'>
                                                <div className="form-group has-feedback">
                                                    <label htmlFor="name">Country*</label>

                                                    <select className='nice-select niceselect_option'>
                                                        <option>Select Country</option>
                                                        <option>India</option>
                                                        <option>Pakistan</option>
                                                        <option>China</option>
                                                    </select>
                                                </div>
                                            </Col>

                                            <Col lg={6} className='mb-20'>
                                                <div className="form-group has-feedback">
                                                    <label htmlFor="billing_state">State*</label>
                                                    <input type="text" className="form-control" name="billing_state" id="billing_state" defaultValue="" data-bv-field="billing_state" />
                                                </div>
                                            </Col>

                                            <Col lg={6} className='mb-20'>
                                                <div className="form-group has-feedback">
                                                    <label htmlFor="billing_city">City*</label>
                                                    <input type="text" className="form-control" name="billing_city" id="billing_city" defaultValue="" data-bv-field="billing_city" />
                                                </div>
                                            </Col>

                                            <Col className='mb-20'>
                                                <input id="address" type="checkbox" data-bs-target="createp_account" />
                                                <label className="righ_0" htmlFor="address" data-bs-toggle="collapse" data-bs-target="#collapsetwo" aria-controls="collapseOne">Ship to a different address?</label>
                                            </Col>

                                            <Col xs={12} className='mb-20'>
                                                <div className="order-notes">
                                                    <label htmlFor="order_note">Order Notes</label>
                                                    <textarea id="order_note" rows="5" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>


                                    <Col lg={6} md={6}>
                                        <h3>Your order</h3>
                                        <div className="order_table table-responsive">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Product</th>
                                                        <th>Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr>
                                                        <td> Caroline Study Tables <strong> × 1</strong></td>
                                                        <td> Rs. 2,500</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th>Cart Subtotal</th>
                                                        <td>Rs. 2,500</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Discount (-)</th>
                                                        <td><strong>Rs. 0</strong></td>
                                                    </tr>
                                                    <tr className="order_total">
                                                        <th>Order Total</th>
                                                        <td><strong>Rs. 2,500</strong></td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>

                                        <div className="order_button">
                                            <button type="submit" id="placeOrder">Placed Order</button>
                                        </div>
                                    </Col>
                                </Row>
                            </Form>

                        </Row>
                    </Container>
                </section>
            </>
        )
    }
