import axios from './config';
import Vapi from 'vuex-rest-api';

const RESOURCE_NAME = '/users';

const options = {
  axios: axios
};

const users = new Vapi({
  state: {
    users: []
  },
  ...options
})
  .get({
    action: 'getUser',
    property: 'user',
    path: ({ id }) => `${RESOURCE_NAME}/${id}`
  })
  .get({
    action: 'getUsers',
    property: 'users',
    path: () => RESOURCE_NAME
  })
  .post({
    action: 'postUser',
    property: 'user',
    path: (id) => `${RESOURCE_NAME}/${id}`
  })
  .getStore();

export default users;
