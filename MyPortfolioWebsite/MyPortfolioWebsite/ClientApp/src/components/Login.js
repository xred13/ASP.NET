import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLoggedIn } from "../actions/loggedInActions";
import { LoggedIn } from "./Authentication/AuthenticationStatusManager";

class Login extends Component {
  displayName = Login.name;

  state = {
      username: "",
      password: ""
  }
  inputChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value
      });
  };

  submitForm = async (e) => {
      
    e.preventDefault();

    // console.log("BEFORE CREATE");
    // await fetch("https://localhost:5001/api/create",{
    //     method: "PUT"
    // });
    // console.log("AFTER CREATE");

    // console.log("Before fetching");
    // console.log(this.state);

    var response = await fetch("https://localhost:5001/api/login",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ username: this.state.username, password: this.state.password})
        });

    if(response.status === 200){
        console.log("Login successful");

        LoggedIn(() => this.props.setLoggedIn(true));
        //this.props.setLoggedIn(true);
        console.log("SHOULD BE TRUE: " + this.props.isLoggedIn);
    }
    else{
        console.log("Login failed");
    }

    console.log("After fetching");
    console.log(this.state);

    this.setState({
        username: "",
        password: ""
    });

    fetch("https://localhost:5001/api/private")
        .then(response => response.text())
        .then(data => console.log(data));

  }

  render() {

    console.log("Is logged in?: "+this.props.isLoggedIn);

    return (
        <div>
            <form onSubmit={this.submitForm}>
                <label htmlFor="username">Username:</label>
                <input type="text" placeholder="Username" id="username" onChange={this.inputChange}/>

                <label htmlFor="password">Password:</label>
                <input type="password" placeholder="Password" id="password" onChange={this.inputChange}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoggedIn: (status) => { dispatch(setLoggedIn(status))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
