import React from 'react'

export default function Employee(props) {
  return (
    <tr>
      <td>{props.employee.firstName}</td>
      <td>{props.employee.lastName}</td>
      <td>{props.employee.emailId}</td>
      <button style={{ marginLeft: "10px" }} onClick={() => { props.navigate(`/update-employee/${props.employee.id}`) }}
        className='btn btn-info' > Update</button>
      <button  style={{ marginLeft: "10px" }} onClick={() => props.deleteEmployee(props.employee.id)} className="btn btn-danger">Delete </button>
      <button style={{ marginLeft: "10px" }} onClick={() => props.viewEmployee(props.employee.id)} className="btn btn-info">View </button>
      
    </tr>
  )
}
