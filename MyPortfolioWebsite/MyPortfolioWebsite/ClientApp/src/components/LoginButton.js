import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLoggedIn } from "../actions/loggedInActions";
import { LoggedOut } from "./Authentication/AuthenticationStatusManager";

const LoginButton = (props) => {

    const { isLoggedIn, setLoggedIn } = props;

    const signOut = async () => {
        console.log("Signing out!");
        await fetch("https://localhost:5001/api/signout",{
            method: "GET",
        });

        LoggedOut(() => setLoggedIn(false));
        console.log("Should be false!: " + isLoggedIn);
    }

    if(isLoggedIn){
        return(
            <li><Link to="/Home"><button onClick={signOut}>SignOut</button></Link></li>
        );
    }
    else{
        return(
            <li><Link to="/Login"><button className="navbar-button">Login</button></Link></li>
        );
    }
}

const mapStateToProps = (state) => {
    return{
      isLoggedIn: state.isLoggedIn
    }
}

const mapDispatchToProps = {
    setLoggedIn
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);