import React, { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import countriesData from '../data/country';
import statesData from '../data/state';

export default function UserForm({allUserData, setAllUserData, formData, setFormData, states,setStates}) {

    var name         = useRef();
    var email        = useRef();
    var mobileNumber = useRef();

    const [countries,setCountries] = useState(countriesData);
    

    const getState = (event) => {
        
        if(event.target.value != ''){
            const data = statesData.filter((v,i) => {
                if(event.target.value == v.country_id){
                    return v;
                }
            })

            var finalData = [...data];
            setStates(finalData)

        } else {
            setStates([]);
        }
    }

    const formHandler = (event) => {
        event.preventDefault();

        var countryName = countries.filter((v,i) => {
            if(v.id == event.target.country_id.value){
                return v;
            }
        })

        var stateName = states.filter((v,i) => {
            if(v.id == event.target.state_id.value){
                return v;
            }
        })

        console.log(name.current.value);

        const userData = {
            name : name.current.value,
            email : email.current.value,
            mobile_number : mobileNumber.current.value,
            country_name : countryName[0].name,
            state_name : stateName[0].name,
            country_id : event.target.country_id.value,
            state_id : event.target.state_id.value,
        }

        const final = [userData, ...allUserData];
        setAllUserData(final);

        // event.target.name.value = '';
        event.target.reset();
        setStates([]);

    }

    const inputValue = (e) => {
        var data = {...formData};
        data[e.target.name] = data[e.target.value];
        setFormData(data);
    }

    return (
        <>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row text-center p-4'>
                        <h1>User Information</h1>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <Form className='border p-3 rounded' onSubmit={ formHandler } autoComplete='off'>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" name="name" placeholder="Enter name" value={formData.name} ref={ name } onChange={ inputValue } />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" name="email" placeholder="Enter email" value={formData.email} ref={email} onChange={ inputValue } />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridNumber">
                                        <Form.Label>Mobile Number</Form.Label>
                                        <Form.Control type="number" name="mobile_number" placeholder="Enter Mobile Number" value={formData.mobile_number} ref={mobileNumber} onChange={ inputValue }/>
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                   
                                    <Form.Group as={Col} controlId="formGridCountry">
                                        <Form.Label>Country</Form.Label>
                                        <Form.Select name="country_id" onChange={ getState }>
                                            <option value=''>Select Country</option>
                                            {
                                                countries.map((v,i) => {
                                                    return(
                                                        <option value={v.id} selected ={ (formData.country_id == v.id) ? 'selected' : '' }  >{v.name}</option>
                                                    )
                                                })
                                            }
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>State</Form.Label>
                                        <Form.Select name="state_id" >
                                            <option value=''>Select State</option>
                                            {
                                                states.map((v,i) => {
                                                    return(
                                                        <option value={v.id} selected ={ (formData.state_id == v.id) ? 'selected' : '' }>{v.name}</option>
                                                    )
                                                })
                                            }
                                        </Form.Select>
                                    </Form.Group>
                                </Row>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
