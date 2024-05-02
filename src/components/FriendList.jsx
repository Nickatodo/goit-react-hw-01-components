import PropTypes from "prop-types";
import { Component } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default class FriendList extends Component { 
    render() { 
        return (
    <Card style={{ width: '12rem' }}>
        <ListGroup variant="flush">
            {this.props.friends.map(friends => (
              <ListGroup.Item key={friends.id} className="friendList">
                    <span className="status" style={{backgroundColor: getBgColor(friends.isOnline)}}></span>
                    <img className="avatar" src={friends.avatar} alt="User avatar" width="48" /> {friends.name}
                </ListGroup.Item>
            ))}
      </ListGroup>
    </Card>
        );
    }
}

const getBgColor = variant => {
  switch (variant) {
    case true:
      return "green";
    case false:
      return "red";
    default:
      throw new Error(`Unsupported variant prop value - ${variant}`);
  }
};

FriendList.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};