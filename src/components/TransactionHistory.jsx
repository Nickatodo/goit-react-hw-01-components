import PropTypes from "prop-types";
import { Component } from "react";
import Table from 'react-bootstrap/Table';

export default class TransactionHistory extends Component { 
    render() { 
        return (
            <Table striped bordered hover style={{width: '20rem'}}>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.items.map(item => (
                        <tr key={item.id}>
                            <td>{item.type}</td>
                            <td>{item.amount}</td>
                            <td>{item.currency}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
}

TransactionHistory.propTypes = {
    items: PropTypes.array,
};