// import logo from './logo.svg';
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Wordtext from "./Components/Wordtext";
import React,{useState} from 'react'
import Alert from "./Components/Alert";

// import React from "react";

// import {
//   BrowserRouter as Router,
//   // Routes,
//   Routes,
//   Route,
//   // Link
//   // useRouteMatch,
//   // useParams
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null);
  
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#0c0c3d'
      document.title="TextUtils-dark Mode"

      // setInterval(() => {
      //   document.title="Install this App"
      // }, 1000);
      // setInterval(() => {
      //   document.title="Amazing app"
      // }, 1500);
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
    }
  }
  // const [mode, setmode] = useState({
  //   backgroundColor:'light',
  //   color:'black'
  // })
  
  // const lightmode=()=>{
  //   setmode({
  //     backgroundColor:'white',
  //     color:'black',
  //   })
  //   document.body.style.backgroundColor='white'
  // }
  // const darkmode=()=>{
  //   setmode({
  //     backgroundColor:'black',
  //     color:'white'
  //   })
  //   document.body.style.backgroundColor='grey'
  // }
  // const redmode=()=>{
  //   setmode({
  //     backgroundColor:'red',
  //     color:'white'
  //   })
  //   document.body.style.backgroundColor='orange'
  // }
  // const yellowmode=()=>{
  //   setmode({
  //     backgroundColor:'yellow',
  //     color:'black'
  //   })
  //   document.body.style.backgroundColor='yellow'
  // }
  // const greenmode=()=>{
  //   setmode({
  //     backgroundColor:'green',
  //     color:'white'
  //   })
  //   document.body.style.backgroundColor='#0b966d'
  // }

  return (
    <>
      {/* <Router> */}

      <Navbar title="TextUtils2" about="About" mode={mode} togglemode={togglemode} /*greenmode={greenmode} yellowmode={yellowmode} redmode={redmode} darkmode={darkmode} lightmode={lightmode} *//>
      {/* <Navbar /> */}
        <Alert alert={alert}/>
      <div className="container my-3" >
      {/* <Routes>
          <Route exact path="/About" element={<About to="/About"/>}>
          </Route>
           
          <Route exact path="/" element={<Wordtext heading="" to="/" showalert={showalert} title="Write your text below to convert"   mode={mode}  />} >
          </Route> 
        </Routes> */}

        <Wordtext showalert={showalert} title="Write your text below to convert"   mode={mode}  />
       {/* <About /> */}
     
      </div>
      
      {/* </Router> */}
    </>
  );
}

export default App;
