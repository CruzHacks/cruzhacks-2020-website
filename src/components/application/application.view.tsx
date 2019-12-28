import React, { useState } from 'react';
import { submitApplication, uploadResume } from '../../account';
import Auth0UserType from '../types/Auth0UserType';

type ApplicationViewType = {
  user: Auth0UserType;
};

const ApplicationView: React.FC<ApplicationViewType> = ({ user, ...rest }) => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: user.email,
    phone: '',
    age: '',
    gender: '',
    resume: '',
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

  const [apiStatusUpdates, setApiStatusUpdates] = useState({
    appSubmissionInProgress: false,
  });

  const [formValid, setFormValid] = useState({
    firstName: true,
    lastName: true,
    email: true,
    phone: true,
    age: true,
    school: true,
    resume: false,
    gradYear: true,
    major: true,
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
    linkedinUrl: true,
    githubUrl: true,

    appSubmittedSuccessfully: true,
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
        if (value.length <= 100 && value.length > 0) {
          setFormValid({ ...formValid, [name]: true });
        } else {
          setFormValid({ ...formValid, [name]: false });
        }
        break;
      case 'lastName':
        if (value.length <= 100 && value.length > 0) {
          setFormValid({ ...formValid, [name]: true });
        } else {
          setFormValid({ ...formValid, [name]: false });
        }
        break;
      case 'age':
        if (
          value.length < 3 &&
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
        if (
          value.length <= 20 &&
          value.length > 0 &&
          phoneNumRegExp.test(value)
        ) {
          setFormValid({ ...formValid, [name]: true });
        } else {
          setFormValid({ ...formValid, [name]: false });
        }
        break;
      case 'gender':
        // If the current change is in the freeform input, deslect the radio buttons.
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
          (genderTextElement &&
            genderTextElement.value.length > 0 &&
            genderTextElement.value.length <= 320)
        ) {
          if (genderTextElement && genderTextElement.value.length <= 320)
            setFormValid({ ...formValid, [name]: true });
          else if (!genderTextElement) {
            setFormValid({ ...formValid, [name]: true });
          } else {
            setFormValid({ ...formValid, [name]: false });
          }
        }
        break;
      case 'ethnicity':
        if (value) {
          setFormValid({ ...formValid, [name]: true });
        }
        break;
      case 'ucscStudent':
        value = value === 'true';
        setFormValid({ ...formValid, [name]: true });

        break;
      case 'resume':
        value = event.target.files[0];
        if (!value || value.type === 'application/pdf') {
          setFormValid({ ...formValid, [name]: true });
        } else {
          setFormValid({ ...formValid, [name]: false });
        }
        break;
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
        const schoolRegExp = new RegExp(/[0-9]/);
        if (
          value.length <= 320 &&
          value.length > 0 &&
          !schoolRegExp.test(value)
        ) {
          setFormValid({ ...formValid, [name]: true });
        } else {
          setFormValid({ ...formValid, [name]: false });
        }
        break;
      case 'gradYear':
        if (value.length === 4) {
          setFormValid({ ...formValid, [name]: true });
        } else {
          setFormValid({ ...formValid, [name]: false });
        }
        break;
      case 'major':
        if (value.length <= 320 && value.length > 0) {
          setFormValid({ ...formValid, [name]: true });
        } else {
          setFormValid({ ...formValid, [name]: false });
        }
        break;
      case 'linkedinUrl':
        // const linkedInRegexp = new RegExp(
        //   /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/
        // );
        // if (
        //   value.length < 256 &&
        //   linkedInRegexp.test(value)
        // ) {
        //   setFormValid({ ...formValid, [name]: true });
        // } else {
        //   setFormValid({ ...formValid, [name]: false });
        // }

        setFormValid({ ...formValid, [name]: value.length <= 256 });

        break;
      case 'githubUrl':
        // const githubInRegexp = new RegExp(
        //   /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/
        // );
        // if (
        //   value.length < 256 &&
        //   value.length >= 0 &&
        //   githubInRegexp.test(value)
        // ) {
        //   setFormValid({ ...formValid, [name]: true });
        // } else {
        //   setFormValid({ ...formValid, [name]: false });
        // }

        setFormValid({ ...formValid, [name]: value.length <= 256 });

        break;
      case 'participateQuestion':
        if (!(value.length > 500) && value.length > 0) {
          setFormValid({ ...formValid, [name]: true });
        } else {
          setFormValid({ ...formValid, [name]: false });
        }
        break;
      case 'technologyQuestion':
        if (!(value.length > 500) && value.length > 0) {
          setFormValid({ ...formValid, [name]: true });
        } else {
          setFormValid({ ...formValid, [name]: false });
        }
        break;
      case 'seeAtCruzhacks':
        if (!(value.length > 500) && value.length > 0) {
          setFormValid({ ...formValid, [name]: true });
        } else {
          setFormValid({ ...formValid, [name]: false });
        }
        break;
      case 'placeToSleep':
        setFormValid({ ...formValid, [name]: true });
        break;
      case 'transportation':
        setFormValid({ ...formValid, [name]: true });
        break;

      case 'placeToPark':
        setFormValid({ ...formValid, [name]: true });
        break;

      case 'codeOfConduct':
        value = event.target.checked;
        setFormValid({ ...formValid, [name]: value });
        break;
      case 'mlhAffiliation':
        value = event.target.checked;
        setFormValid({ ...formValid, [name]: value });
        break;
    }

    if (value === 'true' || value === 'false') {
      value = value === 'true';
    }

    setFormValues({ ...formValues, [name]: value });
  };

  const [trySubmission, setTrySubmission] = useState(false);

  const handleApplicationSubmission = event => {
    event.preventDefault();
    let isValidForm = true;
    const requestBody = { resume: undefined };

    setFormValid({ ...formValid, appSubmittedSuccessfully: true });
    formValid.appSubmittedSuccessfully = true;

    Object.keys(formValid).forEach(fieldName => {
      const value = formValid[fieldName];

      if (isValidForm === true && value === true) {
        if (fieldName !== 'appSubmittedSuccessfully') {
          requestBody[fieldName.toLowerCase()] = formValues[fieldName];
        }
      } else if (isValidForm === true) {
        setTrySubmission(true);
        isValidForm = false;
      }
    });
    if (isValidForm === true) {
      setApiStatusUpdates({
        ...apiStatusUpdates,
        appSubmissionInProgress: true,
      });
      uploadResume(user.email, formValues.resume)
        .then(response => {
          delete requestBody.resume;

          submitApplication(requestBody)
            .then(response => {
              setFormValid({ ...formValid, appSubmittedSuccessfully: true });
              window.location.reload(false);
            })
            .catch(error => {
              setApiStatusUpdates({
                ...apiStatusUpdates,
                appSubmissionInProgress: false,
              });
              setFormValid({ ...formValid, appSubmittedSuccessfully: false });
            });
        })
        .catch(error => {
          setApiStatusUpdates({
            ...apiStatusUpdates,
            appSubmissionInProgress: false,
          });
          setFormValid({ ...formValid, appSubmittedSuccessfully: false });
        });
    } else {
      //setFormValid({ ...formValid, criticalError: true });
    }
  };

  return (
    <>
      <form onSubmit={handleApplicationSubmission} noValidate>
        <div className="application">
          <div className="application__titleBar">
            <span className="application__titleBar-text">APPLICATION</span>
          </div>
          <div className="demographics">
            <h3 className="demographics__header">Demographics</h3>

            <div className="demographics__form">
              <section className="first-last-section">
                <div className="demographics__first-name">
                  <label className="demographics__label">First Name*</label>
                  <input
                    name="firstName"
                    id="first-name__input"
                    className="name-error"
                    type="text"
                    value={formValues.firstName}
                    onChange={handleInputChange}
                  />
                  {(!formValid.firstName ||
                    (trySubmission && formValues.firstName.length === 0)) && (
                    <p className="errors">First name is required.</p>
                  )}
                </div>
                <div className="demographics__last-name">
                  <label className="demographics__label">Last Name*</label>
                  <input
                    name="lastName"
                    id="last-name__input"
                    type="text"
                    value={formValues.lastName}
                    onChange={handleInputChange}
                    required
                  />
                  {(!formValid.lastName ||
                    (trySubmission && formValues.lastName.length === 0)) && (
                    <p className="errors">Last name is required.</p>
                  )}
                </div>
                <br style={{ clear: 'both' }} />
              </section>
              <section className="phone-section">
                <div className="demographics__phone-number">
                  <label className="demographics__label">Phone Number*</label>
                  <input
                    name="phone"
                    id="phone-number__input"
                    type="text"
                    value={formValues.phone}
                    onChange={handleInputChange}
                    required
                  />
                  {(!formValid.phone ||
                    (trySubmission && formValues.phone.length === 0)) && (
                    <p className="errors">10 digit phone number is required.</p>
                  )}
                </div>
              </section>

              <section className="age-gender-section">
                <div className="demographics__age">
                  <label htmlFor="age" className="demographics__label">
                    Age*
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
                    (trySubmission && formValues.age.length === 0)) && (
                    <p className="errors">Enter your age.</p>
                  )}
                </div>
                <div
                  className="demographics__gender"
                  onChange={handleInputChange}
                >
                  <label htmlFor="gender" className="demographics__label">
                    Gender*
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
                      value="female"
                      ref={genderInputRefs.femaleGenderRadioInput}
                      required
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
                      id="male"
                      value="male"
                      ref={genderInputRefs.maleGenderRadioInput}
                      required
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
                      id="trans"
                      value="trans"
                      ref={genderInputRefs.transGenderRadioInput}
                      required
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
                      id="nonBinary"
                      value="non-binary"
                      ref={genderInputRefs.nonBinaryGenderRadioInput}
                      required
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
                      type="text"
                      name="gender"
                      ref={genderInputRefs.freeFormGenderInput}
                    />
                  </div>
                  {trySubmission && !formValid.gender && (
                    <p className="errors">Required / too many characters</p>
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
                    Ethnicity*
                  </label>
                  <div className="radio-button-spaced">
                    <label htmlFor="Asian" className="radio-label">
                      Asian
                    </label>
                    <input
                      type="radio"
                      aria-label="Asian"
                      id="Asian"
                      name="ethnicity"
                      value="asian"
                      required
                    />
                  </div>
                  <div className="radio-button-spaced">
                    <label htmlFor="Black" className="radio-label">
                      Black
                    </label>
                    <input
                      type="radio"
                      aria-label="Black"
                      id="Black"
                      name="ethnicity"
                      value="black"
                      required
                    />
                  </div>
                  <div className="radio-button-spaced">
                    <label htmlFor="Chicanx or Latinx" className="radio-label">
                      Chicanx or Latinx
                    </label>
                    <input
                      type="radio"
                      aria-label="Chicanx or Latinx"
                      name="ethnicity"
                      id="Chicanx or Latix"
                      value="chicanxOrLatinx"
                      required
                    />
                  </div>
                  <div className="radio-button-spaced">
                    <label htmlFor="Pacific Islander" className="radio-label">
                      Pacific Islander
                    </label>
                    <input
                      type="radio"
                      aria-label="Pacific Islander"
                      id="Pacific Islander"
                      name="ethnicity"
                      value="pacificIslander"
                      required
                    />
                  </div>
                  <div className="radio-button-spaced">
                    <label htmlFor="White" className="radio-label">
                      White
                    </label>
                    <input
                      type="radio"
                      aria-label="White"
                      id="White"
                      name="ethnicity"
                      value="white"
                      required
                    />
                  </div>
                  <div className="radio-button-spaced">
                    <label htmlFor="Mixed" className="radio-label">
                      Mixed
                    </label>
                    <input
                      type="radio"
                      aria-label="Mixed"
                      id="mixed"
                      name="ethnicity"
                      value="mixed"
                      required
                    />
                  </div>
                </div>
                {trySubmission && !formValid.ethnicity && (
                  <p className="errors">Required</p>
                )}
              </section>

              <section className="edu-demographics-section">
                <div className="demographics__currSchool">
                  <section className="school-section">
                    <div className="demographics__school">
                      <label
                        className="demographics__label"
                        onChange={handleInputChange}
                      >
                        School/University (Full Name)*
                      </label>
                      <input
                        name="school"
                        id="school__input"
                        type="school"
                        value={formValues.school}
                        onChange={handleInputChange}
                        required
                      />
                      {(!formValid.school ||
                        (trySubmission && formValues.school.length === 0)) && (
                        <p className="errors">
                          Enter your most recent school of attendance.
                        </p>
                      )}
                    </div>
                  </section>
                  <br style={{ clear: 'both' }} />
                </div>
                <div className="demographics__yog">
                  <label htmlFor="yog__input" className="demographics__label">
                    Year of Graduation:*
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
                    (trySubmission && formValues.gradYear.length === 0)) && (
                    <p className="errors">Four digit year required.</p>
                  )}
                </div>
                <div
                  className="demographics__ucsc-student"
                  onChange={handleInputChange}
                >
                  <label htmlFor="UCSC Student" className="demographics__label">
                    UCSC Student*
                  </label>
                  <div className="radio-button-spaced">
                    <label htmlFor="yes" className="radio-label">
                      Yes
                    </label>
                    <input
                      type="radio"
                      aria-label="yes"
                      aria-checked="false"
                      name="ucscStudent"
                      value="true"
                      required
                    />
                  </div>
                  <div className="radio-button-spaced">
                    <label htmlFor="no" className="radio-label">
                      No
                    </label>
                    <input
                      type="radio"
                      aria-label="no"
                      name="ucscStudent"
                      aria-checked="false"
                      value="false"
                      required
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
                      UCSC College Affiliation*
                    </label>
                    <select
                      id="College Affiliation"
                      name="ucscCollegeAffiliation"
                      ref={ucscCollegeRef}
                    >
                      <option aria-label="Please select" value="">
                        Please select
                      </option>
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
                {trySubmission &&
                  formValues.ucscStudent &&
                  formValues.ucscCollegeAffiliation === '' && (
                    <p className="errors" style={{ justifyContent: 'right' }}>
                      Please enter college affiliation.
                    </p>
                  )}
                <br style={{ clear: 'both' }} />
              </section>

              <section className="major-section">
                <div className="demographics__major">
                  <label htmlFor="major__input" className="demographics__label">
                    Major/Field of Study*
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
                    (trySubmission && formValues.major.length === 0)) && (
                    <p className="errors">
                      Tell us your major, or undecided if you don't know.
                    </p>
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
                    type="url"
                    value={formValues.linkedinUrl}
                    onChange={handleInputChange}
                  />
                  {(!formValid.linkedinUrl ||
                    (trySubmission &&
                      formValues.linkedinUrl.length > 256 &&
                      formValues.linkedinUrl.length > 0)) && (
                    <p className="errors">URL too many characters</p>
                  )}
                </div>
              </section>
              <section className="github-section">
                <div className="demographics__major">
                  <label
                    htmlFor="github__input"
                    className="demographics__label"
                  >
                    GitHub URL
                  </label>
                  <input
                    name="githubUrl"
                    id="github__input"
                    aria-label="GitHub URL"
                    aria-required="true"
                    type="url"
                    value={formValues.githubUrl}
                    onChange={handleInputChange}
                  />
                  {(!formValid.githubUrl ||
                    (trySubmission &&
                      formValues.githubUrl.length > 256 &&
                      formValues.githubUrl.length > 0)) && (
                    <p className="errors">URL too many characters</p>
                  )}
                </div>
              </section>
              <section className="resume-section">
                <div className="demographics__major">
                  <label
                    htmlFor="resume__input"
                    className="demographics__label"
                  >
                    Resume Upload*
                  </label>
                  <input
                    id="resume__input"
                    aria-label="Resume Input"
                    type="file"
                    name="resume"
                    onChange={handleInputChange}
                    required
                  />
                  {trySubmission && !formValid.resume && (
                    <p className="errors">Required (.pdf format)</p>
                  )}
                </div>
              </section>
            </div>
          </div>
          <div className="experiences">
            <h3 className="experiences__header">Experiences</h3>
            <div className="experiences__form">
              <section className="first-hackathon">
                <label htmlFor="firstHackathon" className="experiences__label">
                  First Hackathon?*
                </label>
                <div className="radio-button">
                  <label htmlFor="yes" className="radio-label">
                    Yes
                  </label>
                  <input
                    type="radio"
                    name="firstHackathon"
                    aria-label="yes"
                    value="true"
                    onChange={handleInputChange}
                    required
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
                    value="false"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                {trySubmission && !formValid.firstHackathon && (
                  <p className="errors">Required</p>
                )}
              </section>

              <section className="first-cruzhacks">
                <label htmlFor="first-cruzhacks" className="experiences__label">
                  First CruzHacks?*
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
                    value="no"
                    onClick={handleInputChange}
                    required
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
                  Why do you want to participate? (500 chars)*
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
                    formValues.participateQuestion.length === 0)) &&
                  formValues.participateQuestion.length === 0 && (
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
                  chars)*
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
                  (trySubmission &&
                    formValues.technologyQuestion.length === 0)) &&
                  formValues.technologyQuestion.length === 0 && (
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
                  What would you like to see at CruzHacks 2020? (500 chars)*
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
                  (trySubmission && formValues.seeAtCruzhacks.length === 0)) &&
                  formValues.seeAtCruzhacks.length === 0 && (
                    <p className="errors">Required</p>
                  )}
                {!formValid.seeAtCruzhacks &&
                  formValues.seeAtCruzhacks.length > 500 && (
                    <p className="errors">Over 500 characters</p>
                  )}
              </section>
            </div>
          </div>
          <div className="logistics">
            <h3 className="logistics__header">Logistics</h3>
            <div className="logistics__form">
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
                    name="placeToSleep"
                    value="true"
                    onClick={handleInputChange}
                    required
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
                    value="false"
                    onClick={handleInputChange}
                    required
                  />
                </div>
                {trySubmission && !formValid.placeToSleep && (
                  <p className="errors">Required</p>
                )}
              </section>
              <section className="transportation-section">
                <label className="logistics__label">
                  Could you use help with transportation?*
                </label>
                <div className="radio-button">
                  <label htmlFor="yes" className="radio-label">
                    Yes
                  </label>
                  <input
                    type="radio"
                    aria-label="yes"
                    aria-checked="false"
                    name="transportation"
                    value="true"
                    onClick={handleInputChange}
                    required
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
                    aria-checked="false"
                    value="false"
                    onClick={handleInputChange}
                    required
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
                    name="placeToPark"
                    className="park"
                    onClick={handleInputChange}
                    value="true"
                    required
                  />
                </div>
                <div className="radio-button">
                  <label className="radio-label">No</label>
                  <input
                    type="radio"
                    name="placeToPark"
                    aria-label="No"
                    value="false"
                    className="park"
                    onClick={handleInputChange}
                    required
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
                  name="specialAccomodations"
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
                    value="yes"
                    onClick={handleInputChange}
                    required
                  />
                  <label htmlFor="yes" className="checkbox-label">
                    I have read agree to the{' '}
                    <a
                      target="__blank"
                      rel="noreferrer"
                      href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                    >
                      MLH Code of Conduct.
                    </a>
                    *
                  </label>
                </div>
                {trySubmission && !formValid.codeOfConduct && (
                  <p className="errors">Required</p>
                )}
                <div className="checkbox-button">
                  <input
                    type="checkbox"
                    name="mlhAffiliation"
                    aria-label="no"
                    value="no"
                    onClick={handleInputChange}
                    required
                  />
                  <label htmlFor="no" className="checkbox-label">
                    I authorize you to share my application/registration
                    information for event administration, ranking, MLH
                    administration, pre- and post-event informational e-mails,
                    and occasional messages about hackathons in-line with the{' '}
                    <a
                      target="__blank"
                      rel="noreferrer"
                      href="https://mlh.io/privacy"
                    >
                      MLH Privacy Policy.
                    </a>{' '}
                    I further agree to the terms of both the MLH Contest Terms
                    and Conditions and the{' '}
                    <a
                      target="__blank"
                      rel="noreferrer"
                      href="https://mlh.io/privacy"
                    >
                      MLH Privacy Policy.
                    </a>
                    *
                  </label>
                </div>
                {trySubmission && !formValid.mlhAffiliation && (
                  <p className="errors">Required</p>
                )}
                <p className="info" style={{ color: 'lightgray' }}>
                  If you have any issues please reach out to{' '}
                  <a
                    style={{ color: 'lightgray' }}
                    href="mailto:contact@cruzhacks.com"
                  >
                    contact@cruzhacks.com
                  </a>
                  .
                </p>
              </section>
              <button type="submit" className="application__button">
                <p className="application__button-text">Submit</p>
              </button>

              {apiStatusUpdates.appSubmissionInProgress === true && (
                <p className="info">
                  Submitting your application to the CruzHacks Cloud!
                </p>
              )}
              {trySubmission &&
                (formValues.firstName.length >= 100 ||
                  (formValues.firstName.length < 1 && (
                    <p className="errors">Please check your first name!</p>
                  )))}
              {trySubmission &&
                (formValues.lastName.length >= 100 ||
                  formValues.lastName.length < 1) && (
                  <p className="errors">Please check your last name!</p>
                )}
              {trySubmission && formValues.phone.length === 0 && (
                <p className="errors">Please check your phone number!</p>
              )}
              {trySubmission &&
                (formValues.age.length > 3 ||
                  (formValues.age.length < 1 && (
                    <p className="errors">
                      Please check what you filled in for age!
                    </p>
                  )))}
              {trySubmission && !formValid.gender && (
                <p className="errors">
                  Please check what you filled in for gender!
                </p>
              )}
              {trySubmission && !formValid.ethnicity && (
                <p className="errors">
                  Please check what you filled in for ethnicity!
                </p>
              )}
              {trySubmission &&
                (formValues.school.length >= 320 ||
                  formValues.school.length < 1) && (
                  <p className="errors">
                    Please check your answer for school/university!
                  </p>
                )}
              {trySubmission && formValues.gradYear.length !== 4 && (
                <p className="errors">
                  Please check what you filled in for grad year!
                </p>
              )}
              {trySubmission && !formValid.ucscStudent && (
                <p className="errors">
                  Please tell us if you are a UCSC student!
                </p>
              )}
              {trySubmission &&
                formValues.ucscStudent &&
                formValues.ucscCollegeAffiliation === '' && (
                  <p className="errors">
                    Please check your answer for college afilliation!
                  </p>
                )}
              {trySubmission &&
                ((!formValid.major && formValues.major.length >= 320) ||
                  formValues.major.length < 1) && (
                  <p className="errors">
                    Please check what you filled in for major!
                  </p>
                )}
              {trySubmission && !formValid.resume && (
                <p className="errors">Please upload a valid resume!</p>
              )}
              {(!formValid.linkedinUrl ||
                (trySubmission &&
                  formValues.linkedinUrl.length >= 256 &&
                  formValues.linkedinUrl.length > 0)) && (
                <p className="errors">LinkedIn URL too many characters</p>
              )}
              {(!formValid.linkedinUrl ||
                (trySubmission &&
                  formValues.githubUrl.length >= 256 &&
                  formValues.githubUrl.length > 0)) && (
                <p className="errors">GitHub URL too many characters</p>
              )}
              {trySubmission && !formValid.firstHackathon && (
                <p className="errors">
                  Please tell us if this is your first hackathon!
                </p>
              )}
              {trySubmission && !formValid.firstCruzhacks && (
                <p className="errors">
                  Please tell us if this is your first CruzHacks!
                </p>
              )}
              {(!formValid.participateQuestion ||
                (trySubmission &&
                  formValues.participateQuestion.length === 0) ||
                formValues.participateQuestion.length > 500) && (
                <p className="errors">
                  Please check your answer to 'Why do you want to participate?'
                </p>
              )}
              {(!formValid.technologyQuestion ||
                (trySubmission && formValues.technologyQuestion.length === 0) ||
                formValues.technologyQuestion.length > 500) && (
                <p className="errors">
                  Please check your answer to 'Where do you see technology
                  pushing humanity’s goals?'
                </p>
              )}
              {(!formValid.seeAtCruzhacks ||
                (trySubmission && formValues.seeAtCruzhacks.length === 0) ||
                formValues.seeAtCruzhacks.length > 500) && (
                <p className="errors">
                  Please check your answer to 'What would you like to see at
                  CruzHacks 2020?'
                </p>
              )}
              {trySubmission && !formValid.placeToSleep && (
                <p className="errors">
                  Please tell us if you need a place to sleep!
                </p>
              )}
              {trySubmission && !formValid.transportation && (
                <p className="errors">
                  Please tell us if you may need transportation!
                </p>
              )}
              {trySubmission && !formValid.placeToPark && (
                <p className="errors">
                  Please tell us if you need a place to park!
                </p>
              )}
              {!formValid.appSubmittedSuccessfully && (
                <p className="errors">
                  There was error in uploading your application to the CruzHacks
                  Cloud. Our engineers have been alerted! Try again soon!
                </p>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ApplicationView;
