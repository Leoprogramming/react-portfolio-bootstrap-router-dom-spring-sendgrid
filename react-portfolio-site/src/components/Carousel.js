import React from "react";
import Card from "../components/Card";
import Github from "../assets/images/github.png";
import Profile from "../assets/images/profile.jpeg";
import Codepen from "../assets/images/codepen.png";


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        items: [
            {
                id: 0,
                title: 'GitHub',
                subTitle: 'Some Of My Past Production',
                imgSrc: Github,
                link: 'https://devgrub.com',
                selected: false
            },
            {
                id: 1,
                title: 'CodePen',
                subTitle: 'Past Previous',
                imgSrc: Codepen,
                link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
                selected: false
            },
            {
                id: 2,
                title: 'LinkedIn',
                subTitle: 'A social network for developers',
                imgSrc: Profile,
                link: 'https://github.com/garrettlove8/evverest',
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