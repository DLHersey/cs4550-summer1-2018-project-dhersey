let _singleton = Symbol();

const FAVORITE_API_URL = 'http://localhost:8080/api/favorite';
const USER_API_URL = 'http://localhost:8080/api/user'

export default class FavoriteService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new FavoriteService(_singleton);
        return this[_singleton]
    }

    //CREATE
    /*
    * invoked from details page
    *
    * given a JSON favorite with URI and current user
    * */
    createFavorite(userId, favorite) {
        return fetch(USER_API_URL + '/' + userId + '/favorite', {
            body: JSON.stringify(favorite),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        });
    }

    //READ
    findAllFavorites() {
        return fetch(FAVORITE_API_URL)
            .then(function (response) {
                return response.json();
            });
    }

    findAllFavoritesForUser(userId) {
        return fetch(USER_API_URL + '/' + userId + '/favorite')
            .then(function(response) {
                return response.json();
            });
    }

    //UPDATE
    // Should not be needed
    updateFavorite() {}

    //DELETE
    deleteFavorite(fid) {
        return fetch(FAVORITE_API_URL + '/' + fid, {
                method: 'delete'
            }).then(function (response) {
                return response;
        });
    }
}