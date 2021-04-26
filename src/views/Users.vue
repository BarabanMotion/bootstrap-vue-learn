<template>
   <b-container>
      <b-table v-if="Users.length" :items="TableUsers" :fields="fields">
         <template #cell(website)="data">
            <b-link
              :href="`http://${data.item.website}`"
              target="_blank"
            >
               {{ data.item.website }}
            </b-link>
         </template>
      </b-table>
      <div class="d-flex justify-content-center" v-else>
         <b-spinner variant="info" label="Loading cards..." class="Cards__spinner"></b-spinner>
      </div>
   </b-container>
</template>

<script>
import { FETCH_USERS } from '@store/modules/users/mutations';
import { mapGetters, mapMutations } from 'vuex';

export default {
   name: 'UsersView',
   data: () => ({
      fields: [
         {
            key: 'id',
            label: 'ID'
         },
         {
            key: 'name',
            label: 'Имя пользователя'
         },
         {
            key: 'phone',
            label: 'Мобильный телефон'
         },
         {
            key: 'website',
            label: 'Веб-сайт'
         }
      ]
   }),
   methods: {
      ...mapMutations({
         fetchUsers: FETCH_USERS
      })
   },
   computed: {
      ...mapGetters(['Users']),
      TableUsers() {
         if (this.Users.length) {
            return this.Users.map(user => {
               return {
                  id: user.id,
                  name: user.name,
                  phone: user.phone,
                  website: user.website
               }
            });
         }

         return [];
      }
   },
   async mounted() {
      await this.fetchUsers({ limit: 3 });
   }
}
</script>

<style scoped>

</style>