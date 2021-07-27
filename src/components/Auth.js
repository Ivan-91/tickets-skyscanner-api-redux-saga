import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { login } from '../redux/auth';
import { FormGroup, Label, StyledInput, StyledButton, Message } from "./Forms";
import { Redirect } from 'react-router-dom';





const Auth = (props) => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector(state => state.auth);
  const handleClick = (e) => {
    e.preventDefault()
    console.log('he')
    dispatch(login())
        
          props.history.push("/");
          window.location.reload();
        
   
}

if (isLoggedIn) {
  return <Redirect to="/" />;
}

  return (
    <Container>
      <h1>Simple Flight Check</h1>
      <FormGroup onSubmit={handleClick}>
        <Label>Логин:</Label>
        <StyledInput 
          value={email}
          onChange={e=>setemail(e.target.value)}
          />
        <Label>Пароль:</Label>
        <StyledInput 
          value={password}
          onChange={(e)=>setpassword(e.target.value)}
          />
        <StyledButton type='submit' >Войти</StyledButton>

      </FormGroup>
    </Container>
  )
}

export default Auth

const Container = styled.div`
position: absolute;
width: 410px;
height: 338px;
margin-top: 308px;
h1{
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 19px;
  margin-top: 53px;
};
align-items: center;
display: flex;
flex-direction: column;
color: #424242;

background: #FFFFFF;
/* Card */

box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
border-radius: 20px;
`