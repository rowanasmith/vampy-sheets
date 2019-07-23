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

    changePage = () => {
        window.location = `#/disciplines`
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
          <h1>Skills</h1>
        <p>{JSON.stringify(this.state)}</p>
        <label>Athletics</label>
        <select
          value={this.state.athletics}
          onChange={this.handleChange("athletics")}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label>Brawl</label>
        <select
          value={this.state.brawl}
          onChange={this.handleChange("brawl")}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label>Craft</label>
        <select
          value={this.state.craft}
          onChange={this.handleChange("craft")}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label>Drive</label>
        <select
          value={this.state.drive}
          onChange={this.handleChange("drive")}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label>Firearms</label>
        <select
          value={this.state.firearms}
          onChange={this.handleChange("firearms")}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label>Melee</label>
        <select
          value={this.state.melee}
          onChange={this.handleChange("melee")}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label>Larceny</label>
        <select
          value={this.state.larceny}
          onChange={this.handleChange("larceny")}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label>Stealth</label>
        <select
          value={this.state.stealth}
          onChange={this.handleChange("stealth")}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label>Survival</label>
        <select
          value={this.state.survival}
          onChange={this.handleChange("survival")}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label>Animal Ken</label>
        <select
          value={this.state.animal_ken}
          onChange={this.handleChange("animal_ken")}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label>Etiquette</label>
        <select
          value={this.state.etiquette}
          onChange={this.handleChange("etiquette")}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label>Insight</label>
        <select
          value={this.state.insight}
          onChange={this.handleChange("insight")}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label>Intimidation</label>
        <select
          value={this.state.intimidation}
          onChange={this.handleChange("intimidation")}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label>Leadership</label>
        <select
          value={this.state.leadership}
          onChange={this.handleChange("leadership")}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label>Performance</label>
        <select
          value={this.state.performance}
          onChange={this.handleChange("performance")}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label>Persuasion</label>
        <select
          value={this.state.persuasion}
          onChange={this.handleChange("persuasion")}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label>Streetwise</label>
        <select
          value={this.state.streetwise}
          onChange={this.handleChange("streetwise")}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label>Subterfuge</label>
        <select
          value={this.state.subterfuge}
          onChange={this.handleChange("subterfuge")}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label>Academics</label>
        <select
          value={this.state.academics}
          onChange={this.handleChange("academics")}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label>Awareness</label>
        <select
          value={this.state.awareness}
          onChange={this.handleChange("awareness")}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label>Finance</label>
        <select
          value={this.state.finance}
          onChange={this.handleChange("finance")}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label>Investigation</label>
        <select
          value={this.state.investigation}
          onChange={this.handleChange("investigation")}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label>Medicine</label>
        <select
          value={this.state.medicine}
          onChange={this.handleChange("medicine")}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label>Occult</label>
        <select
          value={this.state.occult}
          onChange={this.handleChange("occult")}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label>Politics</label>
        <select
          value={this.state.politics}
          onChange={this.handleChange("politics")}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label>Science</label>
        <select
          value={this.state.science}
          onChange={this.handleChange("science")}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label>Technology</label>
        <select
          value={this.state.technology}
          onChange={this.handleChange("technology")}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <button onClick={this.changePage}>Submit Skills</button>
      </div>
    );
  }
}

export default Skills;