import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import WursPage from "./components/wurs_page/wurs_page";
import ASRSPage from "./components/asrs_page/asrs_page.component";
import SelfPage from "./components/self_page/self_page.component";
import Login from "./components/login/login.component";
import Register from "./components/signup/register.component";
import Homepage from "./components/homepage/homepage.component";
import Result from "./components/result/result.component";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Register />
          </div>
        </Route>
        <Route exact path="/homepage">
          <div className="App">
            <Homepage />
          </div>
        </Route>
        <Route path="/wurs">
          <div className="App">
            <WursPage />
          </div>
        </Route>

        <Route path="/asrs">
          <div className="App">
            <ASRSPage />
          </div>
        </Route>

        {/* <Route path="/self">
          <div className="App">
            <SelfPage />
          </div>
        </Route> */}
        <Route path="/login">
          <div className="App">
            <Login />
          </div>
        </Route>

        <Route path="/result">
          <div className="App">
            <Result />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
