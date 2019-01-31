import * as React from 'react';

export interface CustomerEditProps {
    name: string,
    dni: string,
    age: string
}

export default class CustomerEdit extends React.Component <CustomerEditProps> {
    render() {
        const { name, dni, age } = this.props;

        return (
            <div> name {name} dni {dni} age {age}</div>
        )
    }
}