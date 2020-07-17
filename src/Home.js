import React, { Component } from 'react';
import fire from './config/Fire';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Row, Col} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import './home.css'
  
class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (

    <div>
        <div className="row">
            <h1 className="heading">Welcome to Bhatt's Kitchen</h1>
            <button type="submit" onClick={this.logout} className="logout-btn">Logout</button>
        </div>
        <div>
            <Container>
                <Row className="row">
                <Col className="columns"> 
                    <Card>
                        <Card.Img variant="top" src="./assets/pizza.png" />
                        <Card.Body>
                        <Card.Title>Pizza</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col className="columns"> 
                    <Card className="card-container">
                        <Card.Img variant="top" className="card-img-top" src="./assets/chhole bhature.png" />
                        <Card.Body>
                        <Card.Title>Chhole bhature</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
                </Row>
            </Container>
        </div>
    </div>            
      
        );
    }
}

export default Home;