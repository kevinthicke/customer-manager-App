import * as React from 'react';
import { Container, Row } from 'react-bootstrap';
import AppHeader from './AppHeader';

export interface AppFrameProps {
    header: string,
    body: JSX.Element,
    footer: JSX.Element
}

const AppFrame: React.SFC<AppFrameProps> = ({ header, body, footer }) => (
    <Container>
        <AppHeader title={header}/>
        <Row>
            { body }
        </Row>
        <Row>
            { footer }
        </Row>
    </Container>
)

export default AppFrame;