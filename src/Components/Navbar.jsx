import React from 'react';
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  header: {
    backgroundColor: '#563919',
    border: 'none'
  },
  spacing: {
    paddingLeft: 20,
    color: 'white',
    fontSize: '20px',
    alignItems: 'right',
    textDecoration: 'none',
  }
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar >
        <NavLink to="/" className={classes.spacing}> Restaurant Menu</NavLink>
        <NavLink to="itemlist" className={classes.spacing}> Items List</NavLink>
        <NavLink to="additem" className={classes.spacing}> Add Item</NavLink>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;