import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import FavoriteService from "../services/FavoriteService";
import auth from '../auth/authenticator';

export default class FavoritesList
    extends React.Component {
    constructor(props) {
        super(props)
        this.favoriteService = FavoriteService.instance;
        this.state = {
            favorites: []
        }
        this.removeFavorite = this.removeFavorite.bind(this);
        this.findAllFavoritesForUser = this.findAllFavoritesForUser.bind(this);
        this.setUserId=this.setUserId.bind(this);
    }

    setUserId(userId) {
        this.setState({userId: userId});
    }

    componentDidMount() {
        let userId = parseInt(this.props.userId, 10);
        this.setUserId(userId);
        this.findAllFavoritesForUser(userId);
    }

    componentWillReceiveProps(newProps){
        this.setUserId(newProps.userId);
        this.findAllFavoritesForUser(newProps.userId);
    }

    findAllFavoritesForUser(userId) {
        this.favoriteService
            .findAllFavoritesForUser(userId)
            .then((response) => {
                this.setState({favorites: response});
            });
    }

    removeFavorite(fid) {
        this.favoriteService
            .deleteFavorite(fid)
            .then(() => this.findAllFavoritesForUser(this.props.userId));
    }


    renderFavoritesList() {
        let favorites = this.state.favorites.map((favorite) => {
            return (
                <li key={favorite.id}>
                    <h3>{favorite.label}</h3>
                    <button className="btn btn-danger"
                            type="button"
                    onClick={this.removeFavorite(favorite.id)}>Remove</button>
                </li>
            )
        })
    }

    render() {
        return(
            <div>
                <h3>Favorite Recipes: </h3>
                <ul>
                    {this.renderFavoritesList()}
                </ul>
            </div>
        )
    }
}