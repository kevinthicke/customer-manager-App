import * as React from 'react';
import { Table } from 'react-bootstrap';
import CustomerDataItem from './CustomerDataItem';

export interface CustomerDataProps {
    name: string,
    dni: string,
    age: string
}

const CustomerData: React.SFC<CustomerDataProps> = props => {
    
    const renderCustomerDataItems = (props): JSX.Element[] => Object.keys(props).map(
        key => <CustomerDataItem key={key} keyword={key} value={props[key]} />)
    
    return (
        <Table striped bordered hover size="sm" variant="dark">
            <tbody>
                { renderCustomerDataItems(props) }
            </tbody>
        </Table>
    )
}

export default CustomerData