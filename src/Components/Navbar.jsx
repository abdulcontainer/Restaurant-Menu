import React, { useState,useEffect } from 'react';
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import { NavLink, useHistory } from 'react-router-dom';
import EventEmitter from "reactjs-eventemitter";


const useStyles = makeStyles({
  header: {
    backgroundColor: '#563919',
    // alignItems: 'right',
    display:"flex",
    justifyContent: 'left',
    border: 'none',
    textTransform:'uppercase'
  },
  spacing: {
    paddingLeft: 20,
    color: 'white',
    fontSize: '20px',
    textDecoration: 'none'
  },
  login:{
    paddingLeft: 20,
    color: 'white',
    fontSize: '20px',
    textDecoration: 'none',
    textAlign:"right"
  }
});

const Navbar = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const [isAdmin, setIsAdmin] = useState(false);
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("role") == "admin") 
    setIsAdmin(true)
    else
    setIsAdmin(false)
    setLogin((localStorage.getItem("role"))?true:false)
  }, [])

  EventEmitter.subscribe('adminLogin', event => {
    if(event.name == "admin"){

      setIsAdmin(true)
    }
    else{

      setIsAdmin(false)
    }

    setLogin((localStorage.getItem("role"))?true:false)
})
const logout =()=>{
  localStorage.removeItem("role");
   setLogin(false)
  }
  return (
    <AppBar position="static">
      {isLogin}
      <Toolbar className={classes.header}>
        <NavLink to="/" className={classes.spacing}> Restaurant Menu</NavLink>
        <NavLink to="allitems" className={classes.spacing}> Items List</NavLink>
        {isAdmin && <NavLink to="additem" className={classes.spacing}> Add Item</NavLink>}
       {(!isLogin && <NavLink to="/login" className={classes.login}> Login</NavLink>)}
       {isLogin && <NavLink to="#" onClick={()=>logout()}  className={classes.login}> logout</NavLink>}
        <NavLink to="/registration" className={classes.login}> Registration</NavLink>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;