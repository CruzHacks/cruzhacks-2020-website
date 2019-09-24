import React from 'react';
import axios, { AxiosRequestConfig } from 'axios';

export interface ITextInputProps {
  placeholder: string;
  value: string;
  buttonText: string;
  containerClass: string;
}

async function subscribeToEmailList(event: any, email: string) {
  let username: string = '' + process.env.REACT_APP_MAILCHIMP_USER;
  let password: string = '' + process.env.REACT_APP_MAILCHIMP_SECRET;
  let mailchimpEndpoint: string =
    '' + process.env.REACT_APP_MAILCHIMP_SUBSCRIBERS_ENDPOINT;

  let axiosConfig: AxiosRequestConfig = {
    params: {
      email_address: email,
      status: 'subscribed',
    },
    auth: { username, password },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
      'Content-Type': 'application/json',
    },
    proxy: {
      host: '127.0.0.1',
      port: 9001,
    },
  };

  try {
    const response = await axios.get(mailchimpEndpoint, axiosConfig);
    console.log(response);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      if (error.response.data.title === 'Member Exists') {
        let err_msg = 'Already subscribed!';
        console.error(error);
        console.error(err_msg);
      } else if (
        error.response.data.title === 'Forgotten Email Not Subscribed'
      ) {
        let err_msg = "Previously unsubscribed! Can't add email :(";
        console.error(error);
        console.error(err_msg);
      }
    } else {
      let err_msg = 'Something Went Wrong';
      console.error(error);
      console.error(err_msg);
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
        <input
          type="text"
          placeholder={textInputData.placeholder}
          value={textInputData.value}
          onChange={e =>
            setTextInputData({ ...textInputData, value: e.target.value })
          }
        />
        <button onClick={e => subscribeToEmailList(e, textInputData.value)}>
          {textInputData.buttonText}
        </button>
      </div>
    );
  } else {
    console.error('required : textInputData');
    console.trace();
    return null;
  }
};

export default EmailSubscriptionInput;
