import PropTypes from "prop-types";
import { Component } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default class Statistics extends Component { 
    render() { 
        return (
            <section className="statistics">
                    <Card style={{ width: '20rem', textAlign: 'center' }}>
                        <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        </Card.Body>
                    <ListGroup className="list-group list-group-horizontal" >
                        {this.props.stats.map(stats => (
                            <ListGroup.Item key={stats.id} style={{backgroundColor: colorAleatorio()}}>{stats.label} {stats.percentage}</ListGroup.Item>
                        ))}
                        </ListGroup>      
                    </Card>
            </section>
        );
    }
}

function aleatorio(inferior, superior) {
    let numPosibilidades = superior - inferior;
    let aleatorio = Math.random() * numPosibilidades;
    aleatorio = Math.floor(aleatorio);
    return parseInt(inferior) + aleatorio;
}

function colorAleatorio() {
    let hexadecimal = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");
    let color_aleatorio = "#";
    for (let i = 0; i < 6; i++) {
      let posarray = aleatorio(0, hexadecimal.length)
      color_aleatorio += hexadecimal[posarray]
    }
    return color_aleatorio
}

Statistics.propTypes = {
    stats: PropTypes.array,
};