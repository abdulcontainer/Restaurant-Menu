import React, { useState, useEffect } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button, makeStyles } from '@material-ui/core';
import { userLogin } from '../service/api';
import { useHistory } from 'react-router-dom';
import EventEmitter from "reactjs-eventemitter";

const initialValue = {
  email: "",
  password: "",
}

const useStyle = makeStyles({
  textColor: {
    color: 'white',
  }
})

const Login = () => {

  const classes = useStyle();

  const [user, setUser] = useState(initialValue);
  const { email, password } = user;

  const history = useHistory();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const login = async () => {
    const data = await userLogin(user);
    if (data.length == 0)
      alert("User Not Found");
    else if (data.length > 0 && data[0].email == "admin@admin.com") {
      localStorage.setItem("role", "admin");
      EventEmitter.dispatch('adminLogin', { name: "admin" })
      history.push('/allitems');
    }
    else {
      localStorage.setItem("role", "user");
      EventEmitter.dispatch('adminLogin', { name: "user" })
      history.push('/allitems');
    }
  }

  const logout = () => {
    localStorage.removeItem("role");
    setIsLogin(false);
    EventEmitter.dispatch('adminLogin', { name: "" })
  }

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("role"))
      setIsLogin(true)
    else
      setIsLogin(false)
  }, [])

  if (isLogin) {
    return (
      <Container maxWidth="sm" className={classes.textColor}>
        <Box my={5}>

          <Button variant="contained" onClick={() => logout()} color="primary" align="center">Logout</Button>
        </Box>
      </Container>
    )
  }

  return (
    <Container maxWidth="sm" className={classes.textColor}>
      <Box my={5}>
        <Typography variant="h5" align="center" color="white">Please Login</Typography>
        <FormGroup >
          <FormControl>
            <InputLabel className={classes.textColor}>Email</InputLabel>
            <Input className={classes.textColor} onChange={(e) => onValueChange(e)} name="email" value={email} />
          </FormControl>
          <FormControl>
            <InputLabel className={classes.textColor}>Password</InputLabel>
            <Input className={classes.textColor} onChange={(e) => onValueChange(e)} name="password" value={password} />
          </FormControl>
          <Box my={3}>
            <Button variant="contained" onClick={() => login()} color="primary" align="center">Login</Button>
            <Button onClick={() => history.push("/allItems")} variant="contained" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
          </Box>
        </FormGroup>
        <Typography variant="p" align="center" color="white">Note: Login as admin@admin.com and password admin123 to see Admin Menu</Typography>
      </Box>
    </Container>
  )
}

export default Login;