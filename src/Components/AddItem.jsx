import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button, makeStyles } from '@material-ui/core';
import { addItem } from '../service/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
  name: "",
  price: "",
}

const useStyle = makeStyles({
  textColor: {
    color: 'white',
  }
})

const AddItem = () => {

  const classes = useStyle();

  const [item, setItem] = useState(initialValue);
  const { name, price } = item;

  const history = useHistory();

  const onValueChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  }

  const addItemDetails = async () => {
    await addItem(item);
    history.push('/itemlist');
  }

  return (
    <Container maxWidth="sm" className={classes.textColor}>
      <Box my={5}>
        <Typography variant="h5" align="center" color="white">Add Item Details</Typography>
        <FormGroup >
          <FormControl>
            <InputLabel className={classes.textColor}>Item Name</InputLabel>
            <Input className={classes.textColor} onChange={(e) => onValueChange(e)} name="name" value={name} />
          </FormControl>
          <FormControl>
            <InputLabel className={classes.textColor}>Item Price</InputLabel>
            <Input className={classes.textColor} onChange={(e) => onValueChange(e)} name="price" value={price} />
          </FormControl>
          <Box my={3}>
            <Button variant="contained" onClick={() => addItemDetails()} color="primary" align="center">Add Item</Button>
            <Button onClick={() => history.push("/itemlist")} variant="contained" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
          </Box>
        </FormGroup>
      </Box>
    </Container>
  )
}


export default AddItem;