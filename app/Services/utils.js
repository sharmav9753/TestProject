
import { Alert } from 'react-native';
import axios from 'axios';
import _ from 'lodash';
import * as Config from './Config.json'

export const createAxiosInstance = (baseURL) => {
  const api = axios.create({
    baseURL,
    headers: {
      'Accept': 'application/json',
      'Accept-Encoding': 'deflate, gzip;q=1.0, compress;q=0.5',
    },
    validateStatus: status =>
      // Only consider error for HTTP 500 and above
      status >= 200 && status < 500,
  });

  if (Config.DEV === 'true') {
    api.interceptors.request.use(
      (config) => { console.log(config); return config; },
      (error) => { console.log(error); return Promise.reject(error); },
    );
    api.interceptors.response.use(
      (config) => { console.log(config); return config; },
      (error) => { console.log(error); return Promise.reject(error); },
    );
  }
  api.interceptors.response.use(
    (config) => {
      if (config.data.status === 400) {
        setTimeout(() => {
          Alert.alert(
            t('errorOccurred'),
            t('systemError'),
            [
              { text: I18n.t('shared.close') },
              { text: t('report'), onPress: TestFairy.pushFeedbackController },
            ],
            { cancellable: false },
          );
        }, 200);
      }
      return config;
    },
  );

  return api;
};

// Convert the object's key into snakeCase'd params, also remove keys with undefined or null value.
// Optionally accept list of keys that will be ommited from the resulting object.
export const toSanitizedSnakeCaseKey = (params, omitKeys = []) => (
  _(params)
    .omit(omitKeys)
    .omitBy(_.isUndefined)
    .omitBy(_.isNull)
    .mapKeys((v, k) => _.snakeCase(k))
    .value()
);

export const globalUserTokenInterceptor = (config) => {
  if (!_.has(config, 'headers.Authorization')) {
    _.merge(config, { headers: { Authorization: `Bearer ${global.userToken}` } });
  }

  return config;
};

export const onStatus = (response, expectedStatusOrStatuses, callback) => {
  const expectedStatuses = (expectedStatusOrStatuses instanceof Array)
    ? expectedStatusOrStatuses : [expectedStatusOrStatuses];

  return _.includes(expectedStatuses, response.status) ? callback(response.data) : null;
};

