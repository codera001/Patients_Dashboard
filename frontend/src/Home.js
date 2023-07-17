import React, { useState, useEffect } from 'react';
import axios from 'axios';
import hospitalLogo from './assets/hospitalLogo.png'
// import Sidebar from './Sidebar';
// import Navbar from './Navbar';
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope, faHome, faUser, faFile, faSuitcase } from '@fortawesome/free-solid-svg-icons'
// import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Home(user) {
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
        <>
            <div className='container-fluid home d-flex
             overflow-hidden '>
             <div className='col d-flex justify-content-center '>
                        <div className={`App ${theme}`} >
                            <button onClick={toggleTheme} className="toggle" class="material-symbols-outlined">Toggle Theme</button>
                        </div>
            </div>
            </div>

        </>



    );




}
export default Home