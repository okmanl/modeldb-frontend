import axios from 'axios';

export class BaseDataService {
  public constructor() {
    axios.defaults.baseURL = '/api';
    axios.defaults.responseType = 'json';
    axios.defaults.headers = {
      'Grpc-Metadata-bearer_access_token': '',
      'Grpc-Metadata-source': 'WebApp',
    };
  }
}
