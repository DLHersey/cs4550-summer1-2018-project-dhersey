import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class SearchItem
    extends React.Component {
    constructor(props) {
        super(props);
    }

    renderRecipe() {
        console.log("renderRecipe" + this.props.hit.recipe.label);
        return (<div>
            <h3>{this.props.hit.recipe.label}</h3>
            <img src={this.props.hit.recipe.image} alt={this.props.hit.recipe.label} />
            <h6>From: {this.props.hit.recipe.source}</h6>
        </div>);
    }

    render() {
        return(
            <li>
        {this.renderRecipe()} </li>
        )
    }
}