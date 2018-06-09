import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


export default class SignUp
    extends React.Component {


    createUser() {
        console.log("create user btn");
    }

    render() {
        return(
            <div className="row align-items-center">
                <div className="col"/>
                <div className="align-self-center">
                    <form className="border border-dark p-5">
                        <h3>Sign-up:</h3>
                        <div className="form-group mt-4">
                            <input id="usernameFld" className="form-control m-2" placeholder="Username" required=""
                                   autoFocus=""/>
                            <input id="passwordFld" className="form-control m-2" placeholder="Password" required=""
                                   type="password"/>
                            <input id="verifyPasswordFld" className="form-control m-2" placeholder="Password" required=""
                                   type="password"/>
                            <button className="btn btn-success mb-4 float-md-right" onClick={this.createUser} type="button">
                                Create Account
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col"/>
            </div>
        )
    }

}