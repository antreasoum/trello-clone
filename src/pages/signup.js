import React from "react";
import "./style/signup.css";
import Footer from "../components/footer";

function signup() {
  return (
    <div>
      <container id="regcontainer" class="regform container-fluid">
        <div class="container-fluid mx-auto" id="resize">
          <div class="signup-form form-group">
            <h5 class="signup-title text-md-center">
              Sign up for your account
            </h5>

            <input
              type="text"
              class="form-control"
              id="fullname"
              aria-describedby="nameHelp"
              placeholder="Full name"
            ></input>
            <input
              type="email"
              class="form-control"
              id="inputemail"
              aria-describedby="emailHelp"
              placeholder="Email"
            ></input>
            <input
              type="password"
              class="form-control"
              id="inputpass"
              placeholder="Password"
            ></input>
            <input
              type="password"
              class="form-control"
              id="verifypass"
              placeholder="Verify Password"
            ></input>

            <p class="signup-text">
              By signing up, you confirm that you've read and accepted our Terms
              of Service and Privacy Policy.
            </p>
            <button type="submit" id="button" class="btn btn-primary" disabled>
              Register
            </button>

            <hr></hr>

            <a class="main-list-item" href="login">
              Already have an account? Log In
            </a>
          </div>
        </div>
      </container>
      <div>
      <Footer />
      </div>
    </div>
    
  );
}

export default signup;
