import React from 'react'
import Table from 'react-bootstrap/Table';
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

export default function UserData({ allUserData }) {
    return (
        <>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row text-center p-4'>
                        <h1>User Data</h1>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className='text-center' width="50px">#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile Number</th>
                                        <th>Country Name</th>
                                        <th>State Name</th>
                                        <th className='text-center' width="120px">Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        (allUserData.length > 0)
                                        ?
                                        allUserData.map((v,i) => {
                                            return(
                                                <tr>
                                                    <td className='text-center'>1</td>
                                                    <td>Mark</td>
                                                    <td>Otto@gmail.com</td>
                                                    <td>1234567890</td>
                                                    <td>India</td>
                                                    <td>India</td>
                                                    <td>
                                                        <button className='btn btn-primary pb-2'>
                                                            <FaPencilAlt />
                                                        </button>

                                                        <button className='btn btn-danger ms-3 pb-2'>
                                                            <FaTrashAlt />
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })

                                        :
                                        <tr>
                                            <td colSpan={7} className='text-center'>No Record Found !!</td>
                                        </tr>
                                    }

                                    
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
