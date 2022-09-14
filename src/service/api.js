import axios from 'axios';

const url = "http://127.0.0.1:3003/item";

const userUrl = "http://127.0.0.1:3003/user";

const ordersUrl = "http://127.0.0.1:3003/orders";

export const userRegister = async (user1) => {
  const data = await axios.get(`${userUrl}`);
  const user = data.data.filter((item)=>item.email == user1.email)
  if(user.length > 0 ){
    alert("User Already Exist !")
    return ;
  }
  return await axios.post(userUrl, user1);
}

export const userLogin = async (id) => {
  const data = await axios.get(`${userUrl}`);
  const user = data.data.filter((item)=>item.email==id.email && item.password == id.password)
  return user;
}

export const getallItems = async (id) => {
  id = id || '';
  return await axios.get(`${url}/${id}`);
}

export const addItem = async (item) => {
  return await axios.post(url, item);
}

export const editItem = async (id, item) => {
  return await axios.put(`${url}/${id}`, item);
}

export const deleteItem = async (id) => {
  return await axios.delete(`${url}/${id}`);
}

export const orderItem = async (id) => {
  return await axios.post(ordersUrl, id);
}