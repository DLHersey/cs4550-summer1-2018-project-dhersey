import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import auth from '../auth/authenticator';
import LogInContainer from "../components/LogIn";

export default class ProfilePage
    extends React.Component {

        renderParts() {
            console.log("ProfilePage - renderParts - auth.loggedIn: " + auth.loggedIn());
            console.log("Profile page " + auth.getFirstName());
            /*
            if (auth.loggedIn()) {
                return <div>Hello There!</div>
            } else {
                return <LogInContainer />
            }
            */
           var greeting = "Hello " + auth.getFirstName() + "! You're a " + auth.getRole() + "!";
           return (<div>{greeting}<button onClick={auth.logOut()}>Log Out</button></div>);
        }


        render() {
            return(
                <div>
                    {this.renderParts()}
                </div>
    
            )
        }
}


