import {Link} from 'react-router-dom'
import {Component} from 'react'
import React from 'react'
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from "react";


var pcal=0;
var pp=0;
var pc=0;
var pf=0;

let q=0;
let foodn='';



//carbo*4 g ,fats*9



const Dashboard = () => {
    //fetch from 8086 carbs,prot....
    //const [, setAdvice] = useState("");
    const [nutri, setNutri] = useState({
        carbo: 0,
        prot: 0,
        fats: 0,
        cal: 0
        
     });

     useEffect(() => {
        const url = "http://localhost:8086/";
  
        const fetchData = async () => {
            try {
                const response = await fetch(url);
               
  
                const json = await response.json();
                
  
               
               console.log(json.carbo,json.cal,json.fats,json.prot);
                var data={
                    carbo:Math.round((json.carbo*4*100)/2000),
                    prot:Math.round((json.prot*9*100)/2000),
                    fats:Math.round((json.fats*9*100)/2000),
                    cal:Math.round((json.cal/2000) * 100)
                };
                setNutri(data);
                console.log(data.carbo,data.cal,data.fats,data.prot);
                
                
            } catch (error) {
                console.log("error", error);
            }
        };
  
        fetchData();
    }, []);


  //fetch data from 8081
  const [advice, setAdvice] = useState("");

  useEffect(() => {
      const url = "http://localhost:8081/";

      const fetchData = async () => {
          try {
              const response = await fetch(url);
             

              const json = await response.json();
              

              //console.log(json);
              setAdvice(json);
              
          } catch (error) {
              console.log("error", error);
          }
      };

      fetchData();
  }, []);

  //todo model
  let [input, setip] = useState('');
  let [items, setitems] = useState([]);
  let[food,setfood]=useState('');
  //dropdown adding


  //let statefunc = {
    //input: "",
    //items: []
//};


   let handleChange = event => {
       
            setip(event.target.value);
           //setfood(event.target.value);

    };
   let storeItems = event => {
        event.preventDefault();
        //const {input} = statefunc;
        console.log('store');
        //const allItems = this.statefunc.items;
        //allItems.push(input);
        //this.setState({
             //items: allItems
        
             setitems([...items, input]);
             setip("");
        //});

        //foodtrack
        setfood(...food,input);
        
        q=event.target.elements.quantity;
        foodn=event.target.elements.food;
        console.log(q.value);
        console.log(foodn.value);

        foodsub(q.value,foodn.value);
        //sending 
       

    };

    let deleteItem= key =>{
        
       const allItems = items;
       allItems.splice(key,1);
       //this.setState({
        setitems(allItems);
       //})
     
    };
 
    //foodtrack
    const foodsub = (q,foodn) => {
         console.log("food is",foodn);
         var item={
            foodn: foodn,
            q:q
        };
        return fetch('http://localhost:8083/food', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify({ item })
 })
   .then(data => data.json())

        }



        console.log("cal=",nutri.cal);
    console.log(food);
   // console.log(items);
//console.log(advice);
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

            <CircularProgressbar value={nutri.cal} text={`${nutri.cal}%`}      styles={buildStyles({
              textColor: "red",
              pathColor: "red",
              
            })} />;
          </div>
    </div>
    <div className="maincontent">
      <div className="todaysfoodtext"> 
          <h1>Add Todays Food</h1>
      </div>  


   
      <form  onSubmit={storeItems}  className='todaysfoodsearch'>
      <input name="food" type="text" value={input}  onChange={handleChange}  placeholder='Enter Items'/>
      <div className="quantity">
      <input type="text" name="quantity" placeholder='quantity'/>
          
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



   
      <div className="carbohydrates">
          <CircularProgressbar value={nutri.carbo} text={`${nutri.carbo}%`}      styles={buildStyles({
              textColor: "white",
              pathColor: "white",
              trailColor: '#800000'
            })} />
          <h4>carbohydarates</h4>
      </div>  

      <div className="protiens">
          <CircularProgressbar value={nutri.prot} text={`${nutri.prot}%`}      styles={buildStyles({
              textColor: "white",
              pathColor: "white",
              trailColor: '#800000'
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
          <CircularProgressbar value={nutri.fats} text={`${nutri.fats}%`}      styles={buildStyles({
              textColor: "white",
              pathColor: "white",
              trailColor: '#800000'
             
            })} />
          <h4>fats</h4>
      </div>     
            
  </div>



  </div>
  </div>  
  
  );

}

export default Dashboard;





