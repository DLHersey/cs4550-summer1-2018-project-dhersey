import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class UserManagePage
    extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }

        this.renderUsers = this.renderUsers.bind(this);
    }

    renderUsers() {
        let users = this.state.users.map((user) => {
            return (
                <tr key={user.id}>
                    User row
                </tr>
            )
        });
        return users;
    }

    render() {
        return (
            <div>
                <h2>Manage Users</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                        <th>First Name</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                    <tr>
                        <th>
                            <input onChange={this.titleChanged}
                                   className="form-control col-lg-8" id="usernameFld"
                                   placeholder="Username"/>
                        </th>
                        <th>
                            <input className="form-control col-lg-5" id="passwordFld"
                                   type="password" placeholder="Password"/>
                        </th>
                        <th>
                            <input className="form-control col-lg-5" id="fNameFld"
                                   placeholder="First"/>
                        </th>
                        <th>
                            <input className="form-control col-lg-5" id="lNameFld"
                                   placeholder="Last"/>
                        </th>
                        <th>
                            <input className="form-control col-lg-5" id="emailFld"
                                   placeholder="Email"/>
                        </th>
                        <th>
                            <input className="form-control col-lg-5" id="roleFld"
                                   placeholder="Role"/>
                        </th>
                        <th><button onClick={this.createCourse}
                                    className="float-right btn btn-primary" type="button">Add</button></th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.renderUsers()}
                    </tbody>
                </table>
            </div>
        )
    }

}