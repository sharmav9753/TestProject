/**
 * Method Naming Convention for methods that map the REST API endpoint.
 *
 * - method name constructed by joining the paths of the API and consider the plural and singular income / outcome form of that related endpoint, e.g. /api/posts/<postId>/comments` will be `postComments` (instead of `postsComments`) since this endpoint is to retrieve specific (single) post's comments.
 * - no need to prepend any prefixes for `get` request
 * - for `post` request, method name should be prefixed by `create`
 * - for `patch` or `put` request, method name should be prefixed by `update`
 * - for `delete` request, method name should be prefixed by `delete`
 * - and for method that behaves dynamically (for example, toggling state), prepend it with `change`
 */
import _ from 'lodash';
import * as utils from './utils';
import * as Config from './Config.json'

const api = utils.createAxiosInstance(Config.BASE_URL);
api.interceptors.request.use(utils.globalUserTokenInterceptor);

export const user = () => api.get(`/api/user`); // Example API call
