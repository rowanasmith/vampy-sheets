import React, { Component } from "react";
// import { connect } from "react-redux";

class Biography extends Component {

    state = {
        strength: 0,
        dexterity: 0,
        stamina: 0,
        charisma: 0,
        manipulation: 0,
        composure: 0,
        intelligence: 0,
        wits: 0,
        resolve: 0,

    }

    handleChange = propertyName => event => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value
        })
    };

  render() {
    return (
        <div>
            <p>{JSON.stringify(this.state)}</p>
            <h3>Physical:</h3>
            <label>Strength</label>
                <select value={this.state.strength} onChange={this.handleChange("strength")}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br />
                <label>Dexterity:</label>
                <select value={this.state.dexterity} onChange={this.handleChange("dexterity")}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br />
                <label>Stamina:</label>
                <select value={this.state.stamina} onChange={this.handleChange("stamina")}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br />
                <h3>Social</h3>
                <label>Charisma:</label>
                <select value={this.state.charisma} onChange={this.handleChange("charisma")}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br />
                <label>Manipulation:</label>
                <select value={this.state.manipulation} onChange={this.handleChange("manipulation")}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br />
                <label>Composure</label>
                <select value={this.state.composure} onChange={this.handleChange("composure")}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br />
                <h3>Mental</h3>
                <label>Intelligence</label>
                <select value={this.state.intelligence} onChange={this.handleChange("intelligence")}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br />
                <label>Wits</label>
                <select value={this.state.wits} onChange={this.handleChange("wits")}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br />
                <label>Resolve</label>
                <select value={this.state.resolve} onChange={this.handleChange("resolve")}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br />
        </div>
    );
  }
}

// const mapStateToProps = reduxState => ({
//     reduxState,
// });


export default Biography;
