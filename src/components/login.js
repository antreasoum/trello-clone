import React from 'react';
import './style/login.css';

function login() {
    return (

        <div>
        
        <title>Sign In</title>
      <container class="login container-fluid">
        <div class="container-fluid mx-auto" id="resize">
          <form action="/boards">
            <div class="login-group">

              <h5 class="text-md-center">Log In to Trello</h5>

              <input type="email" class="form-control" id="inputemail" aria-describedby="emailHelp" placeholder="Email"></input>
              <input type="password" class="form-control" id="inputpass" placeholder="Password" required></input>
              <button type="submit" id="button" class="btn btn-primary">Log In</button>
              
              <hr></hr>

              <ul class="main-list">
                <a class="main-list-item" href="/redirect">Can't log in?</a>
                <a class="main-list-item" href="/signup">Sign Up</a>
              </ul>

            </div>
          </form>
        </div>
      </container>

<footer class="footer mt-auto py-3 fixed-bottom">
      
  <hr class="container"></hr>

    <ul class="global-footer-list">

      <li class="nav-item"><a class="global-footer-list-item" href="/">Templates</a></li>
      <li class="nav-item"><a class="global-footer-list-item" href="/">Prices</a></li>
      <li class="nav-item"><a class="global-footer-list-item" href="/">Apps</a></li>
      <li class="nav-item"><a class="global-footer-list-item" href="/">Jobs</a></li>
      <li class="nav-item"><a class="global-footer-list-item" href="/">Blog</a></li>
      <li class="nav-item"><a class="global-footer-list-item" href="/">Developers</a></li>
      <li class="nav-item"><a class="global-footer-list-item" href="/">About</a></li>
      <li class="nav-item"><a class="global-footer-list-item" href="/">Help</a></li>
      <li class="nav-item"><a class="global-footer-list-item" href="/">Legal</a></li>
      <li class="nav-item"><a class="global-footer-list-item" href="/">Cookie Settings</a></li>
      <li class="nav-item"><a class="global-footer-list-item" href="/">Privacy</a></li>
      
    </ul>

    <p> © Copyright 2020. All rights reserved. </p>
</footer>

        </div>
    );
  }

export default login;
