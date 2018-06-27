const LOGIN_API_URL = 'https://cs4550-sp18-project-dlhersey.herokuapp.com/api/login';

class SessionApi {
    static login(credentials) {
        console.log("in sessionapi: username: " + credentials.username);
  //debugger;
      return fetch(LOGIN_API_URL, {
        body: JSON.stringify(credentials),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST'
      }).then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    } 
  }
  
  export default SessionApi;
  