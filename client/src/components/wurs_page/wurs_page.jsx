import React, { useState } from "react";
import axios from "axios";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import "./wurs_page.css";

import WursQues from "../../data/wurs_questions";
import Ans from "../../data/answer";
import { useHistory, useLocation } from "react-router-dom";
import Navbarr from "../navbar/navbar.component";

function WursPage() {
  const history = useHistory();
  const location = useLocation();
  let [arr, setArr] = useState([]);

  function handleChange(event) {
    switch (event.target.name) {
      case "1":
        arr[0] = event.target.value;
        break;
      case "2":
        arr[1] = event.target.value;
        break;
      case "3":
        arr[2] = event.target.value;
        break;
      case "4":
        arr[3] = event.target.value;
        break;
      case "5":
        arr[4] = event.target.value;
        break;
      case "6":
        arr[5] = event.target.value;
        break;
      case "7":
        arr[6] = event.target.value;
        break;
      case "8":
        arr[7] = event.target.value;
        break;
      case "9":
        arr[8] = event.target.value;
        break;
      case "10":
        arr[9] = event.target.value;
        break;
      case "11":
        arr[10] = event.target.value;
        break;
      case "12":
        arr[11] = event.target.value;
        break;
      case "13":
        arr[12] = event.target.value;
        break;
      case "14":
        arr[13] = event.target.value;
        break;
      case "15":
        arr[14] = event.target.value;
        break;
      case "16":
        arr[15] = event.target.value;
        break;
      case "17":
        arr[16] = event.target.value;
        break;
      case "18":
        arr[17] = event.target.value;
        break;
      case "19":
        arr[18] = event.target.value;
        break;
      case "20":
        arr[19] = event.target.value;
        break;
      default:
        break;
    }
  }

  async function handleResult() {
    let total = 0;
    arr.map((element) => {
      total = total + parseInt(element);
      return total;
    });

    const userRecord = {
      email: location.state,
      score: total,
    };

    if (total <= 18) {
      alert(
        "Record saved, your result is " +
          total +
          " . And you are not likely to have ADHD!"
      );
    } else {
      alert(
        "Record saved, your result is " +
          total +
          " . And you are very likely to have ADHD!"
      );
    }
    const res = await axios.post("/api/score", userRecord);

    if (res.data.msg) {
      history.push({
        pathname: "/result",
        state: location.state,
      });
    }
  }

  return (
    <div className="wurs_page">
      <Navbarr />
      {/* <br></br>
      <br></br>
      <br></br>
      <br></br> */}

      <div className="box">
        <h1 className="heading_wurs">WURS SCALE</h1>

        {WursQues.map((element) => {
          return (
            <table className="tablee">
              <tr>
                <td colSpan={2} className="q">
                  Question {element.num}: {element.question}
                </td>
              </tr>
              <br></br>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name={element.num}
                onChange={handleChange}
              >
                {Ans.map((option) => {
                  return (
                    <FormControlLabel
                      value={option.value}
                      control={<Radio />}
                      label={option.label}
                    />
                  );
                })}
              </RadioGroup>
              <hr></hr>
            </table>
          );
        })}
        <br></br>
        <button
          type="button"
          onClick={handleResult}
          className="btn btn-dark buttt"
        >
          Results
        </button>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default WursPage;
