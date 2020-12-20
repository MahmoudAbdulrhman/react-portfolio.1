import React from 'react';
import defaultPhoto from '../../assets/images/defaultPhoto.JPG';


function About() {
    return (
        <div id="content">
            <div class="container">
                <div class="about">
                    <div class="about-author">
                        <img className="defaultPhoto" src={defaultPhoto} alt="Me at an event" ></img>
                    </div>
                    <h3 class="post-title">About Me</h3>
                    <div class="post-content">
                        <p>My name is Mahmoud Abdulrhman, my friends and family call me 'Moe'.  I am a sales advisore . 
                        </p>
                        <p>Currently, I am pursuing Full Stack Web Development at UC Berkeley Extension.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;