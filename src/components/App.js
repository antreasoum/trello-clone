import React from "react";
import login from "../pages/login";
import signup from "../pages/signup";
import boards from "./boards";
import Nav1 from "./nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style/boards.css";
import "./style/App.css";
import Footer from "./footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav1 />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={login} />
          <Route path="/signup" component={signup} />
          <Route path="/boards" component={boards} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <title>Trello Clone</title>
    <container className="welcome-text col-5 text-md-center">
      <h1 className="heading1">
        Trello lets you work more collaboratively and get more done.
      </h1>

      <p className="text1">
        Trello’s boards, lists, and cards enable you to organize and prioritize
        your projects in a fun, flexible, and rewarding way.
      </p>

      <form action="/signup">
        <div className="form-group form-inline">
          <input
            className="form-control ml-auto"
            id="mainemail"
            type="email"
            name="email"
            placeholder="Email"
            required
          ></input>
          <button
            type="submit"
            id="signupbtn"
            className="btn btn-primary btn-lg mr-auto"
            href="signup"
          >
            Sign up - It's Free!
          </button>
        </div>
      </form>
    </container>
    <Footer />
  </div>
);

export default App;
