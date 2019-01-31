import * as React from 'react';
import { Container, Row } from 'react-bootstrap';
import AppHeader from './AppHeader';

const bodyStyle: React.CSSProperties = {
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

export interface AppFrameProps {
    header: string,
    body: JSX.Element,
    footer: JSX.Element
}

export default class AppFrame extends React.Component<AppFrameProps> {
    render() {
        const { header, body, footer } = this.props;
        return (
            <Container>
                <AppHeader title={header} />
                <Row style={bodyStyle}>
                    {body}
                </Row>
                <Row>
                    {footer}
                </Row>
            </Container>
        )
    }
}