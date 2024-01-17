import React from "react";
import "./showkeeper.css";

//we need the title and the description inside each card
const ShowKeeper = () => {
  return (
    <div className="showKeeper">
      <div className="keeperCard">
        <h1 className="title">
          Title <i class="fa fa-trash deleteIcon" aria-hidden="true"></i>
        </h1>
        <textarea className="descriptionBox" value="Description"></textarea>
      </div>
      <div className="keeperCard">
        <h1 className="title">
          Title <i class="fa fa-trash deleteIcon" aria-hidden="true"></i>
        </h1>
        <textarea className="descriptionBox" value="Description"></textarea>
      </div>
      <div className="keeperCard">
        <h1 className="title">
          Title <i class="fa fa-trash deleteIcon" aria-hidden="true"></i>
        </h1>
        <textarea className="descriptionBox" value="Description"></textarea>
      </div>
      <div className="keeperCard">
        <h1 className="title">
          Title <i class="fa fa-trash deleteIcon" aria-hidden="true"></i>
        </h1>
        <textarea className="descriptionBox" value="Description"></textarea>
      </div>
      
    </div>
  );
};
export default ShowKeeper;
