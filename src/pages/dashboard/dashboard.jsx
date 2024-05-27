import React, { useState, useEffect } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import RankingTable from "./components/rankingTable";
import "./styles/dashboard.css";
import ProfileCard from "./components/profileCard";

export default function Dashboard({ theme }) {
  // hoisting Date
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  // hoisting device width
  const isMobile = useMediaQuery("(max-width: 719px)");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="dashboard">
      <div className="header">
        <h2 className="title">Employees Activity Dashboard: </h2>
        <div className="date">
          <p>{formatDate(currentDateTime)}</p>
          <p>{formatTime(currentDateTime)}</p>
        </div>
      </div>
      {/** Here, if the device width is less than 720px then the device will be considered as mobile */}
      {/** If the device is mobile then the profile card is rendered before the ranking table */}
      {isMobile ? (
        <div className="wrapper-mobile">
          <div className="card-container">
            <ProfileCard theme={theme} />
          </div>
          <div className="table-container">
            <RankingTable theme={theme} />
          </div>
        </div>
      ) : (
        <div className="wrapper">
          <div className="table-container">
            <RankingTable theme={theme} />
          </div>
          <div className="card-container">
            <ProfileCard theme={theme} />
          </div>
        </div>
      )}
    </div>
  );
}
