import {Link} from 'react-router-dom'
import {Component} from 'react'
import React from 'react'
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from "react";

const percentage=70;



const Dashboard = () => {
  //fetch data from 8081
  const [advice, setAdvice] = useState("");

  useEffect(() => {
      const url = "http://localhost:8081/";

      const fetchData = async () => {
          try {
              const response = await fetch(url);
              const json = await response.json();
              console.log(json);
              setAdvice(json);
          } catch (error) {
              console.log("error", error);
          }
      };

      fetchData();
  }, []);


  let [input, setip] = useState('');
  let [items, setitems] = useState([]);
  //dropdown adding


  //let statefunc = {
    //input: "",
    //items: []
//};


   let handleChange = event => {
       
            setip(event.target.value);
      
    };
   let storeItems = event => {
        event.preventDefault();
        //const {input} = statefunc;
        //const allItems = this.statefunc.items;
        //allItems.push(input);
        //this.setState({
             //items: allItems
             setitems([...items, input]);
             setip("");
        //});
    };

    let deleteItem= key =>{
       const allItems = items;
       allItems.splice(key,1);
       //this.setState({
        setitems(allItems);
       //})
    };
 
    
    console.log(items);
console.log(advice);
  return(
    
  
<div>

<div className="navbar">

            <button className="btn btn-light logout">
                Logout </button>
</div>

 <div className="sidebar tex-center align-items-center">
    <h2>Hello!</h2>
    <h1  className="name px-5 py-3">{advice.name}</h1> 
    <div className="roundrec">
      
      <h6> Current Weight - {advice.wt}kg </h6>
      <h6> Target Weight - {advice.twt}kg</h6>
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
    <div className="maincontent">
      <div className="todaysfoodtext"> 
          <h1>Add Todays Food</h1>
      </div>  


     {/* <form className="todaysfoodsearch" onSubmit={storeItems}>
             <input type="text" value={input} onChange={handleChange} placeholder='Enter Items'/>
      </form> */}
      <form  onSubmit={storeItems} className='todaysfoodsearch'>
      <input type="text" value={input}  onChange={handleChange} placeholder='Enter Items'/>
      <div className="quantity">
      <input type="text" placeholder='quantity'/>
          
      </div>
      <div>
         
          <button className='add btn btn-basic' type='submit'>Add</button>
      </div>
      
      </form>


      
      

      <div className="foodconsumedbox">
          <h7>Food consumed</h7>
          <ul>
              {
              items.map((data, index) => (
                    <li key={index}>
                        {data} <i className="fa-solid fa-trash" onClick={() => deleteItem(index)}></i>
                    </li>
              ))}
         </ul>         



    {/*  <div className="todaysfoodsearch">

      <input type='text'className='foodsearchi' name="search" placeholder='search food'/>
      </div>
      <div className="quantity">
          <h3>Quantity</h3>
      </div>
      <div className="add">
          <h3>Add</h3>
      </div>

      <div className="foodconsumedbox">
          <h7>Food consumed</h7>
          <div className="food1">
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
          </div>
              </div> */}
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
  </div>  
  
  );

}

export default Dashboard;





