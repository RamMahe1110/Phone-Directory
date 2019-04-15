import React, { Component } from "react";
import ContactList from "./components/contactList/contactList";
import ContactForm from "./components/contactForm/contactForm";
import "./App.css";

class App extends Component {
  state = {
    name: "",
    number: "",
    route: "list",
    contactList: [],
    editIndex: null
  };

  onNameInput = event => {
    this.setState({ name: event.target.value });
  };

  onNumberInput = event => {
    this.setState({ number: event.target.value });
  };

  onEdit = i => {
    const item = this.state.contactList.filter((item, index) => index === i);
    this.setState({
      name: item[0].name,
      number: item[0].number,
      route: "form",
      editIndex: i
    });
  };

  onDelete = i => {
    const contactList = this.state.contactList.filter(
      (item, index) => index !== i
    );
    this.setState({ contactList });
  };

  onSubmit = () => {
    const { name, number, editIndex } = this.state;

    if (!name || !number) {
      return;
    }

    const item = { name, number };
    if (editIndex !== null) {
      const contactList = [...this.state.contactList];
      contactList.map((item, i) => {
        if (i === editIndex) {
          contactList[i].name = name;
          contactList[i].number = number;
        }
      });
      this.setState({
        contactList,
        editIndex: null,
        route: "list",
        name: "",
        number: ""
      });
    } else {
      const contactList = [...this.state.contactList, item];
      const route = this.state.route === "list" ? "form" : "list";
      this.setState({ contactList, route, name: "", number: "" });
    }
  };

  onRoute = route => {
    this.setState({ route });
  };

  render() {
    const {
      onNameInput,
      onNumberInput,
      onSubmit,
      onEdit,
      onDelete,
      onRoute
    } = this;
    const { name, number, contactList } = this.state;
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Phone-Directory</span>
        </nav>
        {this.state.route === "list" ? (
          <ContactList
            contactList={contactList}
            onEdit={onEdit}
            onDelete={onDelete}
            onRoute={onRoute}
          />
        ) : (
          <ContactForm
            name={name}
            number={number}
            onNameInput={onNameInput}
            onNumberInput={onNumberInput}
            onSubmit={onSubmit}
          />
        )}
      </div>
    );
  }
}

export default App;
