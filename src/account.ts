import axios, { AxiosRequestConfig } from 'axios';

const endpoint: string = process.env.REACT_APP_API_ENDPOINT + '';
const resumeEndpoint: string = process.env.REACT_APP_API_UPLOAD_ENDPOINT + '';
const apiKey = process.env.REACT_APP_API_KEY + '';

type HackerType = {
  accepted: Boolean;
};

export default HackerType;

export function getHackers(email: string): Promise<Array<HackerType>> {
  const requestConfig: AxiosRequestConfig = {
    params: {
      authentication: apiKey,
      accountType: 'hacker',
      accountEmail: email,
    },
  };

  return axios
    .get<Array<HackerType>>(endpoint, requestConfig)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      if (error.response.status === 404) {
        return Promise.resolve([]);
      }

      return Promise.reject(error);
    });
}

export function uploadResume(email: any, resume: any): Promise<boolean> {
  const headers = {
    authentication: apiKey,
    'Content-Type': 'multipart/form-data',
  };

  let formData = new FormData();
  formData.append('email', email);
  formData.append('resume', resume);

  return axios
    .post(resumeEndpoint, formData, {
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
