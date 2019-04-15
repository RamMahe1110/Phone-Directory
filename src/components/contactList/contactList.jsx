import React, { Component } from "react";
import "./contactList.css";

class ContactList extends Component {
  state = {};
  render() {
    const { onEdit, onDelete, onRoute } = this.props;
    return (
      <React.Fragment>
        <button className="btn  btn-primary add-btn" onClick={onRoute}>
          add
        </button>
        <table className="table customm" style={{ width: "600px" }}>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Contact</th>
              <th scope="col" />
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {this.props.contactList.map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.name}</th>
                <td>{item.number}</td>
                <td>
                  <button
                    className="btn  btn-success"
                    onClick={() => onEdit(index)}
                  >
                    edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn  btn-danger"
                    onClick={() => onDelete(index)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default ContactList;
