import React, { useState } from 'react';

const ExperiencesView: React.FC = () => {
  const [experienceValues, setExperienceValues] = useState({
    firstHackathon: false,
    firstCruzhacks: false,
    participateQuestion: '',
    seeAtCruzhacks: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setExperienceValues({ ...experienceValues, [name]: value });
  };

  // NEED ONSUBMIT

  return (
    <>
      <div className="experiences">
        <h3 className="application__header">Experiences</h3>
        <form className="experiences__form">
          <section className="first-hackathon">
            <label htmlFor="first-hackathon" className="experiences__label">
              First Hackathon?
            </label>
            <div className="radio-button">
              <label className="radio-label">Yes</label>
              <input type="radio" name="first-hackathon" value="true" />
            </div>
            <div className="radio-button">
              <label className="radio-label">Yes</label>
              <input type="radio" name="first-hackathon" value="false" />
            </div>
          </section>

          <section className="first-cruzhacks">
            <label className="experiences__label">First Cruzhacks?</label>
            <div className="radio-button">
              <label className="radio-label">Yes</label>
              <input type="radio" name="first-cruzhacks" value="yes" />
            </div>
            <div className="radio-button">
              <label className="radio-label">No</label>
              <input type="radio" name="first-cruzhacks" value="no" />
            </div>
          </section>

          <section className="participate-question">
            <label className="experiences__label">
              Why do you want to participate? (500 chars)
            </label>
            <textarea
              name="participateQuestion"
              className="experiences__textarea"
              value={experienceValues.participateQuestion}
              onChange={handleInputChange}
            />
          </section>

          <section className="see-question">
            <label className="experiences__label">
              What would you like to see at CruzHacks 2020?* (500 chars)
            </label>
            <textarea
              name="seeAtCruzhacks"
              className="experiences__textarea"
              onChange={handleInputChange}
            />
          </section>
        </form>
      </div>
    </>
  );
};

export default ExperiencesView;
