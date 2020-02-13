import React from 'react';
import NavbarView from './navbar/navbar.view'

const PostLandingView: React.FC = () => {
    return(
        <>
            <div className="post-landing__container">
                <NavbarView/>
            </div>
        </>
    )
}

export default PostLandingView;