//----------------------------------------------------------------------------------------------------------------------
// Imports
import React, { Component } from 'react';
import axios from 'axios';

//----------------------------------------------------------------------------------------------------------------------
// Exercises List
export default class CreateUser extends Component {
    // Class constructor
    constructor(props) {
        super(props);

        // Binds all methods in the class to the correct implementation
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Initialise mongodb attributes
        this.state = {
        }
    }

    //------------------------------------------------------------------------------------------------------------------
    // Update the username from a form
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    //------------------------------------------------------------------------------------------------------------------
    // Submit form
    onSubmit(e) {
        e.preventDefault();

        // Gets form data into variable
        const user = {
            username: this.state.username
        }

        // Submits the data
        console.log("User added!");
        console.log(user);

        axios.post('http://localhost:5000/user/add', user)
            .then(res => console.log(res.data))

        this.setState({
            username: ''
        })
    }

    //------------------------------------------------------------------------------------------------------------------
    // User form
    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className={"form-group"}>
                        <label>Username: </label>
                        <input type={"text"}
                            required
                               className={"form-control"}
                               value={this.state.username}
                               onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className={"form-group"}>
                        <input type={"submit"} value={"Create User"} className={"btn btn-primary"}/>
                    </div>
                </form>
            </div>
        );
    }
}
