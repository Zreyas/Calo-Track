import Header  from "./components/Login/Header"
//import React from "react"
import React, { useEffect, useRef } from 'react'
import Dashboard from "./dashboard"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Signup from './Signup'
import lottie from 'lottie-web';



function App() {

  const container = useRef(null)

      useEffect(() => {
        lottie.loadAnimation({
          container: container.current ,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: require('./data.json')
        })
    }, [])

  return (
     <BrowserRouter>
      <Switch>
        
        <Route exact path="/">
          <Header/>
        </Route>
        
        <Route exact path="/Signup">
         
          <Signup/>
          
        </Route>
        
        <Route exact path="/dash">
          <Dashboard/>
          <div className="container1" ref={container}></div>
        </Route>
               
      </Switch>
        
     </BrowserRouter>
     
  );
}

export default App;