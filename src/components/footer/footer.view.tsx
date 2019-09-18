import React from 'react';

// import FooterBackdropView from './backdrop/footer-backdrop.view';
// import FooterTextView from './text/footer-text.view';
// import FooterButtonView from './buttons/footer-button.view';

import FooterContentView from './content/footer-content.view';

const FooterView : React.FC = () => {
    return (
        <div className="footer-view__container">
            <FooterContentView/>
        </div>
    );
};

export default FooterView;