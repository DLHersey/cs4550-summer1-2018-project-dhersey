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
        this.setFavorites=this.setFavorites.bind(this);
    }

    setUserId(userId) {
        this.setState({userId: userId});
    }

    setFavorites(favorites) {
        console.log('setting:' + favorites);
        this.setState({favorites: favorites});
    }

    componentDidMount() {
        let userId = parseInt(this.props.userId, 10);
        this.setUserId(userId);
        //this.findAllFavorites();
        this.findAllFavoritesForUser(userId);
        console.log(this.state.favorites);
    }
/*
    componentWillReceiveProps(newProps){
        this.setUserId(newProps.userId);
        this.findAllFavoritesForUser(newProps.userId);
    }*/

    findAllFavorites() {
        this.favoriteService
            .findAllFavorites()
            .then((response) => {
                this.setFavorites(response)
            });
    }

    findAllFavoritesForUser(userId) {
        this.favoriteService
            .findAllFavoritesForUser(userId)
            .then((response) => {
                this.setFavorites(response);
            });
    }

    removeFavorite(fid) {
        this.favoriteService
            .deleteFavorite(fid)
            .then(() => this.findAllFavoritesForUser(this.props.userId));
    }


    /*
    * I made some mistake in the design of my Favorite data model that I may not have time to correct.
    *
    * There is another problem where the table rows are not rendering.
    * I have structured it the same way that I did the UserManagement table. I hve not been able to find the problem.
    * There are no more office hours but I will continue to consult the internet.
    **/
    //
    renderFavoritesList() {
        console.log('Rendering Favorites: '+this.state.favorites);
        let favorites = this.state.favorites.map((favorite) => {
            return (
                <tr key={favorite.id}>
                    <td>{favorite.recipe}</td>
                    <td>
                        <button onClick={() => {this.removeFavorite(favorite.id)}}
                                className="btn btn-danger"
                                type="button">Remove</button>
                    </td>
                </tr>
            )
        });
        return favorites;
    }

    render() {
        return(
            <div>
                <h2>Favorite Recipes: </h2>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr><td>Favoirites are supposed to render here.</td></tr>
                        {this.renderFavoritesList()}
                    </tbody>
                </table>
            </div>
        )
    }
}