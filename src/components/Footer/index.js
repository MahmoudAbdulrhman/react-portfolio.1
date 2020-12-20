import React from 'react';
import Github from '../../assets/images/github.png';
import LinkedIn from '../../assets/images/linkedin.png';


function Footer() {

    return (
        <div id="footer">
            <div class="container">
                <div class="column">
                    <h4>Connect with Me</h4>
                    <p>
                        <a href="https://github.com/MahmoudAbdulrhman" target="blank"><img src={Github} alt="github"></img></a>
                        <a href="linkedin.com/in/mahmoud-abdulrhman-93964328" target="blank"><img src={LinkedIn} alt="linkedin"></img></a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;