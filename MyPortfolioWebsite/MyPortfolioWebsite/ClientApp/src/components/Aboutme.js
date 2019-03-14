import React, { Component } from 'react';
import aspnetcore_image from "./../images/aspnetcore.png";
import sql_image from "./../images/sql.png";
import react_image from "./../images/react.svg";
import redux_image from "./../images/redux.svg";
import html_image from "./../images/html.svg.png";
import sass_image from "./../images/sass.png";


export class AboutMe extends Component {
  displayName = AboutMe.name

  render() {
    return (
      <div className="aboutme-div">
        <div className="aboutme-div-header">
          About Me
          <hr style={{color: "rgb(255,255,255)", margin: 0, padding: 0}}/>
        </div>
        <div className="aboutme-div-content">
          Hey there!
          <br/>
          I am a self-taught developer, always looking for new exciting challenges and unique projects to work on.
          <br/>
          I am interested in machine learning and data science and it is a subject I would like to learn more about. I like gaming and as such I have some knowledge of programming with C# in Unity and enjoy thinking of gaming project ideas from time to time (would love to implement deep learning using unity someday).
          <br/>
          Not really a design/art person (I have tried using blender, gimp and unity's particle system but it just doesn't motivate me) as I end up getting frustrated over infinitely changing very small details.
        </div>
        <div className="aboutme-div-skills">
          <div className="aboutme-div-skills-midleft"></div>
          <div className="aboutme-div-skills-midright"></div>
          <div className="aboutme-div-skills-midrow"></div>
          <div className="aboutme-div-skills-aspnetcore">
            <img alt="Asp.Net Core logo" src={aspnetcore_image} />
          </div>
          <div className={["aboutme-div-skills-sql", "aboutme-div-skills-image"].join(' ')}>
            <img alt="SQL logo" src={sql_image} />
          </div>
          <div className={["aboutme-div-skills-react", "aboutme-div-skills-image"].join(' ')}>
            <img alt="React logo" src={react_image} />
          </div>
          <div className={["aboutme-div-skills-redux", "aboutme-div-skills-image"].join(' ')}>
            <img alt="Redux logo" src={redux_image} />
          </div>
          <div className={["aboutme-div-skills-html", "aboutme-div-skills-image"].join(' ')}>
            <img alt="HTML logo" src={html_image} />
          </div>
          <div className={["aboutme-div-skills-sass", "aboutme-div-skills-image"].join(' ')}>
            <img alt="SASS logo" src={sass_image} />
          </div>
        </div>
      </div>
    );
  }
}
