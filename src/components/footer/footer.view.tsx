import React from 'react';

import FooterBackdropView from './backdrop/footer-backdrop.view';

const FooterView : React.FC = () => {
    return (
        <div className="footer-view-container">
            <FooterBackdropView />
        </div>
    );
};

export default FooterView;