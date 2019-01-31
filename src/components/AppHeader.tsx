import * as React from 'react';
import { Navbar } from 'react-bootstrap';
export interface AppHeaderProps {
    title: string
}

const AppHeader: React.SFC<AppHeaderProps> = ({ title }) => (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand> { title } </Navbar.Brand>
    </Navbar>
)

export default AppHeader;