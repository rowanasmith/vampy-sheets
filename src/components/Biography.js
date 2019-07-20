import React, { Component } from "react";
// import { connect } from "react-redux";

class Biography extends Component {

    state = {
        name: "",
        player: "",
        chronicle: "",
        concept: "",
        ambition: "",
        predator: "",
        sire: "",
        clan: "",
        generation: "",

    }

    handleChange = propertyName => event => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value
        })
    };

    changePage = () => {
        window.location = `#/attributes`
    }

  render() {
    return (
        <div>
            <p>{JSON.stringify(this.state)}</p>
            <label>Name:</label><input type="text" value={this.state.name} onChange={this.handleChange("name")}></input>
            <br />
            <label>Player:</label><input type="text" value={this.state.player} onChange={this.handleChange("player")}></input>
            <br />
            <label>Chronicle:</label><input type="text" value={this.state.chronicle} onChange={this.handleChange("chronicle")}></input>
            <br />
            <label>Concept:</label><input type="text" value={this.state.concept} onChange={this.handleChange("concept")}></input>
            <br />
            <label>Ambition:</label><input type="text" value={this.state.ambition} onChange={this.handleChange("ambition")}></input>
            <br />
            <label>Predator Type:</label><input type="text" value={this.state.predator} onChange={this.handleChange("predator")}></input>
            <br />
            <label>Sire:</label><input type="text" value={this.state.sire} onChange={this.handleChange("sire")}></input>
            <br />
            <label>Clan:</label><input type="text" value={this.state.clan} onChange={this.handleChange("clan")}></input>
            <br />
            <label>Generation:</label><input type="text" value={this.state.generation} onChange={this.handleChange("generation")}></input>
            <br />
            <button onClick={this.changePage}>Submit Biographical Information</button>
        </div>
    );
  }
}

// const mapStateToProps = reduxState => ({
//     reduxState,
// });


export default Biography;
