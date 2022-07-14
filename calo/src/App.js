import Header  from "./components/Login/Header"
import React from "react"
import Dashboard from "./dashboard"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Signup from './Signup'

function App() {
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
        </Route>
       
      </Switch>
        
     </BrowserRouter>
      
       
     
  );
}

export default App;
