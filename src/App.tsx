import React, {useEffect} from 'react';
import './App.css';
import {db} from "./firebase";
import {doc,setDoc} from 'firebase/firestore'
import {HashRouter, Route, Routes} from "react-router-dom";
import Profile from "./components/Profile";
import Works from "./components/Works";
import Help from "./components/Help";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

function App() {
  useEffect(()=>{
    let dataDocumentReference = doc(db,"Admin","1");
    setDoc(dataDocumentReference, {name: 'kaif ibn zaman'});
  },[])
  return (
      <HashRouter>
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="works" element={<Works />} />
          <Route path="help" element={<Help />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
  );
}

export default App;
