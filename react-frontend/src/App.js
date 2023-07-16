import React, { useState, useEffect } from 'react';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import EmployeeService from './services/EmployeeService';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import { Route, Routes, useParams, useNavigate } from 'react-router-dom'

import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {

  const [employeesList, setEmployeesList] = useState([]);

  const componentDidMount = () => {
    EmployeeService.getEmployees().then((res) => {
      setEmployeesList(res.data);
    }).catch(() => {
      console.log('error');
    });
  }
  componentDidMount();

  const navigate = useNavigate();
  const employeeFormDataStructure = {
    firstName: '',
    lastName: '',
    emailId: ''
  }
  const [employeeFormData, setEmployeeFormData] = useState(employeeFormDataStructure);
  const { id } = useParams();
  useEffect(() => {
    console.log(employeeFormData);
  }, [employeeFormData]);


  const changeFirstNameHandler = (event) => {
    console.log(employeeFormData);
    setEmployeeFormData({
      ...employeeFormData,
      firstName: event.target.value
    })
  }
  const changeLastNameHandler = (event) => {
    setEmployeeFormData({ ...employeeFormData, lastName: event.target.value })

  }
  const changeEmailIdHandler = (event) => {
    setEmployeeFormData({ ...employeeFormData, emailId: event.target.value })
  }

  const saveEmployee = (event) => {
    event.preventDefault();
    let saveEmployeeFormData = {
      firstName: employeeFormData.firstName,
      lastName: employeeFormData.lastName,
      emailId: employeeFormData.emailId
    }
    // console.log('employee => ' + JSON.stringify(saveEmployeeFormData));
    EmployeeService.createEmployee(saveEmployeeFormData).then(res => {

      navigate('/employees')
      setEmployeeFormData(employeeFormDataStructure)
    })
      .catch(() => {
        console.log('error in creating employees');
      })
  }
  const gettingUpdataEmployeeData = (employeeId) => {
    EmployeeService.getEmployeeById(employeeId).then((res) => {
      let employee = res.data;
      setEmployeeFormData({ firstName: employee.firstName, lastName: employee.lastName, emailId: employee.emailId })
    })
  }
  const updateEmployeeData = (employeeId) => {


    let updateEmployeeData = {
      firstName: employeeFormData.firstName,
      lastName: employeeFormData.lastName,
      emailId: employeeFormData.emailId
    }


    EmployeeService.updateEmployee(updateEmployeeData, id)
      .then(() => { navigate('/employees') })
      .catch(() => { console.log('error') })
  }


  const deleteEmployee = (employeeId) => {
    EmployeeService.deleteEmployee(employeeId)
      .then(() => {
        // Filter out the deleted employee from the employeesList state
        const updatedList = employeesList.filter((employee) => employee.id !== employeeId);
        setEmployeesList(updatedList);
      })
      .catch(() => {
        console.log('error in deleting employee');
      });
  };


  return (
    <div>
      <HeaderComponent />
      <div className='container'>
        <Routes>
          <Route path="/" element={<ListEmployeeComponent employeesList={employeesList} navigate={navigate} deleteEmployee={deleteEmployee} />}></Route>
          <Route path="/employees" element={<ListEmployeeComponent employeesList={employeesList} navigate={navigate} deleteEmployee={deleteEmployee} gettingUpdataEmployeeData={gettingUpdataEmployeeData} />}></Route>
          <Route path="/add-employee" element={<CreateEmployeeComponent
            employeeFormData={employeeFormData}

            changeFirstNameHandler={changeFirstNameHandler}
            changeLastNameHandler={changeLastNameHandler}
            changeEmailIdHandler={changeEmailIdHandler}
            saveEmployee={saveEmployee}
            navigate={navigate}
          />}></Route>

          <Route path="/update-employee/:id" element={<UpdateEmployeeComponent updateEmployeeData={updateEmployeeData}
            navigate={navigate}
          />}></Route>
        </Routes>
      </div>
      <FooterComponent />

    </div>
  );
}

export default App;
