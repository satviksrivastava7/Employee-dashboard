import React from "react";

import "./../styles/profileCard.css";
import image from "./../../../assets/images/empMonth.png";
import employeeData from "./../../../data/employeeData";

export default function ProfileCard() {
  // fetching the rank 1 emplyee from the local employee data
  const employeeOfTheMonth = employeeData.find(
    (employee) => employee.rank === 1
  );

  return (
    <div className="card-container">
      <img
        src={employeeOfTheMonth.img}
        alt={employeeOfTheMonth.name}
        className="employee-image"
      />
      <div className="details">
        <h2 className="employee-title">Employee of The Month</h2>
        <h3 className="employee-name">{employeeOfTheMonth.name}</h3>
        <p className="employee-designation">{employeeOfTheMonth.designation}</p>
      </div>
      <img src={image} alt="employee of the month" className="empMonth-image" />
    </div>
  );
}
