import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";
import Search from "./Search";

export default class LandingPage
    extends React.Component {


    render() {
        return(
            <div>
                <Search/>
            </div>

        )
    }
}

