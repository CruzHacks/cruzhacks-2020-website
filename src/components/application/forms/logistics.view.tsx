import React, { useState } from 'react';

const LogisticsView: React.FC = () => {

  const [logisticsValues, setLogisticsValues] = useState({
    dietaryRestrictions: false,
    sleep: false,
    transportation: false,
    park: false,
    specialAccomodations: ''
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setLogisticsValues({...logisticsValues, [name]: value});
  }

  // NEED ONSUBMIT

  return (
    <>
      <div className="logistics">
        <h3 className="application__header">Logistics</h3>
        <form className="logistics__form">
            <section className="place-to-sleep-section">
                <label className="logistics__label">Could you use a place to sleep?*</label>
                <div className="radio-button">
                    <label className="radio-label">Yes</label>
                    <input type="radio" name="place-to-sleep" value="true" />
                </div>
                <div className="radio-button">
                    <label className="radio-label">No</label>
                    <input type="radio" name="place-to-sleep" value="false" />
                </div>
            </section>
            <section className="transportation-section">
                <label className="logistics__label">Could you use help with transportation?*</label>
                <div className="radio-button">
                    <label className="radio-label">Yes</label>
                    <input type="radio" name="transportation" value="true" />
                </div>
                <div className="radio-button">
                    <label className="radio-label">No</label>
                    <input type="radio" name="transportation" value="false" />
                </div>
            </section>
            <section className="place-to-park-section">
                <label className="logistics__label">Do you need a place to park?*</label>
                <div className="radio-button">
                    <label className="radio-label">Yes</label>
                    <input type="radio" name="place-to-park" value="true" />
                </div>
                <div className="radio-button">
                    <label className="radio-label">No</label>
                    <input type="radio" name="place-to-park" value="false" />
                </div>
            </section>
            <section className="accommodations-section">
              <label className="logistics__label">Do you require any special accommodations?</label>
              <input name="accomadations" id="accommodations__input" type="text" onChange={handleInputChange}/>
          </section>
            <button type="submit" className="logistics__button">Submit</button>
        </form>
      </div>
    </>
  );
};

export default LogisticsView;
