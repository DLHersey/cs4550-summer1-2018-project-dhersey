let _singleton = Symbol();
const LOGIN_API_URL = 'https://cs4550-sp18-project-dlhersey.herokuapp.com/api/login';
const LOGOUT_API_URL = 'https://cs4550-sp18-project-dlhersey.herokuapp.com/api/logout';
const USER_API_URL = 'https://cs4550-sp18-project-dlhersey.herokuapp.com/api/user';
const REGISTER_API_URL = 'https://cs4550-sp18-project-dlhersey.herokuapp.com/api/register';


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
    
    findAllUsers() {
        return fetch(USER_API_URL)
        .then(function(response) {
            return response.json();
        });
    }

    createUser(user) {
	    return fetch(USER_API_URL, {
	        body: JSON.stringify(user),
	        headers: {
	       	   'Content-Type': 'application/json'
	       	},
	      	method: 'POST'
	   	}).then(function (response) {
	        return response.json();
		});
   	}


   	deleteUser(userId) {
		console.log('delete' + userId);
        return fetch(USER_API_URL + '/' + userId, {
            method: 'delete'
        }).then(function(response) {
				return response;
            }
		);
    }

    updateUser(user) {
        return fetch(USER_API_URL + '/' + user.id, {
	        body: JSON.stringify(user),
	        headers: {
	       	   'Content-Type': 'application/json'
	       	},
	      	method: 'POST'
	   	}).then(function (response) {
	        return response.json();
		});
   	}

}