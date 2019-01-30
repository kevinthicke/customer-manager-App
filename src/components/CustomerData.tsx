import * as React from 'react';
import { Table } from 'react-bootstrap';

const CustomerDataItemStyle: React.CSSProperties = {
    fontWeight: 'normal'
}

export interface CustomerDataProps {
    name: string,
    dni: string,
    age: string
}

const CustomerData: React.SFC<CustomerDataProps> = props => {
    
    const renderCustomerDataItems = (props) => {
        return Object.keys(props).map(key => (
            <tr key={key}>
                <th>{ key }</th>
                <th style={CustomerDataItemStyle}>{ props[key] }</th>
            </tr>
        ))
    }
    
    return (
        <Table striped bordered hover size="sm" variant="dark">
            <tbody>
                { renderCustomerDataItems(props) }
            </tbody>
        </Table>
    )
}

export default CustomerData