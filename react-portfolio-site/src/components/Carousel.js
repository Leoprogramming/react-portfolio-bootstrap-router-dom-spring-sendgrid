import React from "react";
import Card from "../components/Card";
import Github from "../assets/images/github.png";
import Profile from "../assets/images/profile.jpeg";
import MyOja from "../assets/images/myOja.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        items: [
        {
        id: 0,
        title: "MyOja",
        subTitle: "Interview Tracker Project",
        imgSrc: MyOja,
        link: "http://www.myoja.de/",
        selected: false
        },

        {
        id: 1,
        title: "LinkedIn",
        subTitle: "My Background",
        imgSrc: Profile,
        link: "https://www.linkedin.com/in/leonardo-costa-berlin/",
        selected: false
        },

        {
        id: 2,
        title: "GitHub",
        subTitle: "Some Of My Past Production",
        imgSrc: Github,
        link: "https://github.com/Leoprogramming",
        selected: false
        },
      ]
    }
  }


  handleCardClick = (id, card) => {

    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if(item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items
    });
  }

  makeItems = (items) => {
    return items.map(item => {
      return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
  }

  render() {
    return(
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
        </Container>
      );
    }

}

export default Carousel;