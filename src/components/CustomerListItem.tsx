import * as React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const CustomerListItemStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '5fr 1fr 1fr'
}

export interface CustomerListItemProps {
    name: string,
    dni: string,
    edit: string,
    del: string,
    urlPath: string,
}

const CustomerListItem: React.SFC<CustomerListItemProps> = ({ name, dni, edit, del, urlPath }) => {
    
    return(
        <Card style={CustomerListItemStyle}>
            <Link to={`${urlPath}/${dni}`}>{ name }</Link>
            <Link to={`${urlPath}/${dni}/${edit}`}>{ edit }</Link>
            <Link to={`${urlPath}/${dni}/${del}`}>{ del }</Link>
        </Card>
    )
}

export default CustomerListItem;