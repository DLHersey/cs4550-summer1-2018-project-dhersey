import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class SearchItem
    extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
                <li>{this.props.result.name}</li>
        )
    }
}