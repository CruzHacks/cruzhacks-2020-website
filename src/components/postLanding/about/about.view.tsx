import React from 'react';
import LeftBackdropView from './backdrop/leftbackdrop.view';
import RightBackdropView from './backdrop/rightbackdrop.view';

const PostLandingAboutView: React.FC = () => {
    return(
        <>
        <div className="post-landing-about__container">
            <LeftBackdropView />
            <RightBackdropView />
            <div className="post-landing-about__description-container">
                <div className="post-landing-about__title-container">
                    <span className="post-landing-about__title"> We're Not Just A Hackathon</span>
                </div>
                <div className="post-landing-about__text-container">
                    <span className="post-landing-about__text">
                        From January 17 to January 19, 2020, UCSC’s Stevenson Event Center was transformed 
                        into a bustling playground for our diverse group of over 600 hackers to turn their 
                        visions for social change into tangible projects. The 36 hours of hacking were as 
                        hectic as they were productive. As hackers downed bottle after bottle of Yerba Mate 
                        and Soylent, mentors and your representatives were available to advise teams on their 
                        project ideas and work out any challenges they encountered along the way.
                    </span>
                </div>
            </div>
        </div>
        </>
    );
}

export default PostLandingAboutView;