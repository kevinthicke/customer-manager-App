import * as React from 'react';

export interface CustomerActionProps {
    children: React.ReactNode
}

const CustomerActions: React.SFC<CustomerActionProps> = ({ children }) => (
    <div>
        { children }
    </div>
)

export default CustomerActions;