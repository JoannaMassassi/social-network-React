import React from 'react';
import fire from '../Firebase/Firebase';
import { Component } from 'react';


 class Wall extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(){
    fire.auth().signOut();
  }




  render(){
    return (
      <div>
        <h1>THIS IS THE WALL</h1>
        <button onClick={this.logout}>Log Out</button>

      </div>
    );
  }
}

export default Wall;
