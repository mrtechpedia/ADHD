import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React, { useState } from "react";
import Obj from "../../data/wurs_questions";

import "../wurs_page/wurs_page.css";

function Opt() {
  const [radio, setRadio] = useState(0);

  function handleChange(event) {
    setRadio(event.target.value);
  }

  return (
    <RadioGroup
      aria-labelledby="demo-controlled-radio-buttons-group"
      name="controlled-radio-buttons-group"
      onChange={handleChange}
    >
      <FormControlLabel value={0} control={<Radio />} label={Obj.ans.one} />
      <FormControlLabel value={3} control={<Radio />} label={Obj.ans.two} />
      <FormControlLabel value={6} control={<Radio />} label={Obj.ans.three} />
      <FormControlLabel value={9} control={<Radio />} label={Obj.ans.four} />
    </RadioGroup>
  );
}

export default Opt;
