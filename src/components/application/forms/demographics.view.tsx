import React, { useState } from 'react';

const DemographicsView: React.FC = () => {
  const [values, setValues] = useState({
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
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // NEED ONSUBMIT

  return (
    <>
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
                value={values.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="demographics__last-name">
              <label className="demographics__label">Last Name</label>
              <input
                name="lastName"
                id="last-name__input"
                type="text"
                value={values.lastName}
                onChange={handleInputChange}
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
                value={values.email}
                onChange={handleInputChange}
              />
            </div>
          </section>
          <section className="password-section">
            <div className="demographics__password">
              <label className="demographics__label">
                Hack Portal Password
              </label>
              <input
                name="password"
                id="password__input"
                type="password"
                value={values.password}
                onChange={handleInputChange}
              />
            </div>
          </section>
          <section className="age-gender-section">
            <div className="demographics__age">
              <label className="demographics__label">Age</label>
              <input
                name="age"
                id="age__input"
                type="number"
                value={values.age}
                onChange={handleInputChange}
              />
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
            <div
              className="demographics__ethnicity"
              onChange={handleInputChange}
            >
              <label className="demographics__label">Ethnicity</label>
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
              <label className="demographics__label">Year of Graduation:</label>
              <input
                name="yearOfGrad"
                id="yog__input"
                type="text"
                value={values.yearOfGrad}
                onChange={handleInputChange}
              />
            </div>
            <div
              className="demographics__ucsc-student"
              onChange={handleInputChange}
            >
              <label className="demographics__label">UCSC Student</label>
              <div className="radio-button-spaced">
                <label className="radio-label">Yes</label>
                <input type="radio" name="ucsc-student" value="yes" checked />
              </div>
              <div className="radio-button-spaced">
                <label className="radio-label">No</label>
                <input type="radio" name="ucsc-student" value="no" checked />
              </div>
            </div>
            <div
              className="demographics__college-affil"
              onChange={handleInputChange}
            >
              <label className="demographics__label">College Affiliation</label>
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
              <label className="demographics__label">
                Major/Field of Study
              </label>
              <input
                name="major"
                id="major__input"
                type="text"
                value={values.major}
                onChange={handleInputChange}
              />
            </div>
          </section>
          <section className="linkedin-section">
            <div className="demographics__major">
              <label className="demographics__label">LinkedIn URL</label>
              <input
                name="linkedinUrl"
                id="linkedin__input"
                type="text"
                value={values.linkedinUrl}
                onChange={handleInputChange}
              />
            </div>
          </section>
          <section className="github-section">
            <div className="demographics__major">
              <label className="demographics__label">Github URL</label>
              <input
                name="githubUrl"
                id="github__input"
                type="text"
                value={values.githubUrl}
                onChange={handleInputChange}
              />
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
    </>
  );
};

export default DemographicsView;
