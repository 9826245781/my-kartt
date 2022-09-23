import React from 'react';
import './App.css';
import Home from './Home';
import Login from './Login';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import { useEffect } from 'react';
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
  //will only runs once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('User is >>>', authUser);

      if (authUser) {
        //user just login or user is not present
        dispatch({
          type: 'SET_USER',
          user:authUser
    })
      }
      else {
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user:null
        })
      }
    })
},[])

  return (

    <Router>
    
      <div className='app'>
       
      <Routes>
      <Route path="/" element={<Home />} />
        
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      
   
    </Routes>
        
        
        
        
        
      </div>
    </Router>
    
  
  );
}



export default App;
    
// 
    
          
// 
 // <Switch>
        //   <Route path="/login">
        //     <h1>Login Page</h1>
        //   </Route>
        //   <Route path="/checkout">
     
        //     <Checkout/>
        //   </Route>
        //   <Route path="/">
      
        //     <Home/>
        //   </Route>
        // </Switch>