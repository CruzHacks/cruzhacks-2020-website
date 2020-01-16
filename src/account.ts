import axios, { AxiosRequestConfig } from 'axios';

const endpoint: string = process.env.REACT_APP_API_ENDPOINT + '';
const resumeEndpoint: string = process.env.REACT_APP_API_UPLOAD_ENDPOINT + '';
const apiKey = process.env.REACT_APP_API_KEY + '';
const annoucementEndpoint: string = process.env.REACT_APP_ANNOUCEMENT_API_ENDPOINT + '';

export function getAnnoucements(): Promise<Object> {
  var data: any;
  var posts: any; 
  const requestConfig: AxiosRequestConfig = {
    params: {
      authentication: apiKey
    },
  };

  return axios
    .get<Array<Object>>(annoucementEndpoint, requestConfig)
    .then(response => {
      data = response.data; 
      posts = data.announcement.posts;
      return posts;
    })
    .catch(error => {
      if (error.response.status === 404) {
        return Promise.resolve(error);
      }

      return Promise.reject(error);
    });
}

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
