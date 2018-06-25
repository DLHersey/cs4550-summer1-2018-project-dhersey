import React from 'react';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import auth from '../auth/authenticator';

export default class SearchItem
    extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: auth.getId()
        }
        this.recipeInfo = this.props;
    }

    //<a className="text-white" href={'/Detail/'+this.props.hit.recipe.uri}>More Info</a>

    renderRecipe() {
        console.log("renderRecipe: " + this.props.hit.recipe.label);
        return (
            <div>
                <h3>{this.props.hit.recipe.label}</h3>
                <img src={this.props.hit.recipe.image} alt={this.props.hit.recipe.label} />
                <h6>From: {this.props.hit.recipe.source}</h6>
                <button className="btn btn-info">
                    <Link className="nav-link"
                          to={{
                              pathname: '/Detail',
                              state: {
                                  recipe: {
                                      label:this.props.hit.recipe.label,
                                      image:this.props.hit.recipe.image,
                                      calories: this.props.hit.recipe.calories,
                                      ingredientLines: this.props.hit.recipe.ingredientLines,
                                      source:this.props.hit.recipe.source,
                                      url: this.props.hit.recipe.url,
                                      uri: this.props.hit.recipe.uri
                                  }
                              }
                          }}>Recipes</Link>
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