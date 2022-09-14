import React from 'react';
import {Container,makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  footer: {
    position : 'fixed',
    bottom: '0',
    maxWidth: '100%',
    textAlign:'center',
    background:'#191919',
    padding: '16px',
    color:'white'
  }
})

const Footer = () => {
  const classes = useStyle();
  return (
    <Container className={classes.footer}>
      <b> &copy; Copyright SOFTVERSUM-2022 </b>
    </Container>
  )
}

export default Footer;