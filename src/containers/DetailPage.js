import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import auth from '../auth/authenticator';
import RecipeService from "../services/RecipeServiceClient";
import FavoriteService from "../services/FavoriteService";

export default class DetailPage
    extends React.Component {

        constructor(props) {
            super(props);
            this.recipeService = RecipeService.instance;
            this.favoriteService = FavoriteService.instance;
            this.state = {
                userId: auth.getId(),
                favorite: {},
                recipe: {
                    label:''
                }
            }
            this.addToFavorites=this.addToFavorites.bind(this);
        }

        componentDidMount() {
            const { recipe } = this.props.location.state;
            this.setState({recipe: recipe});
        }

        addToFavorites() {
            console.log('add to favorites');
            let uri = this.state.recipe.uri.replace('#', "%23");
            let newFavorite = {
                recipe: uri
            }
            this.favoriteService.createFavorite(auth.getId(), newFavorite);
        }

        render() {
            return (
                <div>
                    {console.log(this.state.recipe.label)}
                    <div>
                        <h2>{this.state.recipe.label}</h2>
                        <img src={this.state.recipe.image} alt='Chicken Ramen' />
                        <br/>
                        <button className={"btn btn-success"}
                                onClick={this.addToFavorites}
                                type="button">
                            Add to My Favorites
                        </button>
                    </div>
                    <div className="border-dark p-5">
                        Nutritional Info:
                        <h4>Calories: {this.state.recipe.calories}</h4>
                        <h4>Ingredients: </h4>
                        <div>
                            {this.state.recipe.ingredientLines}
                        </div>
                    </div>
                    <h6>Full Recipe: <a href={this.state.recipe.url}>{this.state.recipe.url}</a></h6>
                </div>
            )
            /*
            return (
                <div>
                    <h3>{this.props.hit.recipe.label}</h3>
                    <img src={this.props.hit.recipe.image} alt={this.props.hit.recipe.label} />
                    <div>
                        Nutritional Info
                        <h4>Calories: {this.props.hit.recipe.calories}</h4>
                        <h4>Ingredients: {this.props.hit.recipe.ingridients}</h4>
                    </div>
                    <h6>Full Recipe: {this.props.hit.recipe.source}</h6>
                </div>
            )*/
        }


}