import React, { useState, useEffect } from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from "styled-components";
import axios from 'axios';
import { Link } from "react-router-dom";
// import hospitalLogo from './assets/hospitalLogo.png';
// import './darkmode.scss';
import Dropdown from 'react-bootstrap/Dropdown';


const Styles = styled.div`
  .navbar {  }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  
  `;
function NavigationBar() {
  const [auth, setAuth] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')


  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:8081/home')
      .then(res => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.name);
        } else {
          setMessage(res.data.Message)
        }
      })
  }, [])



  const handleLogout = () => {
    axios.get('http://localhost:8081')
      .then(res => {
        if (res.data.Message === "Success") {
          window.location.reload(true);
        } else {
          alert("error")
        }

      }).catch(err => console.log(err))
  }
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Styles className="navigation-bar ">
      <Navbar expand="lg "className='navigation-bar-bar '>
                                  <Dropdown
                          onMouseOut={() => setShowDropdown(false)}
                          onMouseOver={() => setShowDropdown(true)}
                          className="">
                          <Dropdown.Toggle as={Link}><span className="mx-2   text-sm "  > </span></Dropdown.Toggle>
                          <Dropdown.Menu show={showDropdown} variant="dark" className="dropdown-content border-gray-300 bg-slate-400 text-dark   hover:text-dark d-block "  style={{ width: '500px', position:'absolute'}} >
                            <div className="mt-2 mx-2 w-100 hover:bg-white rounded-lg px-2 py-2"><Dropdown.Item  className="d-block"><Link to={`/loginLogs`}>Login Logs</Link></Dropdown.Item></div>
                            <div className="mt-2 mx-2 w-100 hover:bg-white  rounded-lg px-2 py-2"><Dropdown.Item ><Link to={`/logoutLogs`}>Logout Logs</Link></Dropdown.Item></div>
                            <div className="mt-2 mx-2 w-100 hover:bg-white rounded-lg px-2 py-2"><Dropdown.Item ><Link to={`/ResetBalanceLogs`}>Reset Balance Logs</Link></Dropdown.Item></div>
                            <div className="mt-2 mx-2 w-100 hover:bg-white rounded-lg px-2 py-2"><Dropdown.Item ><Link to={`/ChangePasswordLogs`}>Change Password Logs</Link></Dropdown.Item></div>
                            <div className="mt-2 mx-2 w-100 hover:bg-white rounded-lg px-2 py-2"><Dropdown.Item ><Link to={`/logoutUserLogs`}>Logout User Logs</Link></Dropdown.Item></div>

                          </Dropdown.Menu>
                        </Dropdown> 
      
        <Form className="form-center">
          <FormControl type="text" placeholder="Search" className="" />
        </Form>
        <Nav.Item className="user-details">
          {
            auth ?
              <div className='welcome '>
                <h6 className='text-white mx-4'>Welcome! {name}</h6>
                <span><button className='btn btn-danger logout' onClick={handleLogout}>Logout</button></span>
              </div>
              :
              <div>
                <h3>{message}</h3>
                <h3>Login Now</h3>
                <Link to="/login" className='btn btn-primary  '>Login</Link>
              </div>
          }
        </Nav.Item>






        {/* <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>         
          </Nav>
        </Navbar.Collapse> */}
      </Navbar>
    </Styles>
  );
}
export default NavigationBar
