
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

export default function UpdateEmployeeComponent(props) {
  const [fetchedEmployeeData, setFetchedEmployeeData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const fetchEmployeeData = () => {
    EmployeeService.getEmployeeById(id)
      .then((res) => {
        const employee = res.data;
        setFetchedEmployeeData(employee);
      })
      .catch((error) => {
        console.log('Error in fetching employee data:', error);
      });
  };

  // Rest of the component code...}
  const updateEmployeeData = (event) => {
    event.preventDefault();
    const updatedEmployeeData = {
      firstName: fetchedEmployeeData.firstName,
      lastName: fetchedEmployeeData.lastName,
      emailId: fetchedEmployeeData.emailId,
    };

    EmployeeService.updateEmployee(updatedEmployeeData, id) // Use 'id' from useParams()
      .then(() => {
        props.navigate('/employees');
      })
      .catch((error) => {
        console.log('Error in updating employee:', error);
      });
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFetchedEmployeeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h3 className="text-center">Update Employee</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={fetchedEmployeeData.firstName || ''}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={fetchedEmployeeData.lastName || ''}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label>Email Id</label>
                  <input
                    placeholder="Email Id"
                    name="emailId"
                    className="form-control"
                    value={fetchedEmployeeData.emailId || ''}
                    onChange={handleInputChange}
                  />
                </div>

                <button
                  className="btn btn-success"
                  onClick={updateEmployeeData}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    props.navigate('/employees');
                  }}
                  style={{ marginLeft: '10px' }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


{/*import React from 'react'

export default function UpdateEmployeeComponent(props) {
  return (

    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h3 className="text-center">Add Employee</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>First Name</label>
                  <input placeholder='First Name' name='firstName' className='form-control'
                    value={props.employeeFormData.firstName} onChange={props.changeFirstNameHandler
                    }
                  ></input>
                </div>

                <div className="form-group">
                  <label>Last Name</label>
                  <input placeholder='Last Name' name='lastName' className='form-control'
                    value={props.employeeFormData.lastName}
                    onChange={
                      props.changeLastNameHandler
                    }></input>
                </div>

                <div className="form-group">
                  <label>Email Id</label>
                  <input placeholder='EmailId' name='emailId' className='form-control'
                    value={props.employeeFormData.emailId}
                    onChange={
                      props.changeEmailIdHandler
                    }
                  ></input>
                </div>
                <button className="btn btn-success" onClick={props.updateEmployeeData(props.id)}>Update</button>
                <button className="btn btn-danger" onClick={() => { props.navigate("/employees") }} style={{ marginLeft: "10px" }}>Cancel</button>
              </form>

            </div>
          </div>
        </div>

      </div>
    </div>

  )
}
*/}