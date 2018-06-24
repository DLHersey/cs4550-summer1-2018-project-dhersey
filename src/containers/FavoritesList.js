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
    }

    componentDidMount() {
        this.findAllFavoritesForUser(auth.getId());
    }

    findAllFavoritesForUser(userId) {
        this.favoriteService
            .findAllFavoritesForUser(userId)
            .then((favorites) => {
                console.log(favorites);
                this.state.favorites = favorites;
            })
    }

    removeFavorite(fid) {
        this.favoriteService
            .deleteFavorite(fid)
            .then(() => this.findAllFavoritesForUser(auth.getId()));
    }


    renderFavoritesList() {
        let favorites = this.state.favorites.map((favorite) => {
            return (
            <li key={favorite.id}>
                <h3>{favorite.label}</h3>
                <button className="btn btn-danger"
                        type="button"
                onClick={this.removeFavorite(favorite.id)}>Remove</button>
            </li>)
        })
    }

    render() {
        return(
            <div>
                <h1>List goes here</h1>
                <ul>
                    {this.renderFavoritesList()}
                </ul>
            </div>
        )
    }
}