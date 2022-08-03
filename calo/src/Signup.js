import React from 'react'
import pic from './login.png'
import {Link} from 'react-router-dom'
import {Component} from 'react'


let fname="";
let usern="";
let password="";
let tw="";
let wt="";


class Signup extends Component {
  constructor()
  {
    super();
    this.state ={
      user: "",
      pass:""
    };
  }
 


//const Header = () => {
  //return (
   
  render () {
    return (
    <div className="bg container-fluid ">
        <div className="log">
      
        
              
                    
              
                    <form className='sform pl-40 text-center align-items-center ' action='http://localhost:8089/auth' method='POST'>
                    <h1 className='pt-0'>Sign Up</h1>
                          <label className='pt-4'> Full Name </label> <br></br>
                          <input type='text'className='form-rounded p-1' name="fname" placeholder='  Full Name' onChange={this.onNameChange}/>
                          <br></br>   <br></br>
                          <label className='pt-1'> Username </label> <br></br>
                          <input type='text'className='form-rounded p-1' name="user" placeholder='  Username' onChange={this.onUsrChange}/>
                          <br></br>   <br></br>
                          <label className='pt-1'> Current Weight </label> <br></br>
                          <input type='text'className='form-rounded p-1' name="wt" placeholder='  Current weight' onChange={this.onWtChange}/>
                          <br></br>   <br></br>
                          <label className='pt-1'> Target Weight </label> <br></br>
                          <input type='text'className='form-rounded p-1' name="tt" placeholder='  Target weight' onChange={this.onTwChange}/>
                          <br></br>   <br></br>
                          <label> Password </label>   <br></br>
                          <input type='password' className='form-rounded p-1' name="pass" placeholder='  password' onChange={this.onPassChange}/>
                    
                          <br></br>    <br></br>         
                  <button className='btn btn-basic form-rounded2'>Sign Up </button>
                  
                     
            
  </form> 
               
                 
                   
      
             
        </div>
    </div>
    );
  }
}
  //)
//}

export default Signup