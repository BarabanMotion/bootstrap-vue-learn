import { get } from '../../../utils/http-client';

import { FETCH_POSTS } from './mutations';

export default {
   state: {
      cards: [],
      card: {}
   },
   mutations: {
      async [FETCH_POSTS](state, { limit }) {
         const posts = await get(`http://jsonplaceholder.typicode.com/posts?_limit=${ limit }`);
         if (posts.length) {
            state.cards = posts;
         }
      }
   },
   getters: {
      Cards(state) {
         return state.cards;
      },
      Card(state) {
         return state.card;
      }
   }
}