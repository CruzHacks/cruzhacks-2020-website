import axios, { AxiosRequestConfig } from 'axios';
import S3FileUpload from 'react-s3';

const endpoint: string = process.env.REACT_APP_API_ENDPOINT + '';
const apiKey = process.env.REACT_APP_API_KEY + '';

export function applicationHasBeenSubmitted(email: string): Promise<boolean> {
  const queryParams = `?authentication=${apiKey}&accountType=hacker&accountEmail=${email}`;
  return axios
    .get<Array<Object>>(endpoint + queryParams)
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
  const awsS3Config = {
    bucketName: process.env.REACT_APP_AWS_BUCKET_NAME,
    region: process.env.REACT_APP_AWS_REGION,
    dirName: `resumes/${email}`,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
  };
  return S3FileUpload.uploadFile(resume, awsS3Config).then(response => {
    return Promise.resolve(true);
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
