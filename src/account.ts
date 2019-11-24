import axios, { AxiosRequestConfig } from 'axios';

export function applicationHasBeenSubmitted(email: string): Promise<boolean> {
  const endpoint: string = process.env.REACT_APP_API_ENDPOINT + '';
  const apiKey = process.env.REACT_APP_API_KEY + '';
  const queryParams = `?authentication=${apiKey}&accountType=hacker&accountEmail=${email}`;

  return axios
    .get<Array<Object>>(endpoint + queryParams)
    .then(response => {
      console.log(response);
      return response.data.length !== 0;
    })
    .catch(error => {
      return error;
    });
}
