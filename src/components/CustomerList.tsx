import * as React from 'react';
import { ICustomer } from '../models/index';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../utils/index';

const CustomerListItemStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '5fr 1fr 1fr',
    width: '60vw',
    fontSize: '14pt'
}

const LinkStyle: React.CSSProperties = {
    margin: '10px'
}

export interface CustomerListProps {
    customers: ICustomer[],
    urlpath: string
}

export default class CustomerList extends React.Component<CustomerListProps> {
    renderCostumerListItem(customer: ICustomer, urlpath: string) {
        const { name, dni, edit, del } = customer;

        return(
            <Card key={dni} style={CustomerListItemStyle}>
                <Link to={`${urlpath}/${dni}`} style={LinkStyle} >
                    { name }
                </Link>
                <Link to={`${urlpath}/${dni}/${edit}`} style={LinkStyle}>
                    { capitalizeFirstLetter(edit) }
                </Link>
                <Link to={`${urlpath}/${dni}/${del}`} style={LinkStyle}>
                    { capitalizeFirstLetter(del) }
                </Link>
            </Card>
        )
    }

    render() {
        const { customers, urlpath } = this.props;

        return customers.map((customer: ICustomer) => this.renderCostumerListItem(customer, urlpath));
    }
}