import React, {Component} from "react";
import home_image from "./../images/home_image.jpg";

export class Home extends Component{

    render(){
        return(
            <div className="home-div">
                <div className="home-div-image">
                    <img alt="software development" src={home_image}/>
                </div>
                <div className="home-div-main">
                    <div className="home-div-main-name">
                        Fábio Ramos
                    </div>
                    <div className="home-div-main-title">
                        Software Developer
                    </div>
                </div>
            </div>
        );
    }
}