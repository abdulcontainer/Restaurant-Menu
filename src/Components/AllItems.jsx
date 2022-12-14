import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';
import { deleteItem, getallItems, orderItem} from '../service/api';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
  table: {
    width: '50%',
    marginTop: '50px',
  },
  thead: {
    '& > *': {
      color: 'white',
      fontSize: '16px'
    }
  },
  trow: {
    '& > *': {
      fontSize: '16px',
      color: 'white'
    }
  }
})

const AllItems = () => {

  const classes = useStyle();

  const user = localStorage.getItem('role');

  const [item, setItem] = useState([]);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    if(user==="admin")
    setAdmin(1);
    getItem();
  }, [])

  const getItem = async () => {
    const response = await getallItems();
    setItem(response.data);
  }

  const deleteData = async (id) => {
    await deleteItem(id);
    getItem();
  }

  const orderNow = async (id) => {
    alert("Your Oredr is Successfully !");
    await orderItem(id);
    // getItem();
  }

  return (
    <Table align="center" className={classes.table} >
      <TableHead>
        <TableRow className={classes.thead}>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Operations</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          item.map((data) => (
            <TableRow className={classes.trow}>
              <TableCell>{data.id}</TableCell>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.price}</TableCell>
              <TableCell>
              <Button variant="contained" color="static" style={{ margin: '0px 20px 0px 0px' }} onClick={() => orderNow(data.id)}>Order Now</Button>
              {admin &&<>
                <Button variant="contained" color="primary" style={{ margin: '0px 0px' }} component={Link} to={`/edit/${data.id}`}>Edit</Button>
                <Button variant="contained" color="secondary" style={{ margin: '0px 20px' }} onClick={() => deleteData(data.id)}>Delete</Button>
              </>}
              </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  )
}

export default AllItems;
