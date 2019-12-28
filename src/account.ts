import axios, { AxiosRequestConfig } from 'axios';

const endpoint: string = process.env.REACT_APP_API_ENDPOINT + '';
const apiKey = process.env.REACT_APP_API_KEY + '';

export function applicationHasBeenSubmitted(email: string): Promise<boolean> {
  const requestConfig: AxiosRequestConfig = {
    params: {
      authentication: apiKey,
      accountType: 'hacker',
      accountEmail: email,
    },
  };

  return axios
    .get<Array<Object>>(endpoint, requestConfig)
    .then(response => {
      return response.data.length !== 0;
    })
    .catch(error => {
      if (error.response.status === 404) {
        return Promise.resolve(false);
      }

      return Promise.reject(error);
    });
}

export function uploadResume(email: any, resume: any): Promise<boolean> {
  const headers = {
    'Content-Type': 'application/json',
  };

  const data = {
    email: email,
    resume: resume,
  };

  return axios
    .post(endpoint, data, {
      headers: headers,
    })
    .then(response => {
      if (response.status === 200) {
        return Promise.resolve(true);
      } else {
        return Promise.reject(response.status);
      }
    })
    .catch(error => {
      if (error.response.status === 404) {
        return Promise.resolve(false);
      }

      return Promise.reject(error);
    });
}

export function submitApplication(application: any): Promise<boolean> {
  delete application.codeofconduct;
  delete application.mlhaffiliation;

  if (application.ucscStudent === true) {
    delete application.collegeAffiliation;
  }

  const requestConfig: AxiosRequestConfig = {
    headers: {
      authentication: apiKey,
      'content-type': 'application/json',
      accounttype: 'hacker',
    },
  };

  return axios
    .post<Object>(endpoint, application, requestConfig)
    .then(response => {
      return true;
    });
}
