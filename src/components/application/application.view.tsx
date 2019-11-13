import React from 'react';

const ApplicationView: React.FC = () => {
    return(
        <>
            <div className="application">
                <h3 className="application__header">Demographics</h3>
                <form className="application__form">
                <section>
                    <div className="application__first-name">
                        <label className="application__label">First Name</label>
                        <input className="application__input" type="text"/>
                    </div>
                
                    <div className="application__last-name">
                        <label className="application__label">Last Name</label>
                        <input className="application__input" type="text"/>
                    </div>
                    <br style={{clear:'both'}} />
                </section>
                </form>
            </div>
        </>
    );
}

export default ApplicationView;