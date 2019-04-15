import React, { Component } from "react";
import "./contactForm.css";

class ContactForm extends Component {
  state = {};
  render() {
    const { name, number, onNameInput, onNumberInput, onSubmit } = this.props;

    return (
      <div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="exampleInputName1">Name</label>
            <input
              type="text"
              value={name}
              name="name"
              onChange={onNameInput}
              className="form-control"
              id="exampleInputName1"
              aria-describedby="nameHelp"
              placeholder="enter name here..."
              maxLength="100"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputNumber1">Number</label>
            <input
              type="text"
              value={number}
              name="number"
              onChange={onNumberInput}
              className="form-control"
              id="exampleInputNumber1"
              placeholder="enter number here..."
              maxLength="15"
            />
          </div>

          <div
            className="displation"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            <p>Name to be displayed : {name}</p>
            <p>Number to be displayed : {number}</p>
          </div>

          <button type="submit" className="btn  btn-success" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default ContactForm;
