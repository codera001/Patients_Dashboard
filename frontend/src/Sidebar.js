import React, { useState, useEffect } from 'react';
import hospitalLogo from './assets/hospitalLogo.png';
import './darkmode.scss';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 //import { faEnvelope, faHome, faUser, faFile, faSuitcase } from '@fortawesome/free-solid-svg-icons'
// import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './index.css';

function Sidebar() {
    return (

    
            <div className="container-fluid sidenav  bg-dark ">
                <a className="text-decoration-none d-flex align-item-center ms-3 mt-2">
                    <img src={hospitalLogo} alt='hospitalLogo' className='logo'></img>
                    <span className="ms-2 fs-2 text-white"><strong>MedVik</strong></span>
                </a>
                <hr className="text-white" />
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item text-dark fs-4">
                        <a href="#" className="nav-link text-white fs-5 my-1" aria-current="page">
                            <i className="bi bi-speedometer2">Dashboard</i>
                        </a>
                    </li>
                    <li className="nav-item text-dark fs-4">
                        <a href="#" className="nav-link text-white fs-5 my-1" aria-current="page">
                            <i className="bi bi-house">Home</i>
                        </a>
                    </li>
                    <li className="nav-item text-dark fs-4">
                        <a href="#" className="nav-link text-white fs-5 my-1" aria-current="page">
                            <i className="bi bi-grid">Products</i>

                        </a>
                    </li>
                    <li className="nav-item text-dark fs-4">
                        <a href="#" className="nav-link text-white fs-5" aria-current="page">
                            <i className="bi bi-people">Doctors</i>
                        </a>
                    </li>
                </ul>
                <hr className='below-line text-white' />
            </div>
          
        




    );

}
export default Sidebar






