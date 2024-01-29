import React from "react";
import "./showkeeper.css";

//we need the title and the description inside each card
const ShowKeeper = ({ keeperList }) => {
  return (
    <div className="showKeeper">
      {keeperList.map((keeper)=>(
        <div className="keeperCard" key={keeper._id}>

        <h1 className="title">
          {keeper.title} <i class="fa fa-trash deleteIcon" aria-hidden="true"></i>
        </h1>
        <textarea className="descriptionBox" value={keeper.description}></textarea>
      </div>

      ))}
     
      
    </div>
  );
};
export default ShowKeeper;
