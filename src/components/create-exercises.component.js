//----------------------------------------------------------------------------------------------------------------------
// Imports
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

//----------------------------------------------------------------------------------------------------------------------
// Exercises List
export default class CreateExercises extends Component {

    // Class constructor
    constructor(props) {
        super(props);

        // Binds all methods in the class to the correct implementation
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Initialise mongodb attributes
        this.state = {
            username: '',
            description: '',
            duration: 0,
            date:new Date(),
            users: []
        }
    }

    // Populate user array on page load
    componentDidMount() {
        this.setState({
            users: ['test user'],
            username: 'test user'
        })
    }

    //------------------------------------------------------------------------------------------------------------------
    // Update the username from a form
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    //------------------------------------------------------------------------------------------------------------------
    // Update the description from a form
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    //------------------------------------------------------------------------------------------------------------------
    // Update the duration from a form
    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        });
    }

    //------------------------------------------------------------------------------------------------------------------
    // Update the username from a form
    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    //------------------------------------------------------------------------------------------------------------------
    // Submit form
    onSubmit(e) {
        e.preventDefault();

        // Gets form data into variable
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        // Submits the data
        console.log("DBG: form data");
        console.log(exercise);

        // return to home page
        window.location = '/';
    }

    // Form
    render() {
        return (
            <div>
                <h3>Create New Exerxise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className={"form-group"}>
                        <label>Username: </label>
                        <select ref={"userInput"}
                                required
                                className={"form-control"}
                                value={this.state.username}
                                onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function (user) {
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                    <div className={"form-group"}>
                        <label>Description: </label>
                        <input type={"text"}
                               required
                               className={"form-control"}
                               value={this.state.description}
                               onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className={"form-group"}>
                        <label>Duration (in minutes): </label>
                        <input
                            type={"text"}
                            className={"form-control"}
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                            />
                    </div>
                    <div className={"form-group"}>
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className={"form-group"}>
                        <input type={"submit"} value={"Create Exercise Log"} className={"btn btn-primary"} />
                    </div>
                </form>
            </div>
        );
    }
}

