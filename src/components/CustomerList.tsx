import * as React from 'react';
import CustomerListItem from './CustomerListItem';
import { ICustomer } from '../models/index';

export interface CustomerListProps {
    customers: ICustomer[],
    urlpath: string
}

const CustomerList = ({ customers, urlpath }) => customers.map(
    (customer: ICustomer) => <CustomerListItem key={customer.dni} customer={customer} urlpath={urlpath} />)

export default CustomerList;