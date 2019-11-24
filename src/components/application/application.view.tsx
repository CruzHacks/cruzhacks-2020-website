import React, { useState } from 'react';
import { DH_UNABLE_TO_CHECK_GENERATOR } from 'constants';
//import DemographicsView from './forms/demographics.view';
//import ExperiencesView from './forms/experiences.view';
//import LogisticsView from './forms/logistics.view';

const ApplicationView: React.FC = () => {
  // BOOLEAN VALEUS BECOMING STRING
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: undefined,
    gender: '',
    ethnicity: '',
    school: '',
    yearOfGrad: '',
    ucscStudent: false,
    collegeAffiliation: '',
    major: '',
    linkedinUrl: '',
    githubUrl: '',
    firstHackathon: false,
    firstCruzhacks: false,
    participateQuestion: '',
    seeAtCruzhacks: '',
    dietaryRestrictions: false,
    placeToSleep: false,
    transportation: false,
    placeToPark: false,
    specialAccomodations: '',
  });

  const [formValid, setFormValid] = useState({
    firstName: false,
    lastName: false,
    email: false,
    age: false,
    school: false,
    yearOfGrad: false,
    major: false,
    linkedinUrl: false,
    githubUrl: false,
    participateQuestion: false,
    seeAtCruzhacks: false,
    specialAccomodations: false,
  });

  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'firstName':
        if (value.length < 100 && value.length > 0) {
          setFormValid({...formValid, [name]: true});
        }
        break;
      case 'lastName':
        if (value.length < 100 && value.length > 0) {
          setFormValid({...formValid, [name]: true});
        }
        break;
      case 'email':
        // console.log(name);
        // console.log(value);
        const emailRegExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (value.length < 256 && value.length > 0 && emailRegExp.test(value)) {
          setFormValid({...formValid, [name]: true});
        }
        break;
      case 'age':
        if (value.length <=3 && value.length > 0) {
          setFormValid({...formValid, [name]: true});
        }
        break;
      case 'school':
        // need 1 more validation for alphanumber
        if (value.length < 320 && value.length > 0) {
          setFormValid({...formValid, [name]: true});
        }
        break;
      case 'yearOfGrad':
        if (value.length == 4) {
          setFormValid({...formValid, [name]: true});
        }
        break;
      case 'major':
        if (value.length < 320 && value.length > 0) {
          setFormValid({...formValid, [name]: true});
        }
        break;
      case 'linkedinUrl':
        const linkedInRegexp = new RegExp(/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/)
        if (value.length < 256 && value.length > 0 && linkedInRegexp.test(value)) {
          setFormValid({...formValid, [name]: true});
        }
        break;
      case 'githubUrl':
      const githubInRegexp = new RegExp(/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/)
        if (value.length < 256 && value.length > 0 && githubInRegexp.test(value)) {
          setFormValid({...formValid, [name]: true});
        }
        break;
      case 'participateQuestion':
        if (value.length < 500 && value.length > 0) {
          setFormValid({...formValid, [name]: true});
        }
        break;
      case 'seeAtCruzhacks':
        if (value.length < 500 && value.length > 0) {
          setFormValid({...formValid, [name]: true});
        }
        break;
    }
    setFormValues({ ...formValues, [name]: value });
  };

  const validForm = () => {
    for (const [key, value] of Object.entries(formValid)) {
    //   console.log(`${key} : ${value}`);
      if (!value) {
        return false;
      }
    }
    return true;
  }

  // NEED API
  const handleApplicationSubmission = event => {
    console.log(formValues);
    event.preventDefault();
  };

  const validform = validForm();

  return (
    <>
      <div className="application">
        <div className="application__titleBar">
          <span className="application__titleBar-text">APPLICATION</span>
        </div>
        <div className="demographics">
          <h3 className="demographics__header">Demographics</h3>
          <form className="demographics__form">
          <section className="first-last-section">
            <div className="demographics__first-name">
              <label className="demographics__label">First Name</label>
              <input
                name="firstName"
                id="first-name__input"
                type="text"
                value={formValues.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="demographics__last-name">
              <label className="demographics__label">Last Name</label>
              <input
                name="lastName"
                id="last-name__input"
                type="text"
                value={formValues.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <br style={{ clear: 'both' }} />
          </section>
          <section className="email-section">
            <div className="demographics__email">
              <label className="demographics__label">Email</label>
              <input
                name="email"
                id="email__input"
                type="email"
                value={formValues.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </section>
            <section className="age-gender-section">
              <div className="demographics__age">
                <label htmlFor="age" className="demographics__label">
                  Age
                </label>
                <input
                  name="age"
                  id="age__input"
                  aria-label="age"
                  aria-required="true"
                  type="number"
                  value={formValues.age}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div
                className="demographics__gender"
                onChange={handleInputChange}
              >
                <label htmlFor="gender" className="demographics__label">
                  Gender
                </label>
                <div className="radio-button">
                  <label htmlFor="female" className="radio-label">
                    Female
                  </label>
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    aria-label="female"
                    aria-required="true"
                    value="female"
                  />
                </div>
                <div className="radio-button">
                  <label htmlFor="male" className="radio-label">
                    Male
                  </label>
                  <input
                    type="radio"
                    name="gender"
                    aria-label="male"
                    aria-required="true"
                    id="male"
                    value="male"
                  />
                </div>
                <div className="radio-button">
                  <label htmlFor="trans" className="radio-label">
                    Trans
                  </label>
                  <input
                    type="radio"
                    name="gender"
                    aria-label="trans"
                    aria-required="true"
                    id="trans"
                    value="trans"
                  />
                </div>
                <div className="radio-button">
                  <label htmlFor="nonBinary" className="radio-label">
                    Non-binary
                  </label>
                  <input
                    type="radio"
                    name="gender"
                    aria-label="Non-binary"
                    aria-required="true"
                    id="nonBinary"
                    value="non-binary"
                  />
                </div>
                <div className="demographics__other-gender">
                  <label
                    htmlFor="other__input"
                    className="demographics__gender-label"
                  >
                    Other
                  </label>
                  <input
                    id="other__input"
                    aria-label="Other"
                    aria-required="true"
                    type="text"
                  />
                </div>
              </div>
              <br style={{ clear: 'both' }} />
            </section>

            <section className="ethnicity-section">
              <div
                className="demographics__ethnicity"
                onChange={handleInputChange}
              >
                <label htmlFor="ethnicity" className="demographics__label">
                  Ethnicity
                </label>
                <div className="radio-button-spaced">
                  <label htmlFor="Asian" className="radio-label">
                    Asian
                  </label>
                  <input
                    type="radio"
                    aria-label="Asian"
                    aria-required="true"
                    id="Asian"
                    name="ethnicity"
                    value="asian"
                  />
                </div>
                <div className="radio-button-spaced">
                  <label htmlFor="Black" className="radio-label">
                    Black
                  </label>
                  <input
                    type="radio"
                    aria-label="Black"
                    aria-required="true"
                    id="Black"
                    name="ethnicity"
                    value="black"
                  />
                </div>
                <div className="radio-button-spaced">
                  <label htmlFor="Chicanx or Latinx" className="radio-label">
                    Chicanx or Latinx
                  </label>
                  <input
                    type="radio"
                    aria-label="Chicanx or Latinx"
                    aria-required="true"
                    name="ethnicity"
                    id="Chicanx or Latix"
                    value="chicanxOrLatinx"
                  />
                </div>
                <div className="radio-button-spaced">
                  <label htmlFor="Pacific Islander" className="radio-label">
                    Pacific Islander
                  </label>
                  <input
                    type="radio"
                    aria-label="Pacific Islander"
                    aria-required="true"
                    id="Pacific Islander"
                    name="ethnicity"
                    value="pacificIslander"
                  />
                </div>
                <div className="radio-button-spaced">
                  <label htmlFor="White" className="radio-label">
                    White
                  </label>
                  <input
                    type="radio"
                    aria-label="White"
                    aria-required="true"
                    id="White"
                    name="ethnicity"
                    value="white"
                  />
                </div>
                <div className="radio-button-spaced">
                  <label htmlFor="Mixed" className="radio-label">
                    Mixed
                  </label>
                  <input
                    type="radio"
                    aria-label="Mixed"
                    aria-required="true"
                    id="mixed"
                    name="ethnicity"
                    value="mixed"
                  />
                </div>
              </div>
            </section>

            <section className="edu-demographics-section">
              <div className="demographics__yog">
                <label htmlFor="yog__input" className="demographics__label">
                  Year of Graduation:
                </label>
                <input
                  name="yearOfGrad"
                  id="yog__input"
                  aria-label="Year of Graduation"
                  aria-required="true"
                  type="number"
                  value={formValues.yearOfGrad}
                  onChange={handleInputChange}
                />
              </div>
              <div
                className="demographics__ucsc-student"
                onChange={handleInputChange}
              >
                <label htmlFor="UCSC Student" className="demographics__label">
                  UCSC Student
                </label>
                <div className="radio-button-spaced">
                  <label htmlFor="yes" className="radio-label">
                    Yes
                  </label>
                  <input
                    type="radio"
                    aria-label="yes"
                    aria-required="true"
                    id="UCSC Student"
                    name="ucsc-student"
                    value="yes"
                  />
                </div>
                <div className="radio-button-spaced">
                  <label htmlFor="no" className="radio-label">
                    No
                  </label>
                  <input
                    type="radio"
                    aria-label="no"
                    aria-required="true"
                    name="ucsc-student"
                    id="UCSC Student"
                    value="no"
                  />
                </div>
              </div>
              <div
                className="demographics__college-affil"
                onChange={handleInputChange}
              >
                <label
                  htmlFor="College Affiliation"
                  className="demographics__label"
                >
                  College Affiliation
                </label>
                <select id="College Affiliation">
                  <option aria-label="Rachel Carson College" value="rcc">
                    Rachel Carson College
                  </option>
                  <option aria-label="Porter College" value="porter">
                    Porter College
                  </option>
                  <option aria-label="Kresge College" value="kresge">
                    Kresge College
                  </option>
                  <option aria-label="College 8" value="c8">
                    College 8
                  </option>
                  <option aria-label="College 9" value="c9">
                    College 9
                  </option>
                  <option aria-label="Crown College" value="crown">
                    Crown College
                  </option>
                  <option aria-label="Merill College" value="meril">
                    Merill College
                  </option>
                  <option aria-label="Stevenson College" value="stevenson">
                    Stevenson College
                  </option>
                </select>
              </div>
              <br style={{ clear: 'both' }} />
            </section>

            <section className="major-section">
              <div className="demographics__major">
                <label htmlFor="major__input" className="demographics__label">
                  Major/Field of Study
                </label>
                <input
                  name="major"
                  id="major__input"
                  aria-label="Major or Field of Study"
                  aria-required="true"
                  type="text"
                  value={formValues.major}
                  onChange={handleInputChange}
                />
              </div>
            </section>
            <section className="linkedin-section">
              <div className="demographics__major">
                <label
                  htmlFor="linkedin__input"
                  className="demographics__label"
                >
                  LinkedIn URL
                </label>
                <input
                  name="linkedinUrl"
                  id="linkedin__input"
                  aria-label="LinkedIn URL"
                  aria-required="true"
                  type="text"
                  value={formValues.linkedinUrl}
                  onChange={handleInputChange}
                />
              </div>
            </section>
            <section className="github-section">
              <div className="demographics__major">
                <label htmlFor="github__input" className="demographics__label">
                  GitHub URL
                </label>
                <input
                  name="githubUrl"
                  id="github__input"
                  aria-label="GitHub URL"
                  aria-required="true"
                  type="text"
                  value={formValues.githubUrl}
                  onChange={handleInputChange}
                />
              </div>
            </section>
            <section className="resume-section">
              <div className="demographics__major">
                <label htmlFor="resume__input" className="demographics__label">
                  Resume Upload
                </label>
                <input
                  id="resume__input"
                  aria-label="Resume Input"
                  aria-required="true"
                  type="file"
                />
              </div>
            </section>
          </form>
        </div>
        <div className="experiences">
          <h3 className="experiences__header">Experiences</h3>
          <form className="experiences__form">
            <section className="first-hackathon">
              <label htmlFor="firstHackathon" className="experiences__label">
                First Hackathon?
              </label>
              <div className="radio-button">
                <label htmlFor="yes" className="radio-label">
                  Yes
                </label>
                <input
                  type="radio"
                  name="firstHackathon"
                  aria-label="yes"
                  aria-required="true"
                  value="true"
                  onChange={handleInputChange}
                />
              </div>
              <div className="radio-button">
                <label htmlFor="no" className="radio-label">
                  No
                </label>
                <input
                  type="radio"
                  name="firstHackathon"
                  aria-label="no"
                  aria-required="true"
                  value="false"
                  onChange={handleInputChange}
                />
              </div>
            </section>

            <section className="first-cruzhacks">
              <label htmlFor="first-cruzhacks" className="experiences__label">
                First CruzHacks?
              </label>
              <div className="radio-button">
                <label htmlFor="yes" className="radio-label">
                  Yes
                </label>
                <input
                  type="radio"
                  name="first-cruzhacks"
                  aria-label="yes"
                  arua-required="true"
                  value="yes"
                  onClick={handleInputChange}
                />
              </div>
              <div className="radio-button">
                <label htmlFor="no" className="radio-label">
                  No
                </label>
                <input
                  type="radio"
                  name="first-cruzhacks"
                  aria-label="no"
                  aria-required="true"
                  value="no"
                  onClick={handleInputChange}
                />
              </div>
            </section>

            <section className="participate-question">
              <label
                htmlFor="Why do you want to participate?"
                className="experiences__label"
              >
                Why do you want to participate? (500 chars)
              </label>
              <textarea
                name="participateQuestion"
                className="experiences__textarea"
                aria-label="Why do you want to participate?"
                aria-required="true"
                id="Why do you want to participate?"
                value={formValues.participateQuestion}
                onChange={handleInputChange}
              />
            </section>

            <section className="see-question">
              <label
                htmlFor="What would you like to see at CruzHacks 2020?"
                className="experiences__label"
              >
                What would you like to see at CruzHacks 2020?* (500 chars)
              </label>
              <textarea
                name="seeAtCruzhacks"
                aria-label="What would you like to see at CruzHacks 2020?"
                aria-required="true"
                id="What would you like to see at CruzHacks 2020?"
                className="experiences__textarea"
                onChange={handleInputChange}
              />
            </section>
          </form>
        </div>
        <div className="logistics">
          <h3 className="logistics__header">Logistics</h3>
          <form
            className="logistics__form"
            onSubmit={handleApplicationSubmission}
          >
            <section className="place-to-sleep-section">
              <label
                htmlFor="Could you use a place to sleep?"
                className="logistics__label"
              >
                Could you use a place to sleep?*
              </label>
              <div className="radio-button">
                <label htmlFor="sleep" className="radio-label">
                  Yes
                </label>
                <input
                  type="radio"
                  aria-label="yes"
                  aria-required="true"
                  name="sleep"
                  value="true"
                  onClick={handleInputChange}
                />
              </div>
              <div className="radio-button">
                <label htmlFor="no" className="radio-label">
                  No
                </label>
                <input
                  type="radio"
                  name="sleep"
                  aria-label="no"
                  aria-required="true"
                  value="false"
                  onClick={handleInputChange}
                />
              </div>
            </section>
            <section className="transportation-section">
              <label
                htmlFor="Could you use help with transportation?"
                className="logistics__label"
              >
                Could you use help with transportation?*
              </label>
              <div className="radio-button">
                <label htmlFor="yes" className="radio-label">
                  Yes
                </label>
                <input
                  type="radio"
                  aria-label="yes"
                  aria-required="true"
                  id="Could you use help with transportation?"
                  name="transportation"
                  value="true"
                  onClick={handleInputChange}
                />
              </div>
              <div className="radio-button">
                <label htmlFor="no" className="radio-label">
                  No
                </label>
                <input
                  type="radio"
                  name="transportation"
                  aria-label="no"
                  aria-required="true"
                  id="Could you use help with transportation?"
                  value="false"
                  onClick={handleInputChange}
                />
              </div>
            </section>
            <section className="place-to-park-section">
              <label htmlFor="park" className="logistics__label">
                Do you need a place to park?*
              </label>
              <div className="radio-button">
                <label htmlFor="yes" className="radio-label">
                  Yes
                </label>
                <input
                  type="radio"
                  aria-label="No"
                  aria-required="true"
                  name="placeToPark"
                  id="park"
                  value="true"
                />
              </div>
              <div className="radio-button">
                <label className="radio-label">No</label>
                <input
                  type="radio"
                  name="placeToPark"
                  aria-label="No"
                  aria-required="true"
                  value="false"
                  id="park"
                  onClick={handleInputChange}
                />
              </div>
            </section>
            <section className="accommodations-section">
              <label
                htmlFor="accommodations__input"
                className="logistics__label"
              >
                Do you require any special accommodations? (150 chars)
              </label>
              <input
                name="accomadations"
                id="accommodations__input"
                aria-label="Do you require any special accommodations?"
                aria-required="true"
                type="text"
                onChange={handleInputChange}
              />
            </section>
            <button type="submit" className="application__button" onClick={handleApplicationSubmission} >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ApplicationView;
