import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "./register.styles.css";

function Register() {
  const history = useHistory();

  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    category: "",
    age: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const newUser = {
      email: input.email,
      username: input.username,
      password: input.password,
      gender: input.gender,
      category: input.category,
      age: input.age,
    };
    const res = await axios.post("/api/register", newUser);

    if (res.data.msg === "Registration successfull!!") {
      history.push({
        pathname: "/homepage",
        state: input.email,
      });
    } else {
      alert(res.data.msg);
    }
  }

  return (
    <div className="page">
      <br></br>

      <br></br>
      <div className="register">
        <form onSubmit={handleSubmit} className="form">
          <br></br>
          <h1 className="head">REGISTER.</h1>
          <table cellPadding={10} cellSpacing={30}>
            <tr>
              <td>
                <label for="username">Username</label>
              </td>
              <td classname="inputt">
                <input type="text" name="username" onChange={handleChange} />
              </td>
            </tr>

            <tr>
              <td>
                <label for="email">Email</label>
              </td>
              <td>
                <input
                  classname="inputt"
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label for="password">Password</label>
              </td>
              <td>
                <input
                  classname="inputt"
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label for="gender">Gender</label>
              </td>
              <td>
                <select name="gender" onChange={handleChange}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </td>
            </tr>

            <tr>
              <td>
                <label for="category">Category</label>
              </td>
              <td>
                <select name="category" onChange={handleChange}>
                  <option value="Doctor">Doctor</option>
                  <option value="Patient">Patient</option>
                </select>
              </td>
            </tr>

            <tr>
              <td>
                <label for="age">Age</label>
              </td>
              <td>
                <input
                  classname="inputt"
                  type="number"
                  name="age"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <br></br>
            <tr>
              <td colSpan={2} style={{ textAlign: "center" }}>
                <a href="/login" className="a">
                  Already a member! Login.
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan={2} style={{ textAlign: "center" }}>
                <button className="btn-grad">Sign-up</button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
}

export default Register;
