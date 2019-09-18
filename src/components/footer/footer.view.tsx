import React from 'react';

// import FooterBackdropView from './backdrop/footer-backdrop.view';
import FooterTextView from './text/footer-text.view';
import FooterButtonView from './buttons/footer-button.view';

const FooterView : React.FC = () => {
    return (
        <div className="footer-view-container">
            <FooterButtonView/>    
            <FooterTextView/>
        </div>
    );
};

export default FooterView;