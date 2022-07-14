import {Link} from 'react-router-dom'
import {Component} from 'react'
import React from 'react'
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const percentage=70;
class Dashboard extends Component{
    render () {
        return (
  
<div>

<div className="navbar">
<FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
            <button className="btn btn-light logout">
                Logout </button>
</div>

<div className="sidebar tex-center align-items-center">
    <h2>Hello!</h2>
    <h1  className="name px-5 py-8">Name</h1>
    
    <div className="roundrec">
    <h6> Current Weight - 70kg </h6>
    <h6> Target Weight - 60kg</h6>
    </div>
    
    <div className="cald">
        <h5> Todays Calorie </h5>
         <h5 className="calo-text"> 1390 cal </h5>

        <CircularProgressbar value={percentage} text={`${percentage}%`}      styles={buildStyles({
          textColor: "red",
          pathColor: "red",
          
        })} />;
        </div>
    </div>

  </div>
  


);
}
}
export default Dashboard
