import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function UserForm() {
    return (
        <>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row text-center p-4'>
                        <h1>User Information</h1>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <Form className='border p-3 rounded'>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter name" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridNumber">
                                        <Form.Label>Mobile Number</Form.Label>
                                        <Form.Control type="number" placeholder="Enter Mobile Number" />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                   
                                    <Form.Group as={Col} controlId="formGridCountry">
                                        <Form.Label>Country</Form.Label>
                                        <Form.Select>
                                            <option>Select Country</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>State</Form.Label>
                                        <Form.Select>
                                            <option>Select State</option>
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
