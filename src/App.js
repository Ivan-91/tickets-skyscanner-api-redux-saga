import React from 'react'
import { Route, Router, Switch } from 'react-router';


import LoginPage from './components/LoginPage';
import styled from 'styled-components';
import TicketsPage from './components/TicketsPage';
import {history} from './helpers/history'
import { useSelector } from 'react-redux';




const App = () => {
  const user = useSelector(state => state.auth)
  return (
    <Router history={history}>
      <Container>
        {/* {user? (
          <TicketsPage/>
        ) : (
          <LoginPage/>
        )
        } */}
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/" component={TicketsPage} />
        </Switch> 
      </Container>
    </Router>
  );
}


const Container = styled.div`
  margin: auto;
  position: absolute;
  top:0;
  left: 0;
  bottom: 0;
  right: 0;
  max-width: 1440px;
  //margin: auto;
  `


export default App
