import axios, { AxiosRequestConfig } from 'axios';
import { useAuth0 } from './auth/auth';

const endpoint: string = process.env.REACT_APP_API_ENDPOINT + '';
const apiKey = process.env.REACT_APP_API_KEY + '';
// const auth0User = useAuth0()!.user;

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

//   authOID character varying(72) NOT NULL UNIQUE,
//   email character varying(254) NOT NULL UNIQUE,

export function submitApplication(application: any): Promise<boolean> {
  delete application.codeofconduct;
  delete application.mlhaffiliation;

  if (application.ucscStudent === true) {
    delete application.collegeAffiliation;
  }

//   application.authoid = auth0User;

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
