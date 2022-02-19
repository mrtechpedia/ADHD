import React from "react";
import axios from "axios";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import moment from "moment";
import { useLocation } from "react-router-dom";

import "./result.styles.css";
import { useEffect } from "react";
import { useState } from "react";
import Navbarr from "../navbar/navbar.component";

function Result() {
  const location = useLocation();

  const [scores, setScores] = useState([]);

  useEffect(async () => {
    if (location.state) {
      const result = await axios.post("/api/result", { email: location.state });
      setScores(result.data.userScores);
    }
  }, []);

  return (
    <div className="result_page">
      <Navbarr />
      <br></br>
      <br></br>
      <br></br>
      <h2 style={{ textAlign: "center" }}>Results for {location.state} are</h2>
      <Table className="result_table" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {scores != null ? (
            scores.map((score) => (
              <TableRow key={score._id}>
                <TableCell>{moment(score.date).format("DD/MM/YY")} </TableCell>
                <TableCell>{moment(score.date).format("LT")} </TableCell>
                <TableCell>{score.result} </TableCell>
              </TableRow>
            ))
          ) : (
            <h2>No results found</h2>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default Result;
