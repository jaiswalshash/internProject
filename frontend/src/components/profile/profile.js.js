import Home from './home/home.js';
import SignUp from './signUp/signUp.js';
import SignIn from './signIn/signIn.js';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function Acc () {
  const [user, setLoginUser] = useState({});
  return (
     <BrowserRouter>
     <Routes className="App">
       <Route path="/products" element={
          user && user._id ? <Home name={user.name} setLoginUser={setLoginUser}/> : <SignIn setLoginUser={setLoginUser}/>
       } />
       <Route path="/signUp" element={<SignUp />} />
       <Route path="/signIn" element={<SignIn setLoginUser={setLoginUser}/>} />
     </Routes>
   </BrowserRouter>
  );
}

export default Acc;
