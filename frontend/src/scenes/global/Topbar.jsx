import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import ReactModal from 'react-modal';

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [auth, setAuth] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
 
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
    axios.get('http://localhost:8081/logout')
      .then(res => {
        if (res.data.Status === "Success") {
          // window.location.reload(true);
          navigate('/')
        } else {
          alert("error")
        }

      }).catch(err => console.log(err))
    }

  return (
    <>
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="10px"
        width="80%"
        height="7vh"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
       <h1>
       <Link to="/form">
       <IconButton>
          <SettingsOutlinedIcon />
        </IconButton></Link>
       </h1>
        <div>
      <h1 > <IconButton onClick={setIsOpen}>
          <PersonOutlinedIcon  />
        </IconButton></h1>
      <ReactModal
        isOpen={isOpen}
        contentLabel="Example Modal"
        onRequestClose={() => setIsOpen(false)}
        className="custom-dialog"
      >
       <div style={{ backgroundColor: 'grey'}}  className="custom-dialog">
       {
  auth ?
    <div className='welcome '>
      <h3 className='text-dark mx-4'> {name}</h3><br/>
      <span><button className='btn btn-danger logout' onClick={handleLogout}>Logout</button></span>
    </div>
    :
    <div>
      <h3>{message}</h3>
      <h3>Login Now</h3>
      <Link to="/" className='btn btn-primary  '>Login</Link>
    </div>
}
    </div>
      </ReactModal>
    </div>
        {/* <div className="mx-10 mt-16 flex w-full justify-start">
            <label
              htmlFor="my-modal-2"
              className="mr-2 mt-10 rounded-md bg-green-900 px-2 py-2 text-xs text-white "
            >
               <IconButton 
                 htmlFor="my-modal-2"
                 className="mr-2 mt-10 rounded-md bg-green-900 px-2 py-2 text-xs text-white "
               >
          <PersonOutlinedIcon onClick={alert("ok")} />
        </IconButton>
            </label>
      </div> */}
      </Box>
    </Box>

<div>
{/* balance info */}
<div className="modal bg-transparent ">
  <div className="relative">
    <label
      htmlFor="my-modal-2"
      className="btn-sm btn-circle btn absolute right-2 top-2"
    ></label>
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
    </div>
    </div></div>
    </>
  );
};



export default Topbar;
