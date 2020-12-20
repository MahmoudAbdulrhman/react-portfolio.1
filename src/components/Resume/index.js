import React from 'react';
import myResume from '../../assets/images/resume.pdf';

function Resume() {
    return (
        <div id="content">
            <div class="post-container">
                <div class="post">
                    <div class="post-author">
                        <h1>Resume</h1>
                        <a href={myResume} target="blank">View PDF Version</a><br></br>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;