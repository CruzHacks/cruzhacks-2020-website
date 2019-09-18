import React from 'react';

import FooterPillarsView from './footer-pillars.view';
import FooterTreeView from './footer-trees.view';

const FooterBackdropView: React.FC = () => {
    return (
        <>
            <FooterTreeView/>
            <FooterPillarsView/>
        </>
    );
};

export default FooterBackdropView;