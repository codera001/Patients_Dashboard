import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './darkmode.css';
import Track  from "react-tracking";
// import 'bootstrap/dist/css/bootstarap.min.css'
// import 'bootstrap-icons/font/bootstrap-icons.css'
function Home() {
    axios('/path/to/user/endpoint', {
        method: 'get'
       })
       .then(response => {
         this.setState({name: response.data.name})
       })
       .catch(err => {
         console.log(err);
       })
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="bg-success col-auto  min-vh-100">
                    <a className="text-decoration-none d-flex align-item-center ms-3 mt-2">
                        <span className="ms-1 fs-4 text-dark"><strong>MedVik</strong></span>
                    </a>
                    <hr className="text-secondary" />
                    <ul className="nav nav-pills flex-column">
                        <li className="nav-item text-white fs-4">
                            <a href="#" className="nav-link text-white fs-5 my-1" aria-current="page">
                                <i className="bi bi-speedometer2">Dashboard</i>
                            </a>
                        </li>
                        <li className="nav-item text-white fs-4">
                            <a href="#" className="nav-link text-white fs-5 my-1" aria-current="page">
                                <i className="bi bi-house">Home</i>
                            </a>
                        </li>
                        <li className="nav-item text-white fs-4">
                            <a href="#" className="nav-link text-white fs-5 my-1" aria-current="page">
                                <i className="bi bi-grid">Products</i>

                            </a>
                        </li>
                        <li className="nav-item text-white fs-4">
                            <a href="#" className="nav-link text-white fs-5" aria-current="page">
                                <i className="bi bi-people">Doctors</i>

                            </a>
                        </li>
                    </ul>
                </div>
                <div className='col d-flex justify-content-center '>
                    <div className={`App ${theme}`} >
                        <button onClick={toggleTheme} className>Toggle Theme</button>
                        <h1>Welcome  <Track name={this.state.name} />to Medvik</h1>
                    </div>
                </div>
            </div>

        </div>


    );




}
export default Home