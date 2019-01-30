import * as React from 'react';
import { Container, Row } from 'react-bootstrap';
import AppHeader from './AppHeader';

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
                <Row>
                    {body}
                </Row>
                <Row>
                    {footer}
                </Row>
            </Container>
        )
    }
}