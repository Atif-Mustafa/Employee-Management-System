import React from 'react'

export default function CreateEmployeeComponent(props) {
  return (

    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">


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


                <button className="btn btn-success" onClick={props.saveEmployee}>Save</button>
                <button className="btn btn-danger" onClick={() => { props.navigate("/employees") }} style={{ marginLeft: "10px" }}>Cancel</button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
