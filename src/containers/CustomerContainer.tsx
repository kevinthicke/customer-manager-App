import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import CustomerList from '../components/CustomerList';
import CustomerActions from '../components/CustomerActions';
import { Button } from 'react-bootstrap';
import AppFrame from '../components/AppFrame';

const customers = [
    {
      name:'John Locke', 
      dni:'321123543J',
      edit:'edit',
      del:'delete',
    }, 
    {
      name:'Walter White', 
      dni:'321143243J',
      edit:'edit',
      del:'delete'
    }
  ]
  
const urlpath='/customers';

const ButtonStyle: React.CSSProperties = {
    margin: '20px'
}


class CustomerContainer extends React.Component <RouteComponentProps> {
    constructor(props: RouteComponentProps) {
        super(props);

        this.handleNewCustomerClick = this.handleNewCustomerClick.bind(this);
    }

    handleNewCustomerClick() {
        console.log('adding new customer ...')
    }

    renderBody() {
        return (
            <div>
                <CustomerList customers={customers} urlpath={urlpath} />
                <CustomerActions>
                    <Button onClick={this.handleNewCustomerClick} style={ButtonStyle}>New customer</Button>
                </CustomerActions>
            </div>
        )
    }

    renderFooter() {
        return (
            <div> </div>
        )
    }

    render(){
        return (
            <AppFrame
                header={'Customers'}
                body={this.renderBody()}
                footer={this.renderFooter()}
            />
        )
    }
}

export default withRouter(CustomerContainer);