import React from 'react';

const ApplicationView: React.FC = () => {
    return(
        <>
            <div className="application">
                <h3 className="application__header">Demographics</h3>
                <form className="application__form">
                <section className="first-last-section">
                    <div className="application__first-name">
                        <label className="application__label">First Name</label>
                        <input id="first-name__input" type="text"/>
                    </div>
                
                    <div className="application__last-name">
                        <label className="application__label">Last Name</label>
                        <input id="last-name__input" type="text"/>
                    </div>
                    <br style={{clear:'both'}} />
                </section>
                <section className="email-section">
                    <div className="application__email">
                        <label className="application__label">Email</label>
                        <input id="email__input" type="email"/>
                    </div>
                </section>
                <section className="password-section">
                    <div className="application__password">
                        <label className="application__label">Hack Portal Password</label>
                        <input id="password__input" type="password"/>
                    </div>
                </section>
                <section className="age-gender-section">
                    <div className="application__age">
                        <label className="application__label">Age</label>
                        <input id="age__input" type="number"/>
                    </div>
                    <div className="application__gender">
                        <label className="application__label">Gender</label>
                        <div className="radio-button">
                            <label className="radio-label">Female</label>
                            <input type="radio" name="gender" value="female" checked/>
                        </div>
                        <div className="radio-button">
                            <label className="radio-label">Male</label>
                            <input type="radio" name="gender" value="male" checked/>
                        </div>
                        <div className="radio-button">
                            <label className="radio-label">Trans</label>
                            <input type="radio" name="gender" value="trans" checked/>
                        </div>
                        <div className="radio-button">
                            <label className="radio-label">Non-binary</label>
                            <input type="radio" name="gender" value="non-binary" checked/>
                        </div>
                        <div className="application__other-gender">
                            <label className="application__gender-label">Other</label>
                            <input id="other__input" type="text"/>
                        </div>
                    </div>
                </section>
                </form>
            </div>
        </>
    );
}

export default ApplicationView;