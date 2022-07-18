import {Link} from 'react-router-dom'
import {Component} from 'react'
import React from 'react';
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const percentage=50;
const percent=70;



class Dashboard extends Component{
state = {
    input: "",
    items: []
};
    handleChange = event => {
        this.setState({
            input: event.target.value
        })
    };
    storeItems = event => {
        event.preventDefault();
        const {input} = this.state;
        //const allItems = this.state.items;
        //allItems.push(input);
        this.setState({
             //items: allItems
             items: [...this.state.items, input],
             input: ""
        });
    };

    deleteItem= key =>{
       const allItems = this.state.items;
       allItems.splice(key,1);
       this.setState({
        items:allItems
       })
    };
    render () {
        const {input, items } = this.state
        console.log(items);
        return (
  
<div>

<div className="navbar">
<FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
            <button className="btn btn-light logout">
                Logout </button>
</div>

<div className="sidebar tex-center align-items-center">
    <h2>Hello name!</h2>
    
    <div className="roundrec">
    <h6> Current Weight - 70kg </h6>
    <h6> Target Weight - 60kg</h6>
    </div>
    
    <div className="cald">
        <h5> Todays Calorie </h5>
         <h5 className="calo-text"> 1390 cal </h5>

        <CircularProgressbar value={percent} text={`${percent}%`}      styles={buildStyles({
          textColor: "red",
          pathColor: "red",
          
        })} />
        </div>
  </div>

  <div className="maincontent">
      <div className="todaysfoodtext"> 
        <h1>Add Todays Food</h1>
      </div>  
      <form className="todaysfoodsearch" onSubmit={this.storeItems}>
             <input type="text" value={input} onChange={this.handleChange} placeholder='Enter Items'/>

             
         
      </form>
      <div className="quantity">
      <input type="text" placeholder='quantity'/>
         
      </div>
      <div className="add">
         
          <button>Add</button>
      </div>
      

      <div className="foodconsumedbox">
          <h7>Food consumed</h7>
          <ul>
              {
              items.map((data, index) => (
                    <li key={index}>
                        {data} <i className="fa-solid fa-trash" onClick={() => this.deleteItem(index)}></i>
                    </li>
              ))}
         </ul>
          {/*<div className="food1">
               <h8>Dosa x2</h8>
          </div>
          <div className="food2">
               <h8>Dosa x2</h8>
          </div>
          <div className="food3">
               <h8>Dosa x2</h8>
          </div>
          <div className="food4">
               <h8>Dosa x2</h8>
          </div>*/}
      </div>
      <div className="carbohydrates">
          <CircularProgressbar value={percentage} text={`${percentage}%`}      styles={buildStyles({
              textColor: "white",
              pathColor: "white",
              
            })} />
          <h4>carbohydarates</h4>
      </div>  

      <div className="protiens">
          <CircularProgressbar value={percentage} text={`${percentage}%`}      styles={buildStyles({
              textColor: "white",
              pathColor: "white",
              
            })} />
          <h4>protiens</h4>
      </div>

      {/*<div className="nutrients">
          <CircularProgressbar value={percentage} text={`${percentage}%`}      styles={buildStyles({
              textColor: "white",
              pathColor: "white",
              
            })} />
          <h4>nutrients</h4>
          </div>*/}

      <div className="fats">
          <CircularProgressbar value={percentage} text={`${percentage}%`}      styles={buildStyles({
              textColor: "white",
              pathColor: "white",
              
            })} />
          <h4>fats</h4>
      </div>     

  </div>

  </div>
  


);
}
}
export default Dashboard