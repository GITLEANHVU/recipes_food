import React, { useContext } from 'react';
import './login.css'
import CreateAccount from './CreateAccount';
import Login from './Login';
import { AuthContext } from '../../Contexts/AuthContext';

const Index = () => {
  const [auth, setAuth] = useContext(AuthContext);
  return (
    <React.Fragment>
      {/* <Login />
    <CreateAccount /> */}
   
      </React.Fragment>
  );
}

export default Index;
