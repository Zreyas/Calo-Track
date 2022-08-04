import {Link} from 'react-router-dom'
import {Component} from 'react'
import React from 'react'
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from "react";
import push from './exercise png/push-up.png';
import bic from './exercise png/bicycle.png';
import run from './exercise png/running.png';
import jump from './exercise png/jump.png';
import crunch from './exercise png/crunch.png';
import swim from './exercise png/swimming.png';
import SearchIcon from '@mui/icons-material/Search';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import FoodData from './foodname.json';





var p1="";
var p2="";
var p3="";

var ex1="";
var ex2="";
var ex3="";
var tx1="";
var tx2="";
var tx3="";


var pcal=0;
var pp=0;
var pc=0;
var pf=0;
var fdata={
    carbo: 0,
    prot: 0,
    fats: 0,
    cal: 0,
    calv: 0,
    e1:"",
    e2:"",
    e3:"",
    t1:"",
    t2:"",
    t3:"",
    p1:"",
    p2:"",
    p3:""
};

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
        cal: 0,
        calv:0,
        e1:"",
        e2:"",
        e3:"",
        t1:"",
        t2:"",
        t3:"",
        p1:"",
        p2:"",
        p3:""

     });

   {/*  useEffect(() => {
        const url = "http://localhost:8083/food";
  
        const fetchData = async () => {
            try {
                const response = await fetch(url);
               
  
                const json = await response.json();
                
  
               console.log("res ",json);
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
    }, []);  */}


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

    let deleteItem= async key =>{
        const allItems = items;
       allItems.splice(key,1);
       setitems(allItems);
    };
 
    //foodtrack
    const foodsub = async (q,foodn) => {
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

   //.then(data => console.log(data.json()))
   //.then()
   .then(function(response) {
    return response.json();
  })

  .then(function(data) {
    //var fd = JSON.parse(data);
    console.log("json",data);
    let carbo=fdata.carbo;
    let prot=fdata.prot;
    let fats=fdata.fats;
    let cal=fdata.cal;
    let calv=fdata.calv;
    ex1=data.e1;
    ex2=data.e2;
    ex3=data.e3;
    tx1=data.t1;
    tx2=data.t2;
    tx3=data.t3;
    p1=data.p1;
    p2=data.p2;
    p3=data.p3;
    console.log("calorie=",calv);
    console.log("fcal=",fdata.calv,fdata.cal,fdata.carbo,fdata.fats,fdata.prot);
    fdata={
        carbo:(carbo+Math.round((data.carbo*4*100)/2000))*q,
        prot:(prot+Math.round((data.prot*4*100)/2000))*q,
        fats:(fats+Math.round((data.fats*9*100)/2000))*q,
        cal:(cal+Math.round((data.cal/2000) * 100))*q,
        calv:(calv+data.cal)*q,
        e1:"",
        e2:"",
        e3:"",
        t1:"",
        t2:"",
        t3:""

    }
    //console.log(data.e1,data.t1);
    //console.log(data.e2,data.t2);
    //console.log(data.e3,data.t3);

    console.log("pic",p1)
    console.log("fcal=",fdata.calv,fdata.cal,fdata.carbo,fdata.fats,fdata.prot);
    setNutri(fdata);
    return fdata;
  })
  
        }
      

        //console.log("ncal=",nutri.calv,nutri.cal,nutri.carbo,nutri.fats,nutri.prot);
        

    console.log(food);

    console.log("1st ex: ",ex1);
    console.log(nutri.e2,nutri.t2);
    console.log(nutri.e3,nutri.t3);

  return(
    
  
<div>

<div className="navbar">

           <a href="http://localhost:3000/"><button className=" btn btn-light logout" >Logout </button></a> 
                
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
            <h5 className="calo-text"> {fdata.calv}cal </h5>

            <CircularProgressbar value={nutri.cal} text={`${nutri.cal}%`} styles={buildStyles({
              textColor: "red",
              pathColor: "red",
              
            })} />;
          </div>
    </div>
    <div className="maincontent">
      <div className="todaysfoodtext"> 
          <h1>Add Todays Food</h1>
      </div>  


   
      <form  onSubmit={storeItems}>
      <div className='todaysfoodsearch'>
          <input name="food" type="text" value={input}  onChange={handleChange}  placeholder='Enter Items'/>
      
          <div className='SearchIcon'>
              <SearchIcon />
          </div>
          <div className='CameraIcon'>
               <PhotoCameraIcon />
          </div>
      </div>


      <div className="quantity">
         <input type="number" name="quantity" placeholder='Quantity' /> 
      </div>
      <div>
         
          <button className='add btn btn-basic' type='submit'><h4>Add</h4></button>
      </div>
      
      </form>


      
     

      <div className="foodconsumedbox">
          <h7>Food consumed</h7>
          <ul>
              {
              items.map((data, index) => (
                    <li key={index}>
                       {data}{" x"}{q.value}<i className="fa-solid fa-trash" onClick={() => deleteItem(index)}></i>
                    </li>
              ))}
         </ul>         


                
   
      <div className="carbohydrates">
          <CircularProgressbar value={nutri.carbo} text={`${nutri.carbo}%`}      styles={buildStyles({
              textColor: "white",
              pathColor: "white",
              trailColor: '#800000'
            })} />
          <h4>carbohydrates</h4>
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


    {/*exercise*/}

            
      <div className='exercise text-center align-items-center'>
     
        <h5>Suggested exercise Just for You</h5>
        <div  className='ex1'>
            <img id="object1" src={p1}  alt="pic"/>
            <h3  className='exnm'>{ex1}</h3>
            <h3  className='extm'>{tx1} min</h3>
        </div>

        <div className='ex2'>
        <img id="object2" src={p2} alt="pic"/>
            <h3 className='exnm2'>{ex2}</h3>
            <h3 className='extm2'>{tx2} min</h3>
        </div>

        <div className='ex3'>
        <img id="object3" src={p3}  alt="pic"/>
            <h3 className='exnm3'>{ex3}</h3>
            <h3 className='extm3'>{tx3} min</h3>
        </div>
      
      
      </div> 

    

            
  </div>



  </div>
        <div className='footer'>
          
            <div className='tname'>
            <h4>
            Designed & developed by Team-8
            </h4>
            <h4>
              R.Sreyas
            </h4>
            <h4>
              Rosmi Johnson
            </h4>
            <h4>
              Tania Manoj
            </h4>
            <h4>
              Sana TA
            </h4>
            </div>
           

        </div>

  </div>  
  
  );

}

export default Dashboard;