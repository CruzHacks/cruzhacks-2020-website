import React from 'react';
import BackdropView from './backdrop/backdrop.view';

const PostLandingProjectsView: React.FC = () => {
    return(
        <>
            <div className="post-landing-projects__container">
                <BackdropView />
                <p className="post-landing-projects__title"> 64 Complete Hackathon Projects</p>
                <div className="post-landing-projects__button-container">
                    <a className="post-landing-projects__button" href="https://cruzhacks-2020.devpost.com/submissions" target="_blank" rel="noopener noreferrer">
                        <p className="post-landing-projects__button-text"> View all of the projects here </p>
                    </a>
                </div>
                
            </div>
        </>
    );
}

export default PostLandingProjectsView;