class Auth {
    static loggedIn() {
   //   return !!sessionStorage.jwt;
      return !!localStorage.jwt;
    }
  
    static logOut() {
      /*
      sessionStorage.removeItem('jwt');
      sessionStorage.removeItem('firstName');
      sessionStorage.removeItem('userId');
      sessionStorage.removeItem('role');
      */
     localStorage.removeItem('jwt');
     localStorage.removeItem('firstName');
     localStorage.removeItem('userId');
     localStorage.removeItem('role');
      console.log("logOut " + this.loggedIn());
    }
/*
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
    */

    static getFirstName() {
      var username = localStorage.getItem('firstName');
      return username;
    }

    static getRole() {
      var role = localStorage.getItem('role');
      return role;
    }

    static getId() {
        debugger;
      var userId = localStorage.getItem('userId');
      return userId;
    }


    /*
    static isAdmin() {
      var isAdmin = false;
      debugger;
      if (!!sessionStorage.jwt) {
        var role = sessionStorage.getItem('role');
        if (role === undefined) {
          return isAdmin;
        } else {
          isAdmin = role === "admin" ? true : false;
        }
      }
      return isAdmin; 
    }
*/

    static isAdmin() {
      var isAdmin = false;
      debugger;
      if (!!localStorage.jwt) {
        var role = localStorage.getItem('role');
        if (role === undefined) {
          return isAdmin;
        } else {
          isAdmin = role === "admin" ? true : false;
        }
      }
      return isAdmin; 
    }


  }
  
  export default Auth;