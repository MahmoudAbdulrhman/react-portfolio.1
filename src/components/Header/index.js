import React from 'react';

function Header(props) {
    return (
        <div id="header">
            <div class="container">
                    <a href="https://github.com/MahmoudAbdulrhman/my-porfolio" id="header-title">
                        Mahmoud<a href='https://github.com/MahmoudAbdulrhman/my-porfolio'>.</a>Abdulrhman
                    </a>
                    <ul id="header-nav">
                    {props.children}
                    </ul>
            </div>
        </div>
    );
}

export default Header;