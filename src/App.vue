<template>
   <div id="app">
      <b-container class="mt-3">
         <b-alert variant="success" show>Hello World</b-alert>
         <b-alert variant="warning" show>Hello World</b-alert>
         <b-alert variant="danger" show>Hello World</b-alert>
         <b-button @click="makeToast()" variant="info">Show me toaster</b-button>

         <div class="App__Avatars">
            <b-avatar variant="primary" text="WX" class="item"></b-avatar>
            <b-avatar class="item" src="https://www.fillmurray.com/300/300"></b-avatar>
            <b-avatar class="item" variant="info"></b-avatar>
            <b-avatar rounded class="item"></b-avatar>
         </div>

         <div class="mt-3">
            <b-button id="TestButton" variant="outline-info">Messages
               <b-badge variant="success">9</b-badge>
            </b-button>
            <b-tooltip target="TestButton" title="Aloha" placement="bottom"></b-tooltip>
         </div>
         <div class="mt-3">
            <b-breadcrumb :items="bcrumbs"></b-breadcrumb>
         </div>
      </b-container>
      <router-view />
   </div>
</template>

<script>
// Vuex
import { mapMutations, mapGetters } from 'vuex';
import { SET_TOASTER } from './store/names';

export default {
   data: () => ({
      bcrumbs: [
         {
            text: 'Admin',
            to: '/admin',
            active: false
         },
         {
            text: 'Engine',
            href: '#',
            active: true
         }
      ]
   }),
   computed: {
      ...mapGetters([ 'Tooltip' ])
   },
   methods: {
      ...mapMutations({
         setToaster: SET_TOASTER
      }),
      makeToast() {
         this.setToaster({
            title: 'Check1',
            message: 'Lets Go2!!',
            type: 'info',
            show: true
         });
      },
   },
   watch: {
      Tooltip({ title, type: variant, message, show }) {
         if (show) {
            this.$bvToast.toast(message, {
               title,
               toaster: 'b-toaster-bottom-right',
               autoHideDelay: 2000,
               appendToast: true,
               variant,
            });
         }
      }
   }
}
</script>

<style lang="sass">
.App__Avatars
   margin-top: 1rem

   .item
      margin-right: 5px

      &:last-child
         margin-right: 0
</style>