import * as React from 'react';
import { Container } from 'react-bootstrap';
import AppFrame from './components/AppFrame';
import CustomerData from './components/CustomerData';

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

export default class App extends React.Component <{}, {}> {
  render() {
    return (
      <CustomerData name='John Locke' dni='42123321H' age={'32'} />
    )
  }
}