import * as React from 'react';

const CustomerDataItemStyle: React.CSSProperties = {
    fontWeight: 'normal'
}

export interface CustomerDataItemProps {
    keyword: string,
    value: string
}

const CustomerDataItem: React.SFC<CustomerDataItemProps> = ({ keyword, value }) => (
    <tr>
        <th>{ keyword }</th>
        <th style={CustomerDataItemStyle}>{ value }</th>
    </tr>
)

export default CustomerDataItem;