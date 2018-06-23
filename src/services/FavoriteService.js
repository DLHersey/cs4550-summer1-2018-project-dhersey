let _singleton = Symbol();

const FAVORITE_API_URL = 'http://localhost:8080/api/favorite';

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
    createFavorite() {
        return (
            fetch(FAVORITE_API_URL,
                )
        )
    }

    //READ
    findAllFavorites() {
        return (
            fetch()
        )
    }

    findFavoritesForUser() {

    }

    //UPDATE


    //DELETE
    deleteFavorite() {

    }
}