import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import userService from "../services/userServiceClient";

export default class UserManagePage
    extends React.Component {
    constructor(props) {
        super(props);
        this.userService = userService.instance;
        this.state = {
            user: {
                username: '',
                password: '',
                firstname: '',
                lastnane: '',
                emailAddr: '',
                role: ''
            },
            users: []
        }

        this.renderUsers = this.renderUsers.bind(this);
        this.createUser=this.createUser.bind(this);
        this.onChange=this.onChange.bind(this);
    }

    componentDidMount() {
        this.findAllUsers();
    }

    findAllUsers() {
        this.userService
            .findAllUsers()
            .then((users) => {
                this.setState({users: users});
            });
    }

    createUser() {
        console.log(this.state.user);
        this.userService
            .createUser(this.state.user)
            .then(() => { this.findAllUsers(); });
    }

    deleteUser(userId) {
        this.userService
            .deleteUser(userId)
            .then(() => { this.findAllUsers(); });
    }


    onChange(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        return this.setState({user: user});
    }



    renderUsers() {
        console.log('Rendering Users: '+this.state.users);
        let users = this.state.users.map((user) => {
            return (
                <tr key={user.id}>
                    <td>{user.username}</td>
                    <td>{user.password}</td>
                    <td>{user.firstname}</td>
                    <td>{user.lastnane}</td>
                    <td>{user.emailAddr}</td>
                    <td>{user.role}</td>
                    <td>
                        <button onClick={() => {this.deleteUser(user.id)}}
                                className="btn btn-danger"
                                type="button">
                            Delete User
                        </button>
                    </td>
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
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                        <tr>
                            <th>
                                <input onChange={this.onChange}
                                       className="form-control col-lg-8" id="usernameFld"
                                       name="username"
                                       placeholder="Username"/>
                            </th>
                            <th>
                                <input onChange={this.onChange}
                                       className="form-control col-lg-5" id="passwordFld"
                                       name="password"
                                       type="password" placeholder="Password"/>
                            </th>
                            <th>
                                <input onChange={this.onChange}
                                       className="form-control col-lg-5" id="fNameFld"
                                       name="firstname"
                                       placeholder="First Name"/>
                            </th>
                            <th>
                                <input onChange={this.onChange}
                                       className="form-control col-lg-5" id="lNameFld"
                                       name="lastnane"
                                       placeholder="Last Name"/>
                            </th>
                            <th>
                                <input onChange={this.onChange}
                                       className="form-control col-lg-5" id="emailFld"
                                       name="emailAddr"
                                       placeholder="Email"/>
                            </th>
                            <th>
                                <input onChange={this.onChange}
                                       className="form-control col-lg-5" id="roleFld"
                                       name="role"
                                       placeholder="Role"/>
                            </th>
                            <th>
                                <button onClick={this.createUser}
                                        className="float-right btn btn-primary" type="button">Add</button>
                            </th>
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