import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLoggedIn } from "../../../actions/loggedInActions";
import { LoggedOut } from "../../Authentication/AuthenticationStatusManager";

const LoginButton = (props) => {

    const { isLoggedIn, setLoggedIn } = props;

    const signOut = async () => {
        console.log("Signing out!");
        await fetch("https://localhost:5001/api/signout",{
            method: "GET",
        });

        LoggedOut(() => setLoggedIn(false));
    }

    if(isLoggedIn){
        return(
            <Link to="/Home"><li className="navbar-item" onClick={signOut}>SignOut</li></Link>
        );
    }
    else{
        return(
            <Link to="/Login"><li className="navbar-item">Login</li></Link>
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