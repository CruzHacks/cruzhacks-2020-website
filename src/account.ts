import axios, { AxiosRequestConfig } from 'axios';

const endpoint: string = process.env.REACT_APP_API_ENDPOINT + '';
const apiKey = process.env.REACT_APP_API_KEY + '';

export function applicationHasBeenSubmitted(email: string): Promise<boolean> {
  const queryParams = `?authentication=${apiKey}&accountType=hacker&accountEmail=${email}`;

  return axios
    .get<Array<Object>>(endpoint + queryParams)
    .then(response => {
      console.log(response);
      return response.data.length !== 0;
    })
    .catch(error => {
      if (error.response.status === 404) {
        return Promise.resolve(false);
      }

      return Promise.reject(error);
    });
}

export function submitApplication(application: object): Promise<boolean> {
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
      console.log(response.data);
      return true;
    });
}
