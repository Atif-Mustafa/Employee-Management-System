import React from 'react'
import Employee from './Employee'


export default function ListEmployeeComponent(props) {

    return (
        <div>
            <h2 className="text-center">Employees List</h2>
            <div className="row">
                <button className="btn btn-primary" onClick={()=>{
                props.navigate("/add-employee")
                }}>Add Employee</button>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">

                    <thead>
                        <tr>
                            <th> Employee First Name</th>
                            <th> Employee Last Name</th>
                            <th> Employee Email Id</th>
                            <th> Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {

                            props.employees.map((employee) => {
                                
                                return (
                                    <Employee employee={employee} key={employee.id}
                                        navigate={props.navigate} />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
