class Auth {
    static loggedIn() {
      return !!sessionStorage.jwt;
    }
  
    static logOut() {
      sessionStorage.removeItem('jwt');
      sessionStorage.removeItem('firstName');
      sessionStorage.removeItem('userId');
      sessionStorage.removeItem('role');
      console.log("logOut " + this.loggedIn());
    }

    static getFirstName() {
      var firstName = sessionStorage.getItem('firstName');
      return firstName;
    }

    static getRole() {
      var role = sessionStorage.getItem('role');
      return role;
    }

    static getId() {
      var userId = sessionStorage.getItem('userId');
      return userId;
    }
  }
  
  export default Auth;