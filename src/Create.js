import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Create = (props) => {
  const navigate = useNavigate()
  console.log(props.data);


  const [Fname, setFname] = useState("");
  const [FoodType, setFoodType] = useState("");
  const [MaxTime, setMaxTime] = useState("");


  var object = { "Fname": Fname, "FoodType": FoodType, "Maxtime": MaxTime };

  const save = () => {
    localStorage.setItem(Fname, JSON.stringify(object));
    setFname("");
    setFoodType("");
    setMaxTime("");
    navigate("/")
  };
  const clear = () => {
    localStorage.clear();
  };
  return (
    <div>
      <div>
        <div>Food Name</div>
        <input
          type="text"
          placeholder="Food Name"
          value={Fname}
          onChange={(e) => {
            setFname(e.target.value);
          }}
        />
        <br />
        <br />
        <div>Food Type</div>
        <input
          type="text"
          placeholder="Food Type"
          value={FoodType}
          onChange={(e) => {
            setFoodType(e.target.value);
          }}
        />
        <br />
        <br />
        <div>Max delivery time</div>
        <input
          type="text"
          placeholder="Max delivery time"
          value={MaxTime}
          onChange={(e) => {
            setMaxTime(e.target.value);
          }}
        />
        <br />
        <br />

        
        <button onClick={save} className="button">save</button>
        <button onClick={clear} className="button">clear</button>
        <br />
        <br />
        <div></div>
      </div>
    </div>
  );
};
