import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
    const [projects] = useState([
        {
            name: 'TransCard',
            desciption: 'Travel with ease with our new contactless virtual train ticket, transferCard.',
            link: 'https://transfercard.herokuapp.com/',
            github: 'https://github.com/itsrheine/transferCard'
        },
        {
            name: 'Travel Dashboard',
            desciption: 'Travel Search Engine',
            link: 'https://itsrheine.github.io/Travel-Dashboard/',
            github: 'https://github.com/MahmoudAbdulrhman/Travel-Dashboard'
        },
        {
            name: 'Tech Blog',
            description: 'Social media-like blog for Tech professionals',
            link: ' https://mahmoudabdulrhman.github.io/tech-blog/',
            github: 'https://github.com/MahmoudAbdulrhman/tech-blog'
        },
        {
            name: 'Note Taker',
            description: 'Virtual Notepad',
            link: 'https://murmuring-spire-94172.herokuapp.com/',
            github: 'https://github.com/MahmoudAbdulrhman/note-taker'
        },
        {
            name: 'Budget Tracker',
            description: 'Web & Mobile Interactive budget Tracker',
            link: 'https://hidden-anchorage-26025.herokuapp.com/',
            github: 'https://github.com/MahmoudAbdulrhman/-Budget-_Tracker-_-PWA-'
        },
        {
            name: 'Weather Dashboard',
            description: 'OpenWeather API Web Application',
            link: 'https://mahmoudabdulrhman.github.io/Weather-Dashboard/',
            github: 'https://github.com/MahmoudAbdulrhman/Weather-Dashboard'
        },
        {
            name: 'Team Profile Generator',
            description: 'Node based generator producing a web output',
            link: 'https://drive.google.com/file/d/1ob6g_fjY8XxvYGdIZAxM7VYQpcVfF-7J/view',
            github: 'https://github.com/MahmoudAbdulrhman/team-profile-generator'
        },
    ])

    return (
        <div id="content">
            <div class="post-container">
                <div class="post">
                    <div class="post-author">
                        <h1>Portfolio</h1>
                    </div>
                    
                    <div>
                        {projects.map((project, i) => (
                            <Project
                                project={project}
                                i={i}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;