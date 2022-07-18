import React from 'react'
import pic from './login.png'
import {Link} from 'react-router-dom'
import {Component} from 'react'




class Header extends Component {
  constructor()
  {
    super();
    this.state ={
      user: "",
      pass:""
    };
  }
  onNameChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.value);
    
  };

//const Header = () => {
  //return (
  render () {
    return (
    <div className="bg container-fluid ">
        <div >
      
  
              
                    
              
                    <form className=' pl-40 text-center align-items-center' action='http://localhost:8080/authsn' method='POST'>
                    <h1 className='pt-3'>Login</h1>
                          <label className='pt-4 '> Username </label> <br></br>
                          <input type='text'className='form-rounded p-1' name="user" placeholder='  username' onChange={this.onNameChange}/>
                          <br></br>   <br></br>
                          <label> Password </label>   <br></br>
                          <input type='password' className='form-rounded p-1' name="pass" placeholder='  password' onChange={this.onNameChange}/>
                    
                          <br></br>    <br></br>         
                  <button className='btn btn-basic form-rounded2' type='submit' value='Login'>Login </button><br/>
                  <label>or</label>
                  <br/>   
               <Link to ="/Signup">
               <button  className='btn btn-basic form-rounded2'>Sign Up </button>
               </Link>
  </form> 
               
                 
                   
      
             
        </div>
    </div>
    );
  }
}
  //)
//}

export default Header