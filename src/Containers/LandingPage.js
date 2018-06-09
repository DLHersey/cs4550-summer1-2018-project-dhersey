import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import LogIn from "./LogIn";
import SignUp from "./SignUp";

export default class LandingPage
    extends React.Component {


    render() {
        return(
            <div>
                <LogIn />
                <SignUp />
            </div>

        )
    }
}

