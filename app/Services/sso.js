import _ from 'lodash';
import { createAxiosInstance } from './utils';
import * as Config from './Config.json'

const api = createAxiosInstance(Config.SSO_BASE_URL);

export const createUser = (params = { email, password, full_name }) => {
  params.password_confirmation = params.password;
  return api.post(`/api/users`, { user: params });
};
