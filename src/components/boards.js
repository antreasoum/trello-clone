import React from 'react';
import './style/boards.css';

function boards() {
    return (

        <div>
        
      <container class="login container-fluid">
        <div class="container-fluid mx-auto" id="resize">
          <div class="login-group">

            <h5 class="text-md-center">Log In to Trello</h5>

            <input type="email" class="form-control" id="inputemail" aria-describedby="emailHelp" placeholder="Email"></input>
            <input type="password" class="form-control" id="inputpass" placeholder="Password"></input>
            <button type="submit" id="button" class="btn btn-primary" disabled>Log In</button>
            
            <hr></hr>

            <ul class="main-list">
              <a class="main-list-item" href="/redirect">Can't log in?</a>
              <a class="main-list-item" href="/signup">Sign Up</a>
            </ul>

          </div>
        </div>
      </container>
      </div>
    );
}

export default boards;
