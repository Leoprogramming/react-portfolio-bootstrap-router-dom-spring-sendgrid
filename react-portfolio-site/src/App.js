import React from "react";
import "./App.css";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Leo Costa",
      headerLinks: [
        { title: "Home", path: '/' },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Leo"s Personal Website",
        subTitle: "My Projects",
        descriptionText: "Checkout"
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Contact Me",
      }
    }
  }

  render() {
    return (
      <div>Hello From React</div>
    );
  }
}

export default App;