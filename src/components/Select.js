import React, { Component } from "react";
// import { connect } from "react-redux";

class Select extends Component {



  render() {
    return (
                <select>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
    );
  }
}

// const mapStateToProps = reduxState => ({
//     reduxState,
// });


export default Select;
