import React, { useState, useEffect } from 'react';
import Sitebar from './home/Navbar';
import Auth from './auth/Auth'
import WorkoutIndex from './workouts/WorkoutIndex';

function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

//Updating out token
  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken)
    setSessionToken(newToken);
    console.log(newToken);//this is the key that is display in console and in the application dev tool
  }

//Clearing our token on logout
  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

//
const protectedViews = () => {
  return(sessionToken === localStorage.getItem('token') ? <WorkoutIndex token={sessionToken}/> //sessionToken is the correct token in the index 
  : <Auth updateToken={updateToken}/>)
}
  
  return (
    <div>
      <Sitebar clickLogout={clearToken}/>
      {/* <Auth updateToken={updateToken}/> */}
      {protectedViews()}
    </div>
  );
}


export default App;

//File appears to be correct, bug may be something with the token
