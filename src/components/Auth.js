import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { FormGroup, Label, StyledInput, StyledButton } from "./Forms";
import { LOGIN_REQUEST } from '../redux/types';
import { Formik } from 'formik';
import * as Yup from "yup";
import isAuth from '../useAuthStatus'






const Auth = (props) => {


  const dispatch = useDispatch()
  const handleLogin = (values) => {    
    dispatch({ type: LOGIN_REQUEST, payload: values })
    props.history.push('/')
    }

    
    if (isAuth) props.history.push('/')



  return (
    <>
    <Container>
      <h1>Simple Flight Check</h1>
      <Formik
       initialValues={{ email: '', password: '' }}
      
      onSubmit={(values, { setSubmitting }) => {

          handleLogin(values)
          console.log("Logging in", values.email, values.password);
          setSubmitting(false);
        
      }}

      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Required"),
        password: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - should be 8 chars minimum.")
          .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
          
      })}
     >

{props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;

      return (
        <FormGroup onSubmit={handleSubmit}>
          <Label style={errors.email && touched.email && {color: "#EB1717"}}>Логин:</Label>
           
          <StyledInput 
             type="text"
             name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
             style={errors.email && touched.email && {border: "1px solid #EB1717"}}
           />
           {errors.email && touched.email ? <InputFeedback>{errors.email}</InputFeedback>
           :<InputFeedback></InputFeedback>}
          <Label style={errors.password && touched.password && {color: "#EB1717"}}>Пароль:</Label>
           <StyledInput 
             name="password"
             type="password"
             value={values.password}
             onChange={handleChange}
             onBlur={handleBlur}
             style={errors.password && touched.password && {border: "1px solid #EB1717"}}

           />
           {errors.password && touched.password ? <InputFeedback>{errors.password}</InputFeedback> 
           :<InputFeedback></InputFeedback>}
           <StyledButton type="submit" disabled={isSubmitting}>
             Войти
           </StyledButton>
         </FormGroup>)
       }}
     </Formik>  
      
    </Container>
    </>
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

const InputFeedback = styled.div`

width: 345px;
height: 13px;
  color: red;
  margin-top: .25rem;
  font-weight: 300;
font-size: 12px;
line-height: 14px;
color: #EB1717;
` 
  
