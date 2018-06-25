import React from 'react';
import UserService from "../services/userServiceClient";


export default class UserRow extends React.Component {
    constructor (props) {
        super(props);
        this.state = { user: this.props.user};
        this.userService = UserService.instance;
        this.passwordChanged = this.passwordChanged.bind(this);
        this.firstNameChanged = this.firstNameChanged.bind(this);
        this.lastNameChanged = this.lastNameChanged.bind(this);
        this.emailAddrChanged = this.emailAddrChanged.bind(this);
        this.roleChanged = this.roleChanged.bind(this);
        //this.deleteUser = this.deleteUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    passwordChanged(event) {
        var currentUser = this.state.user;
        currentUser.password = event.target.value;
        this.setState({user: currentUser});
    }

    firstNameChanged(event) {
        var currentUser = this.state.user;
        currentUser.firstname = event.target.value;
        this.setState({user: currentUser});
    }

    lastNameChanged(event) {
        var currentUser = this.state.user;
        currentUser.lastnane = event.target.value;
        this.setState({user: currentUser});
    }

    emailAddrChanged(event) {
        var currentUser = this.state.user;
        currentUser.emailAddr = event.target.value;
        this.setState({user: currentUser});
    }

    roleChanged(event) {
        var currentUser = this.state.user;
        currentUser.role = event.target.value;
        this.setState({user: currentUser});
    }

    /*
    deleteUser(userId) {
		this.userService
       		.deleteUser(userId)
			.then(() => {this.findAllUsers();});
    } 
    */
    
    updateUser(user) {
        this.userService.updateUser(user);
    }

    render() {
        return (
            <tr>
                <td>{this.props.user.id}</td>
                <td>{this.props.user.username}</td>
                <td><input type="text" value={this.props.user.password} onChange={this.passwordChanged}/></td>
                <td><input type="text" value={this.props.user.firstname} onChange={this.firstNameChanged}/></td>
                <td><input type="text" value={this.props.user.lastnane} onChange={this.lastNameChanged}/></td>
                <td><input type="text" value={this.props.user.emailAddr} onChange={this.emailAddrChanged}/></td>
                <td><select value={this.props.user.role} onChange={this.roleChanged} >
                                   <option>user</option>
                                   <option>admin</option>
                                   </select>
                </td>
                <td><button className="btn btn-primary" type="button"
                onClick={() => {this.updateUser(this.state.user)}}>Update</button></td>
                <td><button className="btn btn-primary" type="button" 
                onClick={() => {this.props.delete(this.props.user.id)}}>Delete</button></td>
            </tr>
        )
    }

}

