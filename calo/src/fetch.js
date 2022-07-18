import React, { Component, useEffect, useState } from 'react';

const Api = () => {
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


 
   
  
  console.log(advice)
    return(

        <div>
        <h1>
            hello {advice.name}
        </h1>
        </div>
      
    );
  
}

export default Api;