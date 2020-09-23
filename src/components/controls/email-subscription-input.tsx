import React from 'react';
import axios, { AxiosRequestConfig } from 'axios';

const emailInputRef: any = React.createRef();

export interface ITextInputProps {
  placeholder: string;
  value: string;
  isSending: boolean;
  buttonText: string;
  containerClass: string;
}

async function subscribeToEmailList(
  email_address: string,
  inputRef: any,
  e: any
) {
  e.preventDefault();
  emailInputRef.current.classList.add('placeholder-sending');
  inputRef.current.blur();
  if (emailInputRef.current.reportValidity()) {
    let body = {
      email: '' + email_address,
    };
    inputRef.current.value = '';

    let key: string = '' + process.env.REACT_APP_MAILING_API_KEY;
    let mailingServiceEndpoint: string =
      '' + process.env.REACT_APP_MAILING_SUBSCRIBERS_ENDPOINT;

    let axiosConfig: AxiosRequestConfig = {
      headers: {
        Authentication: key,
        'Content-Type': 'application/json',
      },
    };
    inputRef.current.disabled = true;
    try {
      inputRef.current.placeholder = 'Sending...';

      const response = await axios.post(
        mailingServiceEndpoint,
        body,
        axiosConfig
      );

      if (response.status === 200) {
        inputRef.current.classList.add('placeholder-ok');
        inputRef.current.placeholder = 'Added to Email List!';
      }
    } catch (error) {
      if (error.response && error.response.status === 500) {
        let err_msg = 'Already subscribed!';
        inputRef.current.classList.add('placeholder-ok');
        inputRef.current.placeholder = err_msg;
        console.error(err_msg);
      } else {
        let err_msg = 'Something Went Wrong';
        inputRef.current.classList.add('placeholder-error');
        inputRef.current.placeholder = err_msg;
        console.error(err_msg);
      }
    }
    inputRef.current.disabled = false;
  }
}

const EmailSubscriptionInput: React.FC<ITextInputProps> = initialTextInputData => {
  const [
    textInputData,
    setTextInputData,
  ] = React.useState<ITextInputProps | null>(initialTextInputData);

  if (textInputData) {
    return (
      <div className={textInputData.containerClass}>
        <form>
          <div id="emailInputContainer">
            <input
              ref={emailInputRef}
              id="emailInput"
              type="email"
              className="placeholder-sending"
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
                emailInputRef.current.classList.remove('placeholder-ok');
                emailInputRef.current.classList.add('placeholder-sending');
              }}
              required
            />
          </div>

          <button
            type="submit"
            onClick={e =>
              subscribeToEmailList(textInputData.value, emailInputRef, e)
            }
          >
            {textInputData.buttonText}
          </button>
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
