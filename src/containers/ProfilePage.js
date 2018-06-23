import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import auth from '../auth/authenticator';
import LogInContainer from "../components/LogIn";

export default class ProfilePage
    extends React.Component {

        renderParts() {
            console.log("ProfilePage - renderParts - auth.loggedIn: " + auth.loggedIn());
            if (auth.loggedIn()) {
                return <div>Hello There!</div>
            } else {
                return <LogInContainer />
            }
        }


        render() {
            return(
                <div>
                    {this.renderParts()}
                </div>
    
            )
        }
}


