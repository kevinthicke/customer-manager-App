import * as React from 'react';
import AppFrame from '../components/AppFrame';
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { withRouter, RouteComponentProps } from 'react-router';

const buttonStyle: React.CSSProperties = {
    margin: '5px'
}

class HomeContainer extends React.Component <RouteComponentProps> {
    constructor(props: RouteComponentProps) {
        super(props);

        this.handleCustomerListClick = this.handleCustomerListClick.bind(this);
    }
    
    handleCustomerListClick() {
        this.props.history.push('/customers');
    }
    
    render() {
        const body = (
            <ButtonGroup size="lg">
                <Button style={buttonStyle} onClick={this.handleCustomerListClick}>Customer List</Button>
                <Button style={buttonStyle} >Product List</Button>
                <Button style={buttonStyle} >Employees List</Button>
            </ButtonGroup>
        )
        
        const footer = (
            <div> </div>
        )

        return (
            <AppFrame header={'Home'} body={body} footer={footer} />
        )
    }
}

export default withRouter(HomeContainer);