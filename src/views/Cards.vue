<template>
   <b-container>
      <b-card-group deck class="Cards__card-group" v-if="Cards.length">
         <b-card
           v-for="card in Cards"
           class="Cards__card-item"
           :key="card.id"
           :title="card.title"
           :footer="`Post №${card.id}`"
         >
            <b-card-text>{{ card.body }}</b-card-text>
         </b-card>
      </b-card-group>
      <div class="d-flex justify-content-center" v-else>
         <b-spinner variant="info" label="Loading cards..." class="Cards__spinner"></b-spinner>
      </div>
   </b-container>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import { FETCH_POSTS } from '@store/modules/cards/mutations';

export default {
   name: 'CardsView',
   methods: {
      ...mapMutations({
         fetchPosts: FETCH_POSTS
      })
   },
   computed: {
      ...mapGetters(['Cards']),
   },
   async mounted() {
      await this.fetchPosts({ limit: 9 });
   }
}
</script>

<style lang="sass" scoped>
$margins: 10px

.Cards__
   &card-group
      margin-left: $margins
      margin-right: $margins
      margin-bottom: 1rem
      flex: 0 0 31.55%
      max-width: 31.55%

   &card-item
      margin-left: -$margins
      margin-right: -$margins

   &spinner
      width: 3rem
      height: 3rem
</style>