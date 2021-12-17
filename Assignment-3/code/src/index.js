import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const employee={
  name:"Satheesh",
  id:40106,
  Appointment:"9:00(24-05-2016)",
  Email:"satish9bollineni@gmail.com",
  phone:"+919704593317",
  status:'In Progress',
  Door:'Mark',
  Time:"10:30(25-05-2016)",
  itemname:"Boltart Bossebessen",
  description:"Get ready for treatment and it will reduce the pain"

}

ReactDOM.render(
  <React.StrictMode>
    <App emp={employee} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
