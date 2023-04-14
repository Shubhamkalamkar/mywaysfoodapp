import React from "react";
import { Create } from "./Create";
import { Navigate, useNavigate } from "react-router-dom";

export const Home = () => {
  var dataitem
  const navigate = useNavigate()
  const data = [];
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var item = JSON.parse(localStorage.getItem(key));
    data.push(item);
  }
  
  return (
    <div>
      {data.map((keyName, i) => (
        <div key={i} className="show">
          <h3>{keyName.Fname}</h3>
          <h6>{keyName.FoodType}</h6>
          <h6>{keyName.Maxtime}</h6>
          <br/>
        </div>
      ))}
      
    </div>
    
  );
};
