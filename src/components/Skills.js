import React, { Component } from "react";
// import { connect } from "react-redux";

class Skills extends Component {

    state = {
        athletics: '',
        brawl: '',
        craft: '',
        drive: '',
        firearms: '',
        melee: '',
        larceny: '',
        stealth: '',
        survival: '',
        animal_ken: '',
        etiquette: '',
        insight: '',
        intimidation: '',
        leadership: '',
        performance: '',
        persuasion: '',
        streetwise: '',
        subterfuge: '',
        academics: '',
        awareness: '',
        finance: '',
        investigation: '',
        medicine: '',
        occult: '',
        politics: '',
        science: '',
        technology: ''
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
        <select
          value={this.state.strength}
          onChange={this.handleChange("strength")}
        >
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

export default Skills;