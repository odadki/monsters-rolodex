import React, { useState } from "react";
import "./card.styles.css";

const Card = ({ monster }) => {
  const { id, name, email, website, company } = monster;
  const [studentDetails, setStudentDetails] = useState(false);
  const [moreInfoButton, setMoreInfoButton] = useState(false);

  const showDetails = () => {
    setStudentDetails((current) => !current);
    setMoreInfoButton(!moreInfoButton);
  };

  return (
    <div className="container card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h3 className="monster-name text-center">{name}</h3>
      <button className="show-info-button" onClick={showDetails}>
        {moreInfoButton ? "Show less" : "More info"}
      </button>
      {studentDetails && (
        <div>
          <p className="p-info">
            <span className="user-info">Email: </span>
            {email}
          </p>
          <p className="p-info">
            {" "}
            <span className="user-info">Company: </span>
            {company.name}
          </p>
          <p className="p-info">
            {" "}
            <span className="user-info">Website: </span>
            {website}
          </p>
        </div>
      )}
    </div>
  );
};

export default Card;
