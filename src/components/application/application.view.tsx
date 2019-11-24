import React, { useState } from 'react';
//import DemographicsView from './forms/demographics.view';
//import ExperiencesView from './forms/experiences.view';
//import LogisticsView from './forms/logistics.view';

const ApplicationView: React.FC = () => {

  // BOOLEAN VALEUS BECOMING STRING
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
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
    specialAccomodations: ''
  })

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value});
    console.log(formValues);
  }

  // NEED API
  const onSubmit = () => {

  }

  return (
    <>
      <div className="application">
        <div className="application__titleBar">
          <span className="application__titleBar-text">APPLICATION</span>
        </div>
        <div className="demographics">
        <h3 className="application__header">Demographics</h3>
        <form className="demographics__form">
          <section className="first-last-section">
            <div className="demographics__first-name">
              <label className="demographics__label">First Name</label>
              <input name="firstName" id="first-name__input" type="text" value={formValues.firstName} onChange={handleInputChange} />
            </div>
            <div className="demographics__last-name">
              <label className="demographics__label">Last Name</label>
              <input name="lastName" id="last-name__input" type="text" value={formValues.lastName} onChange={handleInputChange} />
            </div>
            <br style={{ clear: 'both' }} />
          </section>
          <section className="email-section">
            <div className="demographics__email">
              <label className="demographics__label">Email</label>
              <input name="email" id="email__input" type="email" value={formValues.email} onChange={handleInputChange}/>
            </div>
          </section>
          <section className="password-section">
            <div className="demographics__password">
              <label className="demographics__label">
                Hack Portal Password
              </label>
              <input name="password" id="password__input" type="password" value={formValues.password} onChange={handleInputChange}/>
            </div>
          </section>
          <section className="age-gender-section">
            <div className="demographics__age">
              <label className="demographics__label">Age</label>
              <input name="age" id="age__input" type="number" value={formValues.age} onChange={handleInputChange}/>
            </div>
            <div className="demographics__gender" onChange={handleInputChange}>
              <label className="demographics__label">Gender</label>
              <div className="radio-button">
                <label className="radio-label">Female</label>
                <input type="radio" name="gender" value="female" />
              </div>
              <div className="radio-button">
                <label className="radio-label">Male</label>
                <input type="radio" name="gender" value="male" />
              </div>
              <div className="radio-button">
                <label className="radio-label">Trans</label>
                <input type="radio" name="gender" value="trans" />
              </div>
              <div className="radio-button">
                <label className="radio-label">Non-binary</label>
                <input type="radio" name="gender" value="non-binary" />
              </div>
              <div className="demographics__other-gender">
                <label className="demographics__gender-label">Other</label>
                <input id="other__input" type="text" />
              </div>
            </div>
            <br style={{ clear: 'both' }} />
          </section>

          <section className="ethnicity-section">
            <div className="demographics__ethnicity" onChange={handleInputChange}>
              <label className="demographics__label">
                Ethnicity
              </label>
              <div className="radio-button-spaced">
                <label className="radio-label">Asian</label>
                <input type="radio" name="ethnicity" value="asian" />
              </div>
              <div className="radio-button-spaced">
                <label className="radio-label">Black</label>
                <input type="radio" name="ethnicity" value="black" />
              </div>
              <div className="radio-button-spaced">
                <label className="radio-label">Chicanx or Latinx</label>
                <input type="radio" name="ethnicity" value="chicanxOrLatinx" />
              </div>
              <div className="radio-button-spaced">
                <label className="radio-label">Pacific Islander</label>
                <input type="radio" name="ethnicity" value="pacificIslander" />
              </div>
              <div className="radio-button-spaced">
                <label className="radio-label">White</label>
                <input type="radio" name="ethnicity" value="white" />
              </div>
              <div className="radio-button-spaced">
                <label className="radio-label">Mixed</label>
                <input type="radio" name="ethnicity" value="mixed" />
              </div>
            </div>
          </section>

          <section className="edu-demographics-section">
            <div className="demographics__yog">
              <label className="demographics__label">
                Year of Graduation:
              </label>
              <input name="yearOfGrad" id="yog__input" type="text" value={formValues.yearOfGrad} onChange={handleInputChange}/>
            </div>
            <div className="demographics__ucsc-student" onChange={handleInputChange}>
              <label className="demographics__label">
                UCSC Student
              </label>
              <div className="radio-button-spaced">
                <label className="radio-label">Yes</label>
                <input type="radio" name="ucsc-student" value="yes"/>
              </div>
              <div className="radio-button-spaced">
                <label className="radio-label">No</label>
                <input type="radio" name="ucsc-student" value="no" />
              </div>
            </div>
            <div className="demographics__college-affil" onChange={handleInputChange}>
              <label className="demographics__label">
                College Affiliation
              </label>
              <select>
                <option value="rcc">Rachel Carson College</option>
                <option value="porter">Porter College</option>
                <option value="kresge">Kresge College</option>
                <option value="c8">College 8</option>
                <option value="c9">College 9</option>
                <option value="crown">Crown College</option>
                <option value="meril">Merill College</option>
                <option value="stevenson">Stevenson College</option>
              </select>
            </div>
            <br style={{ clear: 'both' }} />
          </section>

          <section className="major-section">
            <div className="demographics__major">
              <label className="demographics__label">Major/Field of Study</label>
              <input name="major" id="major__input" type="text" value={formValues.major} onChange={handleInputChange}/>
            </div>
          </section>
          <section className="linkedin-section">
            <div className="demographics__major">
              <label className="demographics__label">LinkedIn URL</label>
              <input name="linkedinUrl" id="linkedin__input" type="text" value={formValues.linkedinUrl} onChange={handleInputChange}/>
            </div>
          </section>
          <section className="github-section">
            <div className="demographics__major">
              <label className="demographics__label">Github URL</label>
              <input name="githubUrl" id="github__input" type="text" value={formValues.githubUrl} onChange={handleInputChange}/>
            </div>
          </section>
          <section className="resume-section">
            <div className="demographics__major">
              <label className="demographics__label">Resume Link</label>
              <input id="resume__input" type="text" />
            </div>
          </section>
        </form>
      </div>
      <div className="experiences">
        <h3 className="application__header">Experiences</h3>
        <form className="experiences__form">
            <section className="first-hackathon">
                <label className="experiences__label">First Hackathon?</label>
                <div className="radio-button">
                    <label className="radio-label">Yes</label>
                    <input type="radio" name="firstHackathon" value="true" onChange={handleInputChange}/>
                </div>
                <div className="radio-button">
                    <label className="radio-label">No</label>
                    <input type="radio" name="firstHackathon" value="false" onChange={handleInputChange}/>
                </div>
            </section>

            <section className="first-cruzhacks">
                <label className="experiences__label">First Cruzhacks?</label>
                <div className="radio-button">
                    <label className="radio-label">Yes</label>
                    <input type="radio" name="first-cruzhacks" value="yes" onClick={handleInputChange}/>
                </div>
                <div className="radio-button">
                    <label className="radio-label">No</label>
                    <input type="radio" name="first-cruzhacks" value="no" onClick={handleInputChange}/>
                </div>
            </section>

            <section className="participate-question">
                <label className="experiences__label">Why do you want to participate? (500 chars)</label>
                <textarea name="participateQuestion" className="experiences__textarea" value={formValues.participateQuestion} onChange={handleInputChange}/>
            </section>

            <section className="see-question">
                <label className="experiences__label">What would you like to see at CruzHacks 2020?* (500 chars)</label>
                <textarea name="seeAtCruzhacks" className="experiences__textarea" onChange={handleInputChange}/>
            </section>
        </form>
      </div>
      <div className="logistics">
        <h3 className="application__header">Logistics</h3>
        <form className="logistics__form">
            <section className="place-to-sleep-section">
                <label className="logistics__label">Could you use a place to sleep?*</label>
                <div className="radio-button">
                    <label className="radio-label">Yes</label>
                    <input type="radio" name="sleep" value='true' onClick={handleInputChange}/>
                </div>
                <div className="radio-button">
                    <label className="radio-label">No</label>
                    <input type="radio" name="sleep" value='false' onClick={handleInputChange}/>
                </div>
            </section>
            <section className="transportation-section">
                <label className="logistics__label">Could you use help with transportation?*</label>
                <div className="radio-button">
                    <label className="radio-label">Yes</label>
                    <input type="radio" name="transportation" value="true" onClick={handleInputChange}/>
                </div>
                <div className="radio-button">
                    <label className="radio-label">No</label>
                    <input type="radio" name="transportation" value="false" onClick={handleInputChange}/>
                </div>
            </section>
            <section className="place-to-park-section">
                <label className="logistics__label">Do you need a place to park?*</label>
                <div className="radio-button">
                    <label className="radio-label">Yes</label>
                    <input type="radio" name="placeToPark" value="true" />
                </div>
                <div className="radio-button">
                    <label className="radio-label">No</label>
                    <input type="radio" name="placeToPark" value="false" onClick={handleInputChange}/>
                </div>
            </section>
            <section className="accommodations-section">
              <label className="logistics__label">Do you require any special accommodations?</label>
              <input name="accomadations" id="accommodations__input" type="text" onChange={handleInputChange}/>
          </section>
            <button type="submit" className="application__button">Submit</button>
        </form>
      </div>
      </div>
    </>
  );
};

export default ApplicationView;
