import React,{Component} from "react";
import "./style/App.css"
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "./TrelloActionButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "../actions";


class App extends Component {

  //Reorder Logic
  onDragEnd = (result) => {
    const { destination, source, draggableID, type } = result;

    if(!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableID,
        type
      )
    );
  };

  render() {
  const {lists} = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {provided => (
              <div className="List" {...provided.droppableProps} ref={provided.innerRef}>

                {lists.map((list, index) => (
                  <TrelloList 
                    listID={list.id} 
                    key={list.id} 
                    title={list.title} 
                    cards={list.cards}
                    index={index}
                  />
                ))}

                {provided.placeholder}
                <TrelloActionButton list/>
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps) (App);

/*import React from 'react';
import login from '../pages/login';
import signup from '../pages/signup';
import boards from './boards';
import Nav from './nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./style/boards.css"
import "./style/App.css"


function App() {
    return (
      <Router>
        <div className="App">
          <Nav/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={login}/>
            <Route path="/signup" component={signup}/>
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
        Trello’s boards, lists, and cards enable 
        you to organize and prioritize your 
        projects in a fun, flexible, and 
        rewarding way.
      </p>

      <form action="/signup">
        <div className="form-group form-inline">
          <input className="form-control ml-auto" id="mainemail" type="email" name="email" placeholder="Email" required></input>
          <button type="submit" id="signupbtn" className="btn btn-primary btn-lg mr-auto" href="signup">Sign up - It's Free!</button>
        </div>
      </form>
    </container>

      <footer className="footer mt-auto py-3 fixed-bottom">

        <hr className="container"></hr>

        <ul className="global-footer-list">

          <li className="nav-item"><a className="global-footer-list-item" href="/">Templates</a></li>
          <li className="nav-item"><a className="global-footer-list-item" href="/">Prices</a></li>
          <li className="nav-item"><a className="global-footer-list-item" href="/">Apps</a></li>
          <li className="nav-item"><a className="global-footer-list-item" href="/">Jobs</a></li>
          <li className="nav-item"><a className="global-footer-list-item" href="/">Blog</a></li>
          <li className="nav-item"><a className="global-footer-list-item" href="/">Developers</a></li>
          <li className="nav-item"><a className="global-footer-list-item" href="/">About</a></li>
          <li className="nav-item"><a className="global-footer-list-item" href="/">Help</a></li>
          <li className="nav-item"><a className="global-footer-list-item" href="/">Legal</a></li>
          <li className="nav-item"><a className="global-footer-list-item" href="/">Cookie Settings</a></li>
          <li className="nav-item"><a className="global-footer-list-item" href="/">Privacy</a></li>
          
        </ul>

        <p> © Copyright 2020. All rights reserved. </p>
      </footer>
  </div>
);

export default App;*/