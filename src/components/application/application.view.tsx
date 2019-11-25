import React, { useState } from 'react';
import { DH_UNABLE_TO_CHECK_GENERATOR } from 'constants';
import axios from 'axios';
import { submitApplication } from '../../account';
import { useAuth0 } from '../../auth/auth';
//import DemographicsView from './forms/demographics.view';
//import ExperiencesView from './forms/experiences.view';
//import LogisticsView from './forms/logistics.view';

// import SchoolList from './us_institutions'
import schoolList from './schoolsList'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

// const finalList = SchoolList.filter((v,i,a) => a.indexOf(v) === i);

const ApplicationView: React.FC = () => {
  // BOOLEAN VALEUS BECOMING STRING

  const authContext = useAuth0()!;
  const { user, logout } = authContext;

  console.log(user);

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: user.email,
    phone: '',
    age: '',
    gender: '',
    ethnicity: '',
    school: '',
    gradYear: '',
    ucscStudent: false,
    ucscCollegeAffiliation: '',
    major: '',
    linkedinUrl: '',
    githubUrl: '',
    firstHackathon: false,
    firstCruzhacks: false,
    participateQuestion: '',
    technologyQuestion: '',
    seeAtCruzhacks: '',
    placeToSleep: false,
    transportation: false,
    placeToPark: false,
    specialAccomodations: '',
    codeOfConduct: false,
    mlhAffiliation: false,
    authoid: user.sub,
  });

  const [formValid, setFormValid] = useState({
    firstName: true,
    lastName: true,
    email: true,
    phone: true,
    age: true,
    school: true,
    gradYear: true,
    major: true,
    linkedinUrl: true,
    githubUrl: true,
    participateQuestion: true,
    technologyQuestion: true,
    seeAtCruzhacks: true,
    authoid: true,

    // check boxes
    codeOfConduct: false,
    mlhAffiliation: false,

    // radio buttons
    gender: false,
    ethnicity: false,
    ucscStudent: false,
    firstHackathon: false,
    firstCruzhacks: false,
    placeToSleep: false,
    transportation: false,
    placeToPark: false,

    // optional
    specialAccomodations: true,
    ucscCollegeAffiliation: true,
  });

  //   const freeFormGenderInput = React.createRef<HTMLInputElement>();
  const genderInputRefs = {
    femaleGenderRadioInput: React.createRef<HTMLInputElement>(),
    maleGenderRadioInput: React.createRef<HTMLInputElement>(),
    transGenderRadioInput: React.createRef<HTMLInputElement>(),
    nonBinaryGenderRadioInput: React.createRef<HTMLInputElement>(),
    freeFormGenderInput: React.createRef<HTMLInputElement>(),
  };

  const ucscCollegeRef = React.createRef<HTMLSelectElement>();

  const handleInputChange = event => {
    let { name, value } = event.target;
    switch (name) {
      case 'firstName':
        if (value.length < 100 && value.length > 0) {
          setFormValid({ ...formValid, [name]: true });
        } else {
          setFormValid({ ...formValid, [name]: false });
        }
        break;
      case 'lastName':
        if (value.length < 100 && value.length > 0) {
          setFormValid({ ...formValid, [name]: true });
        } else {
          setFormValid({ ...formValid, [name]: false });
        }
        break;
      case 'email':
        // console.log(name);
        // console.log(value);
        const emailRegExp = new RegExp(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        if (value.length < 256 && value.length > 0 && emailRegExp.test(value)) {
          setFormValid({ ...formValid, [name]: true });
        } else {
          setFormValid({ ...formValid, [name]: false });
        }
        break;
      case 'age':
        if (
          value.length <= 3 &&
          value.length > 0 &&
          Number.isInteger(parseInt(value))
        ) {
          setFormValid({ ...formValid, [name]: true });
        } else {
          setFormValid({ ...formValid, [name]: false });
        }
        break;
      case 'phone':
        const phoneNumRegExp = new RegExp(
          /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/
        );
        if (phoneNumRegExp.test(value)) {
          setFormValid({ ...formValid, [name]: true });
        } else {
          setFormValid({ ...formValid, [name]: false });
        }
        break;
      case 'gender':
        //   If the current change is in the freeform input, deslect the radio buttons.
        // If a radio is clicked, clear the free form gender input.
        const genderTextElement = genderInputRefs.freeFormGenderInput.current;
        const eventID = event.target.id;

        if (genderTextElement && eventID !== 'other__input') {
          genderTextElement.value = '';
        } else {
          if (genderInputRefs.femaleGenderRadioInput.current) {
            genderInputRefs.femaleGenderRadioInput.current.checked = false;
          }
          if (genderInputRefs.maleGenderRadioInput.current) {
            genderInputRefs.maleGenderRadioInput.current.checked = false;
          }
          if (genderInputRefs.transGenderRadioInput.current) {
            genderInputRefs.transGenderRadioInput.current.checked = false;
          }
          if (genderInputRefs.nonBinaryGenderRadioInput.current) {
            genderInputRefs.nonBinaryGenderRadioInput.current.checked = false;
          }
        }

        if (
          genderInputRefs.femaleGenderRadioInput.current ||
          genderInputRefs.maleGenderRadioInput.current ||
          genderInputRefs.transGenderRadioInput.current ||
          genderInputRefs.nonBinaryGenderRadioInput.current ||
          (genderTextElement && genderTextElement.value != '')
        ) {
          setFormValid({ ...formValid, [name]: true });
        } else {
          setFormValid({ ...formValid, [name]: false });
        }
        break;
      case 'ethnicity':
        if (value) {
          setFormValid({ ...formValid, [name]: true });
        }
        break;
      case 'ucscStudent':
        value = value === 'true';
        setFormValid({ ...formValid, [name]: value });

        if (ucscCollegeRef.current) {
          if (value === false) {
            ucscCollegeRef.current.value = '';
            setFormValid({ ...formValid, ucscCollegeAffiliation: true });
          } else if (ucscCollegeRef.current.value === '') {
            setFormValid({ ...formValid, ucscCollegeAffiliation: false });
          }
        } else if (value === true) break;
      case 'firstHackathon':
        if (value) {
          setFormValid({ ...formValid, [name]: true });
        }
        break;
      case 'firstCruzhacks':
        if (value) {
          setFormValid({ ...formValid, [name]: true });
        }
        break;
      case 'school':
        // need 1 more validation for alphanumber
        if (value.length < 320 && value.length > 0) {
          setFormValid({ ...formValid, [name]: true });
        }
        break;
      case 'gradYear':
        if (value.length == 4) {
          setFormValid({ ...formValid, [name]: true });
        } else {
          setFormValid({ ...formValid, [name]: false });
        }
        break;
      case 'major':
        if (value.length < 320 && value.length > 0) {
          setFormValid({ ...formValid, [name]: true });
        } else {
          setFormValid({ ...formValid, [name]: false });
        }
        break;
      case 'linkedinUrl':
        const linkedInRegexp = new RegExp(
          /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/
        );
        if (
          value.length < 256 &&
          value.length > 0 &&
          linkedInRegexp.test(value)
        ) {
          setFormValid({ ...formValid, [name]: true });
        } else {
          setFormValid({ ...formValid, [name]: false });
        }
        break;
      case 'githubUrl':
        const githubInRegexp = new RegExp(
          /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/
        );
        if (
          value.length < 256 &&
          value.length > 0 &&
          githubInRegexp.test(value)
        ) {
          setFormValid({ ...formValid, [name]: true });
        } else {
          setFormValid({ ...formValid, [name]: false });
        }

        break;
      case 'participateQuestion':
        if (value.length < 500 && value.length > 0) {
          setFormValid({ ...formValid, [name]: true });
        } else {
          setFormValid({ ...formValid, [name]: false });
        }
        break;
      case 'technologyQuestion':
        if (value.length < 500 && value.length > 0) {
          setFormValid({ ...formValid, [name]: true });
        } else {
          setFormValid({ ...formValid, [name]: false });
        }
        break;
      case 'seeAtCruzhacks':
        if (value.length < 500 && value.length > 0) {
          setFormValid({ ...formValid, [name]: true });
        } else {
          setFormValid({ ...formValid, [name]: false });
        }
        break;
      case 'placeToSleep':
        console.log(value);
        setFormValid({ ...formValid, [name]: true });
      case 'transportation':
        setFormValid({ ...formValid, [name]: true });
      case 'placeToPark':
        setFormValid({ ...formValid, [name]: true });
      case 'codeOfConduct':
        value = event.target.checked;
        setFormValid({ ...formValid, [name]: value });
        break;
      case 'mlhAffiliation':
        value = event.target.checked;
        setFormValid({ ...formValid, [name]: value });
        break;
    }

    console.log(formValid);

    setFormValues({ ...formValues, [name]: value });
  };

  const [trySubmission, setTrySubmission] = useState(false);
  // NEED API
  const handleApplicationSubmission = event => {
    console.log(formValues);
    event.preventDefault();
    let isValidForm = true;

    const requestBody = {};

    Object.keys(formValid).forEach(fieldName => {
      const value = formValid[fieldName];

      if (isValidForm === true && value === true) {
        // console.log(`${fieldName}: ${formValues[fieldName]}`);
        requestBody[fieldName.toLowerCase()] = formValues[fieldName];
      } else if (isValidForm === true) {
        setTrySubmission(true);
        console.log(`${fieldName} is invalid`);
        isValidForm = false;
      }
    });

    if (isValidForm === true) {
      submitApplication(requestBody)
        .then(response => {
          console.log("we're chilling");
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

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
                  className="name-error"
                  type="text"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                />
                {(!formValid.firstName ||
                  (trySubmission && formValues.firstName.length == 0)) && (
                  <p className="errors">First name is required.</p>
                )}
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
                {(!formValid.lastName ||
                  (trySubmission && formValues.lastName.length == 0)) && (
                  <p className="errors">Last name is required.</p>
                )}
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
                {(!formValid.email ||
                  (trySubmission && formValues.email.length == 0)) && (
                  <p className="errors">Valid email is required.</p>
                )}
              </div>
            </section>

            <section className="phone-section">
              <div className="demographics__phone-number">
                <label className="demographics__label">Phone Number</label>
                <input
                  name="phone"
                  id="phone-number__input"
                  type="text"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  required
                />
                {(!formValid.phone ||
                  (trySubmission && formValues.phone.length == 0)) && (
                  <p className="errors">Valid phone number is required.</p>
                )}
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
                {(!formValid.age ||
                  (trySubmission && formValues.age.length == 0)) && (
                  <p className="errors">Valid age is required.</p>
                )}
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
                    ref={genderInputRefs.femaleGenderRadioInput}
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
                    ref={genderInputRefs.maleGenderRadioInput}
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
                    ref={genderInputRefs.transGenderRadioInput}
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
                    ref={genderInputRefs.nonBinaryGenderRadioInput}
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
                    name="gender"
                    ref={genderInputRefs.freeFormGenderInput}
                  />
                </div>
                {trySubmission && !formValid.gender && (
                  <p className="errors">Required</p>
                )}
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
              {trySubmission && !formValid.ethnicity && (
                <p className="errors">Required</p>
              )}
            </section>

            <section className="edu-demographics-section">
              <div className="demographics__currSchool">
                <label className="demographics__label">School/University</label>

                  {/* <select className="currSchool__input" name="school" onChange={handleInputChange}>
                    <option aria-label="Select" value="select">Select School</option>
                    <option aria-label="international" value="intl">International</option>
                    {finalList.map(item => 
                      <option key={item} aria-label={item} value={item}>{item}</option>
                      )}
                  </select> */}
              </div>
              <div className="demographics__yog">
                <label htmlFor="yog__input" className="demographics__label">
                  Year of Graduation:
                </label>
                <input
                  name="gradYear"
                  id="yog__input"
                  aria-label="Year of Graduation"
                  aria-required="true"
                  type="number"
                  value={formValues.gradYear}
                  onChange={handleInputChange}
                />
                {(!formValid.gradYear ||
                  (trySubmission && formValues.gradYear.length == 0)) && (
                  <p className="errors">
                    Valid year of graduation is required.
                  </p>
                )}
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
                    name="ucscStudent"
                    value="true"
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
                    name="ucscStudent"
                    id="UCSC Student"
                    value="false"
                  />
                </div>
                {trySubmission && !formValid.ucscStudent && (
                  <p className="errors">Required</p>
                )}
              </div>
              {formValues.ucscStudent && (
                <div
                  className="demographics__college-affil"
                  onChange={handleInputChange}
                >
                  <label
                    htmlFor="College Affiliation"
                    className="demographics__label"
                  >
                    UCSC College Affiliation
                  </label>
                  <select
                    id="College Affiliation"
                    name="ucscCollegeAffiliation"
                    ref={ucscCollegeRef}
                  >
                    <option aria-label="Cowell College" value="cowell">
                      Cowell College
                    </option>
                    <option aria-label="Rachel Carson College" value="rcc">
                      Rachel Carson College
                    </option>
                    <option aria-label="Porter College" value="porter">
                      Porter College
                    </option>
                    <option aria-label="Kresge College" value="kresge">
                      Kresge College
                    </option>
                    <option aria-label="College 9" value="c9">
                      College 9
                    </option>
                    <option aria-label="College 10" value="c10">
                      College 10
                    </option>
                    <option aria-label="Crown College" value="crown">
                      Crown College
                    </option>
                    <option aria-label="Merill College" value="merill">
                      Merill College
                    </option>
                    <option aria-label="Stevenson College" value="stevenson">
                      Stevenson College
                    </option>
                    <option aria-label="Oakes College" value="oakes">
                      Oakes College
                    </option>
                  </select>
                </div>
              )}
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
                {(!formValid.major ||
                  (trySubmission && formValues.major.length == 0)) && (
                  <p className="errors">Major is required.</p>
                )}
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
              {trySubmission && !formValid.firstHackathon && (
                <p className="errors">Required</p>
              )}
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
                  name="firstCruzhacks"
                  aria-label="yes"
                  arua-required="true"
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
                  name="firstCruzhacks"
                  aria-label="no"
                  aria-required="true"
                  value="no"
                  onClick={handleInputChange}
                />
              </div>
              {trySubmission && !formValid.firstCruzhacks && (
                <p className="errors">Required</p>
              )}
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
              {(!formValid.participateQuestion ||
                (trySubmission &&
                  formValues.participateQuestion.length == 0)) &&
                formValues.participateQuestion.length == 0 && (
                  <p className="errors">Required</p>
                )}
              {!formValid.participateQuestion &&
                formValues.participateQuestion.length > 500 && (
                  <p className="errors">Over 500 characters</p>
                )}
            </section>

            <section className="technology-question">
              <label
                htmlFor="Where do you see technology pushing humanity’s goals?"
                className="experiences__label"
              >
                Where do you see technology pushing humanity’s goals? (500
                chars)
              </label>
              <textarea
                name="technologyQuestion"
                className="experiences__textarea"
                aria-label="Where do you see technology pushing humanity’s goals?"
                aria-required="true"
                id="Where do you see technology pushing humanity’s goals?"
                value={formValues.technologyQuestion}
                onChange={handleInputChange}
              />
              {(!formValid.technologyQuestion ||
                (trySubmission && formValues.technologyQuestion.length == 0)) &&
                formValues.technologyQuestion.length == 0 && (
                  <p className="errors">Required</p>
                )}
              {!formValid.technologyQuestion &&
                formValues.technologyQuestion.length > 500 && (
                  <p className="errors">Over 500 characters</p>
                )}
            </section>

            <section className="see-question">
              <label
                htmlFor="What would you like to see at CruzHacks 2020?"
                className="experiences__label"
              >
                What would you like to see at CruzHacks 2020? (500 chars)
              </label>
              <textarea
                name="seeAtCruzhacks"
                aria-label="What would you like to see at CruzHacks 2020?"
                aria-required="true"
                id="What would you like to see at CruzHacks 2020?"
                className="experiences__textarea"
                value={formValues.seeAtCruzhacks}
                onChange={handleInputChange}
              />
              {(!formValid.seeAtCruzhacks ||
                (trySubmission && formValues.seeAtCruzhacks.length == 0)) &&
                formValues.seeAtCruzhacks.length == 0 && (
                  <p className="errors">Required</p>
                )}
              {!formValid.seeAtCruzhacks &&
                formValues.seeAtCruzhacks.length > 500 && (
                  <p className="errors">Over 500 characters</p>
                )}
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
                  name="placeToSleep"
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
                  name="placeToSleep"
                  aria-label="no"
                  aria-required="true"
                  value="false"
                  onClick={handleInputChange}
                />
              </div>
              {trySubmission && !formValid.placeToSleep && (
                <p className="errors">Required</p>
              )}
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
              {trySubmission && !formValid.transportation && (
                <p className="errors">Required</p>
              )}
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
                  className="park"
                  onClick={handleInputChange}
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
                  className="park"
                  onClick={handleInputChange}
                />
              </div>
              {trySubmission && !formValid.placeToPark && (
                <p className="errors">Required</p>
              )}
            </section>
            <section className="accommodations-section">
              <label
                htmlFor="accommodations__input"
                className="logistics__label"
              >
                Do you require any special accommodations? (Including physical
                and dietary restrictions | 150 chars)
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

            <section className="mlh-section">
              <div className="checkbox-button">
                <input
                  type="checkbox"
                  name="codeOfConduct"
                  aria-label="yes"
                  arua-required="true"
                  value="yes"
                  onClick={handleInputChange}
                />
                <label htmlFor="yes" className="checkbox-label">
                  I have read agree to the{' '}
                  <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">
                    MLH Code of Conduct.
                  </a>
                </label>
              </div>
              <div className="checkbox-button">
                <input
                  type="checkbox"
                  name="mlhAffiliation"
                  aria-label="no"
                  aria-required="true"
                  value="no"
                  onClick={handleInputChange}
                />
                <label htmlFor="no" className="checkbox-label">
                  I authorize you to share my application/registration
                  information for event administration, ranking, MLH
                  administration, pre- and post-event informational e-mails, and
                  occasional messages about hackathons in-line with the{' '}
                  <a href="https://mlh.io/privacy">MLH Privacy Policy.</a> I
                  further agree to the terms of both the MLH Contest Terms and
                  Conditions and the{' '}
                  <a href="https://mlh.io/privacy">MLH Privacy Policy.</a>
                </label>
              </div>
            </section>
            <button
              type="submit"
              className="application__button"
              onClick={handleApplicationSubmission}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ApplicationView;
