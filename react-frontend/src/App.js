import React, { useState } from 'react';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import EmployeeService from './services/EmployeeService';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {

  const [employees, setEmployees] = useState([]);

  const componentDidMount=()=> {
    EmployeeService.getEmployees().then((res) => {
      setEmployees(res.data);
      console.log(employees);
    }).catch(()=>{
      console.log('error');
  });
  }
 componentDidMount();
 
  const navigate = useNavigate();
  const addEmployeeFormData = {
    firstName: '',
    lastName: '',
    emailId: ''
  }
  const [employeeData, setEmployeeData] = useState(addEmployeeFormData);

  const changeFirstNameHandler = (event) => {
    setEmployeeData({ firstName: event.target.value })
  }
  const changeLastNameHandler = (event) => {
    setEmployeeData({ lastName: event.target.value })
  }
  const changeEmailIdHandler = (event) => {
    setEmployeeData({ emailId: event.target.value })
  }

  const saveEmployee = (event) => {
    event.preventDefault();
    let saveEmployeeData = {
      firstName: employeeData.firstName,
      lastName: employeeData.lastName,
      emailId: employeeData.emailId
    }
    console.log('employee => ' + JSON.stringify(saveEmployeeData));
    EmployeeService.createEmployee(saveEmployeeData).then(res => {
      setEmployeeData(res.data);
      navigate('/employees')
      
    }).catch(()=>{
      console.log('error in creating employees');
    })
  }

  {/*const updateEmployee = (event) => {
    event.preventDefault();
    let updateEmployeeData = {
      firstName: employeeData.firstName,
      lastName: employeeData.lastName,
      emailId: employeeData.emailId
    }
    EmployeeService.getEmployeeById(props.match.params.id).then((res)=>{
          
    })
  }*/}



  return (
    <div>
      <div className='container'>
        <Routes>
          <Route path="/" element={<ListEmployeeComponent employees={employees} navigate={navigate} />}></Route>
          <Route path="/employees" element={<ListEmployeeComponent employees={employees} navigate={navigate} />}></Route>
          <Route path="/add-employee" element={<CreateEmployeeComponent
            employeeData={employeeData}
            changeFirstNameHandler={changeFirstNameHandler}
            changeLastNameHandler={changeLastNameHandler}
            changeEmailIdHandler={changeEmailIdHandler}
            saveEmployee={saveEmployee}
            navigate={navigate}
          />}></Route>

      {/*}    <Route path="/update-employee/:id" element={<UpdateEmployeeComponent updateEmployee={updateEmployee}
            employeeData={employeeData}
            changeFirstNameHandler={changeFirstNameHandler}
            changeLastNameHandler={changeLastNameHandler}
            changeEmailIdHandler={changeEmailIdHandler}
          />}></Route>*/}
        </Routes>
      </div>

    </div>
  );
}

export default App;
