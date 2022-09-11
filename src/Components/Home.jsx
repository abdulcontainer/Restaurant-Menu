import React from 'react';
import { Container, Typography, Box, makeStyles, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyle = makeStyles({
  heading: {
    color: 'white',
    textAlign: 'center',
    fontSize: '80px'
  },
  buttons: {
    textAlign:'center',
    paddingTop: '60px'
  },
  btn:{
    background:'#CD927E',
    fontSize:'24px',
    padding: '10px 50px',
    borderRadius:'20px'
  }
})

const Home = () => {
  const classes = useStyle();

  const history = useHistory();
  
  return (
    <Container maxWidth="lg">
      <Box my={5}>
        <Typography className={classes.heading}>Restaurant Menu</Typography>
        <Box className={classes.buttons}>
          <Button className={classes.btn} variant="contained" onClick={() => history.push("/itemlist")}>Item List</Button>
          <Button className={classes.btn} variant="contained" onClick={() => history.push("/additem")} style={{ margin: '0px 30px' }}>Add Items</Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Home;