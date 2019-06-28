import React, { Component } from "react";

class Home extends Component {

    changePage = () => {
        window.location = `#/biography`
    }

render(){
  return (
    <div>
      <button onClick={this.changePage}> Create a Vampire the Masquerade 5th Edition Character Sheet</button>

    </div>
  );
}
}

export default Home;
