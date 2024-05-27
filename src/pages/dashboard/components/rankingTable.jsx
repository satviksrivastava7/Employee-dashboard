import React from "react";
import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import userData from "../../../data/employeeData";

// Function for getting medals based on the rank of the employee
const getMedalIcon = (rank) => {
  if (rank === 1) {
    return <WorkspacePremiumIcon style={{ color: "#d4af37" }} />;
  } else if (rank === 2) {
    return <WorkspacePremiumIcon style={{ color: "#c0c0c0" }} />;
  } else if (rank === 3) {
    return <WorkspacePremiumIcon style={{ color: "#CD7F32" }} />;
  }
  return null;
};

const RankingTable = ({ theme }) => {
  const muiTheme = useTheme();
  {
    /** Using the TableContainer api from mui library */
  }
  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "100%",
        borderRadius: "12px",
      }}
    >
      <Table>
        <TableHead
          sx={{
            backgroundColor: "var(--primary)",
          }}
        >
          <TableRow>
            <TableCell
              sx={{
                color: "var(--text-primary)",
                fontWeight: 600,
                fontSize: 16,
              }}
            ></TableCell>
            <TableCell
              sx={{
                color: "var(--text-primary)",
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              Rank
            </TableCell>
            <TableCell
              sx={{
                color: "var(--text-primary)",
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              Name
            </TableCell>
            <TableCell
              sx={{
                color: "var(--text-primary)",
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              Designation
            </TableCell>
            <TableCell
              sx={{
                color: "var(--text-primary)",
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              No. of hours worked
            </TableCell>
            <TableCell
              sx={{
                color: "var(--text-primary)",
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              Changes
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/** Below the row of the table are alternately colored for better UI */}
          {userData.map((user, index) => (
            <TableRow
              key={user.rank}
              sx={{
                backgroundColor:
                  index % 2 === 1 ? "var(--secondary)" : "var(--tertiary)",
              }}
            >
              <TableCell>{getMedalIcon(user.rank)}</TableCell>
              <TableCell sx={{ color: "var(--text-primary)", fontWeight: 500 }}>
                {user.rank}
              </TableCell>
              <TableCell
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "var(--text-primary)",
                  fontWeight: 500,
                }}
              >
                <Avatar
                  alt={user.name}
                  src={user.img}
                  style={{ width: 28, height: 28, marginRight: 8 }}
                />
                {user.name}
              </TableCell>
              <TableCell sx={{ color: "var(--text-primary)", fontWeight: 500 }}>
                {user.designation}
              </TableCell>
              <TableCell sx={{ color: "var(--text-primary)", fontWeight: 500 }}>
                {user.hoursWorked}
              </TableCell>
              <TableCell
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  color: "var(--text-primary)",
                  fontWeight: 500,
                }}
              >
                {user.rate === "increased" ? (
                  <ArrowDropUpIcon
                    style={{
                      color: "green",
                      width: 32,
                      height: "auto",
                    }}
                  />
                ) : (
                  <ArrowDropDownIcon
                    style={{
                      color: "red",
                      width: 32,
                      height: "auto",
                    }}
                  />
                )}
                {user.change}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RankingTable;
