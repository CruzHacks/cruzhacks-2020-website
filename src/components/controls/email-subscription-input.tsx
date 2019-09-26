import React from 'react';
import axios, { AxiosRequestConfig } from 'axios';

const emailInputRef: any = React.createRef();

export interface ITextInputProps {
  placeholder: string;
  value: string;
  buttonText: string;
  containerClass: string;
}

function validateInputSubmission(): boolean {
  if (emailInputRef.current.reportValidity()) {
    return true;
  }
  return false;
}

async function subscribeToEmailList(email: string, inputRef: any, e: any) {
  e.preventDefault();
  if (validateInputSubmission()) {
    inputRef.current.placeholder = 'Sending...';

    const CORSproxy = 'https://cors-anywhere.herokuapp.com/';

    let body = {
      email_address: '' + email,
      status: 'subscribed',
    };

    let username: string = '' + process.env.REACT_APP_MAILCHIMP_USER;
    let password: string = '' + process.env.REACT_APP_MAILCHIMP_SECRET;
    let mailchimpEndpoint: string =
      CORSproxy + process.env.REACT_APP_MAILCHIMP_SUBSCRIBERS_ENDPOINT;

    let axiosConfig: AxiosRequestConfig = {
      auth: { username, password },
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };

    try {
      const response = await axios.post(mailchimpEndpoint, body, axiosConfig);
      if (response.status === 200) {
        inputRef.current.value = '';
        inputRef.current.placeholder = 'Added to Email List!';
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        if (error.response.data.title === 'Member Exists') {
          let err_msg = 'Already subscribed!';
          inputRef.current.value = '';
          inputRef.current.classList.add('placeholder-error');
          inputRef.current.placeholder = err_msg;
          console.error(err_msg);
        } else if (
          error.response.data.title === 'Forgotten Email Not Subscribed'
        ) {
          let err_msg = "Previously unsubscribed! Can't add email :(";
          inputRef.current.value = '';
          inputRef.current.classList.add('placeholder-error');
          inputRef.current.placeholder = err_msg;
          console.error(err_msg);
        }
      } else {
        let err_msg = 'Something Went Wrong';
        inputRef.current.value = '';
        inputRef.current.classList.add('placeholder-error');
        inputRef.current.placeholder = err_msg;
        console.error(err_msg);
      }
    }
  }
}

const EmailSubscriptionInput: React.FC<
  ITextInputProps
> = initialTextInputData => {
  const [
    textInputData,
    setTextInputData,
  ] = React.useState<ITextInputProps | null>(initialTextInputData);

  if (textInputData) {
    return (
      <div className={textInputData.containerClass}>
        <form>
          <input
            ref={emailInputRef}
            id="emailInput"
            type="email"
            className="placeholder-ok"
            placeholder={textInputData.placeholder}
            value={textInputData.value}
            onChange={e =>
              setTextInputData({ ...textInputData, value: e.target.value })
            }
            onFocus={() => {
              emailInputRef.current.placeholder = '';
            }}
            onBlur={() => {
              emailInputRef.current.placeholder = textInputData.placeholder;
              emailInputRef.current.classList.remove('placeholder-error');
              emailInputRef.current.classList.add('placeholder-ok');
            }}
            required
          />
          <input
            type="submit"
            onClick={e =>
              subscribeToEmailList(textInputData.value, emailInputRef, e)
            }
            value={textInputData.buttonText}
          ></input>
        </form>
      </div>
    );
  } else {
    console.error('required : textInputData');
    console.trace();
    return null;
  }
};

export default EmailSubscriptionInput;
