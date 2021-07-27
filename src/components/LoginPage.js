import React from 'react'
import styled from 'styled-components'
import bgImg from '../assets/bg.png'
import Auth from './Auth'

const LoginPage = ({history}) => {
  return (
    <Wrapper>
      <Blur>
      <Auth history={history}/>
      </Blur>
    </Wrapper>
  )
}




const Wrapper = styled.div`
background-image: url(${bgImg});
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//background-position: center;
//background-size: cover;
//background-repeat: no-repeat;
//width: 100%;
height: 100%;



`
const Blur = styled.div`
height: 100%;
background: rgba(255, 255, 255, 0.6);
backdrop-filter: blur(20px);
display: flex;
justify-content: center;


`



export default LoginPage
