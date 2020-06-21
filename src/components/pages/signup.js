import React from 'react';
import './style/signup.css';

function signup() {
    return (

        <div>

      <container class="regform container-fluid">
        <div class="container-fluid mx-auto" id="resize">
          <div class="signup-form form-group">
         
            <h5 class="signup-title text-md-center">Sign up for your account</h5>

            <input type="text" class="form-control" id="fullname" aria-describedby="nameHelp" placeholder="Full name"></input>
            <input type="email" class="form-control" id="inputemail" aria-describedby="emailHelp" placeholder="Email"></input>
            <input type="password" class="form-control" id="inputpass" placeholder="Password"></input>
            <input type="password" class="form-control" id="verifypass" placeholder="Verify Password"></input>

            <p class="signup-text">By signing up, you confirm that you've read and accepted our Terms of Service and Privacy Policy.</p>
            <button type="submit" id="button" class="btn btn-primary" disabled>Register</button>

            <hr></hr>

            <a class="main-list-item" href="login.html">Already have an account? Log In</a>
          </div>
        </div>
      </container>


<footer class="footer mt-auto py-3 fixed-bottom">
      
  <hr class="container"></hr>

    <ul class="global-footer-list">

      <li class="nav-item"><a class="global-footer-list-item" href="#">Templates</a></li>
      <li class="nav-item"><a class="global-footer-list-item" href="#">Prices</a></li>
      <li class="nav-item"><a class="global-footer-list-item" href="#">Apps</a></li>
      <li class="nav-item"><a class="global-footer-list-item" href="#">Jobs</a></li>
      <li class="nav-item"><a class="global-footer-list-item" href="#">Blog</a></li>
      <li class="nav-item"><a class="global-footer-list-item" href="#">Developers</a></li>
      <li class="nav-item"><a class="global-footer-list-item" href="#">About</a></li>
      <li class="nav-item"><a class="global-footer-list-item" href="#">Help</a></li>
      <li class="nav-item"><a class="global-footer-list-item" href="#">Legal</a></li>
      <li class="nav-item"><a class="global-footer-list-item" href="#">Cookie Settings</a></li>
      <li class="nav-item"><a class="global-footer-list-item" href="#">Privacy</a></li>
      
    </ul>

    <p> © Copyright 2020. All rights reserved. </p>
</footer>

        </div>
    );
  }

export default signup;
