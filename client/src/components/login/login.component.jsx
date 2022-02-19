import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./login.styles.css";

export default function Login() {
  const history = useHistory();
  const [input, setInput] = useState({
    email: "",
    password: "",
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

  function validateForm() {
    return input.email.length > 0 && input.password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const user = {
      email: input.email,
      password: input.password,
    };
    const res = await axios.post("/api/login", user);
    if (res.data.msg === "Login successful") {
      history.push({
        pathname: "/homepage",
        state: input.email,
      });
    } else {
      alert(res.data.msg);
    }
  }

  return (
    <div className="pagelogin">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="Login">
        <form onSubmit={handleSubmit} className="form">
          <br></br>
          <h1 className="head">LOGIN</h1>

          <table cellPadding={10} cellSpacing={30}>
            <tr>
              <td>
                <label for="email">Email</label>
              </td>
              <td>
                <input
                  classname="inputt"
                  type="email"
                  name="email"
                  value={input.email}
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
                  value={input.password}
                />
              </td>
            </tr>
            <br></br>
            <tr>
              <td colSpan={2} style={{ textAlign: "center" }}>
                <a href="/" className="a">
                  New here! Sign-Up.
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan={2} style={{ textAlign: "center" }}>
                <button
                  className="btn-grad"
                  type="submit"
                  disabled={!validateForm()}
                >
                  LOGIN
                </button>
              </td>
            </tr>
          </table>
          {/* <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              name="email"
              value={input.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={input.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            className="btn-grad"
            block
            size="lg"
            type="submit"
            disabled={!validateForm()}
          >
            Login
          </Button> */}
          <br></br>
        </form>
      </div>
    </div>
  );
}
