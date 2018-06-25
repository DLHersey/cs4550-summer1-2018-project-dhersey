import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import auth from '../auth/authenticator';
import LogInContainer from "../components/LogIn";
import FavoritesList from "./FavoritesList";
import UserManagePage from "./UserManagePage";

export default class ProfilePage
    extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: auth.getId(),
            firstName: auth.getFirstName(),
            role: auth.getRole(),
            isAdmin: auth.isAdmin()
        };
    }

        renderAdmin() {
            if (this.state.isAdmin) {
                return <div><UserManagePage/></div>
            }
            return;
        }

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
           return (<div>{greeting}&nbsp;&nbsp;<button onClick={auth.logOut()}>Log Out</button></div>);
        }


        render() {
            return(
                <div>
                    {this.renderParts()}
                    <hr/>
                    <FavoritesList userId={this.state.userId}/>
                    <div>
                        {this.renderAdmin()}
                    </div>
                </div>
            )
        }
}


