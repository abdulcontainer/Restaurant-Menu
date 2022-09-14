import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button, makeStyles } from '@material-ui/core';
import { userRegister } from '../service/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
  name: "",
  email: "",
  password: ""
}

const useStyle = makeStyles({
  textColor: {
    color: 'white',
  }
})

const Registration = () => {

  const classes = useStyle();

  const [user, setUser] = useState(initialValue);
  const { name, email, password } = user;

  const history = useHistory();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const userRegistration = async () => {
    await userRegister(user);
    history.push('/login');
  }

  return (
    <Container maxWidth="sm" className={classes.textColor}>
      <Box my={5}>
        <Typography variant="h5" align="center" color="white">Registration</Typography>
        <FormGroup >
          <FormControl>
            <InputLabel className={classes.textColor}>User Name</InputLabel>
            <Input className={classes.textColor} onChange={(e) => onValueChange(e)} name="name" value={name} />
          </FormControl>
          <FormControl>
            <InputLabel className={classes.textColor}>Email</InputLabel>
            <Input className={classes.textColor} onChange={(e) => onValueChange(e)} name="email" value={email} />
          </FormControl>
          <FormControl>
            <InputLabel className={classes.textColor}>Password</InputLabel>
            <Input className={classes.textColor} onChange={(e) => onValueChange(e)} name="password" value={password} />
          </FormControl>
          <Box my={3}>
            <Button variant="contained" onClick={() => userRegistration()} color="primary" align="center">Login</Button>
            <Button onClick={() => history.push("/allItems")} variant="contained" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
          </Box>
        </FormGroup>
        <Typography variant="p" align="center" color="white">Note: Login as admin@admin.com and password admin123 to see Admin Menu</Typography>
      </Box>
    </Container>
  )
}

export default Registration;