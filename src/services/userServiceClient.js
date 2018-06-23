let _singleton = Symbol();
const LOGIN_API_URL = 'http://localhost:8080/api/login';
const LOGOUT_API_URL = 'http://localhost:8080/api/logout';
const USER_API_URL = 'http://localhost:8080/api/user';
const REGISTER_API_URL = 'http://localhost:8080/api/register';


export default class userService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new userService(_singleton);
        return this[_singleton]
    }

    login(credentials) {
        var loginUrl = LOGIN_API_URL;
        return fetch(loginUrl, {
            body: JSON.stringify(credentials),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        });
    }
    

}