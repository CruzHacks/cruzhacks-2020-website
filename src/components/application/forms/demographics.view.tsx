import React from 'react';

const DemographicsView: React.FC = () => {
  return (
    <>
      <div className="demographics">
        <h3 className="application__header">Demographics</h3>
        <form className="demographics__form">
          <section className="first-last-section">
            <div className="demographics__first-name">
              <label className="demographics__label">First Name</label>
              <input id="first-name__input" type="text" />
            </div>

            <div className="demographics__last-name">
              <label className="demographics__label">Last Name</label>
              <input id="last-name__input" type="text" />
            </div>
            <br style={{ clear: 'both' }} />
          </section>
          <section className="email-section">
            <div className="demographics__email">
              <label className="demographics__label">Email</label>
              <input id="email__input" type="email" />
            </div>
          </section>
          <section className="password-section">
            <div className="demographics__password">
              <label className="demographics__label">
                Hack Portal Password
              </label>
              <input id="password__input" type="password" />
            </div>
          </section>
          <section className="age-gender-section">
            <div className="demographics__age">
              <label className="demographics__label">Age</label>
              <input id="age__input" type="number" />
            </div>
            <div className="demographics__gender">
              <label className="demographics__label">Gender</label>
              <div className="radio-button">
                <label className="radio-label">Female</label>
                <input type="radio" name="gender" value="female" checked />
              </div>
              <div className="radio-button">
                <label className="radio-label">Male</label>
                <input type="radio" name="gender" value="male" checked />
              </div>
              <div className="radio-button">
                <label className="radio-label">Trans</label>
                <input type="radio" name="gender" value="trans" checked />
              </div>
              <div className="radio-button">
                <label className="radio-label">Non-binary</label>
                <input type="radio" name="gender" value="non-binary" checked />
              </div>
              <div className="demographics__other-gender">
                <label className="demographics__gender-label">Other</label>
                <input id="other__input" type="text" />
              </div>
            </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default DemographicsView;
