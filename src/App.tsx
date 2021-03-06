import * as React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import CustomerContainer from './containers/CustomerContainer';

const body = (
  <div>
    body
  </div>
);

const footer = (
  <div>
    footer
  </div>
)

/*
export default class App extends React.Component <{}, {}> {
  render() {
    return (
      <Container>
        <AppFrame header={'Customers'} body={body} footer={footer}/>
      </Container>
    )
  }
}
*/

/*
export default class App extends React.Component <{}, {}> {
  render() {
    return (
      <CustomerData name='John Locke' dni='42123321H' age={'32'} />
    )
  }
}
*/

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

const urlpath='/customers'

export default class App extends React.Component <{}, {}> {
  
  renderCustomerList = () => <h1>Customer List</h1>;
  renderNewCustomer = () => <h1>renderNewCustomer</h1>;
  renderCustomer = () => <h1>render customer</h1>;

  render() {
    return (
      <Router>
        <Container>
          <Route exact path='/' component={HomeContainer} />
          <Route exact path='/customers' component={CustomerContainer} />
          <Switch>
            <Route exact path='/customers/new' component={this.renderNewCustomer} />
            <Route exact path='/customer/:dni' component={this.renderCustomer} />
          </Switch>
        </Container>
      </Router>
    )
  }
}