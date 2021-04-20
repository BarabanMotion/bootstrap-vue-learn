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
            <b-button variant="outline-info">Messages
               <b-badge variant="success">9</b-badge>
            </b-button>
         </div>
      </b-container>
   </div>
</template>

<script>


export default {
   data: () => ({}),
   methods: {
      makeToast() {
         this.$bvToast.toast('Test Toaster', {
            title: 'BootstrapVue Toast',
            toaster: 'b-toaster-bottom-right',
            autoHideDelay: 2000,
            appendToast: true,
            variant: 'success',
         });
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