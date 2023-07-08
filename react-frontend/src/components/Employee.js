import React from 'react'

export default function Employee(props) {
  return (
    <tr>
      <td>{props.employee.firstName}</td>
      <td>{props.employee.lastName}</td>
      <td>{props.employee.emailId}</td>
      <button onClick={()=>{props.navigate(`/update-employee/${props.employee.id}`)}}
       className = 'btn btn-info' > Update</button>
    </tr >
  )
}
