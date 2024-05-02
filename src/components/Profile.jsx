import PropTypes from "prop-types";
import { Component } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default class Profile extends Component { 
    render() { 
        return (
            <div className="profile">
                <div className="description">
                    <Card style={{ width: '18rem', textAlign: 'center' }}>
                        <Card.Img variant="top" src={this.props.avatar} />
                        <Card.Body>
                            <Card.Title>{this.props.username}</Card.Title>
                            <Card.Text>{this.props.tag}</Card.Text>
                            <Card.Text>{this.props.location}</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group list-group-horizontal">
                            <ListGroup.Item>Followers {this.props.stats.followers}</ListGroup.Item>
                            <ListGroup.Item>Views {this.props.stats.views}</ListGroup.Item>
                            <ListGroup.Item>Likes {this.props.stats.likes}</ListGroup.Item>
                        </ListGroup>      
                    </Card>
                </div>
            </div>);
    }
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object,
};