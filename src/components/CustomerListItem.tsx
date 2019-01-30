import * as React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ICustomer } from '../models';

export const CustomerListItemStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '5fr 1fr 1fr'
}

export interface CustomerListItemProps {
    urlpath: string,
    customer: ICustomer
}

const CustomerListItem: React.SFC<CustomerListItemProps> = ({ customer, urlpath }) => {
    const { name, dni, edit, del } = customer;

    return(
        <Card style={CustomerListItemStyle}>
            <Link to={`${urlpath}/${dni}`}>{ name }</Link>
            <Link to={`${urlpath}/${dni}/${edit}`}>{ edit }</Link>
            <Link to={`${urlpath}/${dni}/${del}`}>{ del }</Link>
        </Card>
    )
}

export default CustomerListItem;