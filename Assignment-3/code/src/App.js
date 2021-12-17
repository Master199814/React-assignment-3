import React from 'react';
import logo from './logo.svg';
import './App.css';


var arrow="<"
function App(props) {
  const employeedetails=props.emp;
  
  return (
    <div className="site-container">
    <div className="header">
    <hr/>
    <h4>{employeedetails.name}</h4>
    <p>{employeedetails.id}</p>
      <button>Print</button>
      <hr/>
    </div>
    
    <div className="customer-info main-div">
      <p><b>Appointment</b>{employeedetails.Appointment} </p>
      <p><b>Email:</b>{employeedetails.Email} </p>
      <p><b>Phone</b>{employeedetails.phone} </p>
    </div>
    <div className="order-info main-div">

      <p><b>Status</b><br/><li>{employeedetails.status}</li></p>
      <p><b>Door</b><br/>{employeedetails.Door}</p>
      <p><b>Time</b><br/>{employeedetails.Time}</p>
      
    </div>
    <div className="product-list main-div">
    <div id="box"></div>
    <div> <img src="https://www.w3schools.com/howto/img_avatar.png"/></div>
    <div>
      <p><b>{employeedetails.itemname}</b></p>
      <p>{employeedetails.description}</p>
      </div>

    </div>

    </div>
  );
}

export default App;
