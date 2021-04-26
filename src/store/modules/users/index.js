import { get } from '@utils/http-client';

import { FETCH_USERS } from './mutations';

export default {
   state: {
      users: [],
      user: {}
   },
   mutations: {
      async [FETCH_USERS](state, { limit }) {
         const users = await get(`http://jsonplaceholder.typicode.com/users?_limit=${ limit }`);
         if (users.length) {
            state.users = users;
         }
      }
   },
   getters: {
      User(state) {
         return state.user;
      },
      Users(state) {
         return state.users;
      }
   }
}