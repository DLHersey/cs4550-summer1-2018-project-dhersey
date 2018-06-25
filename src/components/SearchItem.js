import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class SearchItem
    extends React.Component {
    constructor(props) {
        super(props);
    }

    renderRecipe() {
        console.log("renderRecipe" + this.props.hit.recipe.label);
        return (
            <div>
                <h3>{this.props.hit.recipe.label}</h3>
                <img src={this.props.hit.recipe.image} alt={this.props.hit.recipe.label} />
                <h6>From: {this.props.hit.recipe.source}</h6>
                <button className="btn btn-info">
                    <a href={'/Detail/'+this.props.hit.recipe.uri}>More Info</a>
                </button>
            </div>
        );
    }

    render() {
        return(
            <li>{this.renderRecipe()}</li>
        )
    }
}