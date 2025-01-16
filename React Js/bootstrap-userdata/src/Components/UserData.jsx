import React from 'react'
import Table from 'react-bootstrap/Table';
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import statesData from '../data/state';
import { toast } from 'react-toastify';

export default function UserData({ allUserData, setAllUserData, formData, setFormData, states,setStates }) {

    const deleteRecord = (index) => {
        if(confirm('Are you sure you want to delete ?')){
            allUserData.splice(index,1);
            setAllUserData([...allUserData]);

            localStorage.setItem('userInfo',JSON.stringify(allUserData));

            toast.success('Record deleted succesfully.');
        }
    }

    const updateRecord = (index) => {
        var data = allUserData.filter((v,i) => {
            if(index == i){
                return v;
            }
        });

        if(data[0].country_id != ''){
            const datas = statesData.filter((v,i) => {
                if(data[0].country_id == v.country_id){
                    return v;
                }
            })

            var finalData = [...datas];
            setStates(finalData)

        } else {
            setStates([]);
        }

        setFormData({
            name : data[0].name,
            email : data[0].email,
            mobile_number : data[0].mobile_number,
            country_id : data[0].country_id,
            state_id : data[0].state_id,
            id : index
        })

        console.log(formData);
    }

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
                                                    <td className='text-center'>{ i+1}</td>
                                                    <td>{v.name}</td>
                                                    <td>{v.email}</td>
                                                    <td>{v.mobile_number}</td>
                                                    <td>{v.country_name}</td>
                                                    <td>{v.state_name}</td>
                                                    <td>
                                                        <button className='btn btn-primary pb-2' onClick={ () => updateRecord(i) }>
                                                            <FaPencilAlt />
                                                        </button>

                                                        <button className='btn btn-danger ms-3 pb-2' onClick={ () => deleteRecord(i) }>
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
