import React from 'react'
import Employee from './Employee'


export default function ListEmployeeComponent(props) {

    return (
        <div>
            <h2 className="text-center">Employees List</h2>

                <button className="btn btn-primary" onClick={() => {
                    props.navigate("/add-employee")
                }}>Add Employee</button>

            <br></br>
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

                            props.employeesList.map((employee) => {

                                return (
                                    <Employee employee={employee} key={employee.id}
                                        navigate={props.navigate}
                                        deleteEmployee={props.deleteEmployee}
                                        gettingUpdataEmployeeData={props.gettingUpdataEmployeeData} />
                                )
                            })
                        }
                    </tbody>
                    
                </table>
            </div>
        </div>
    )
}
