<template>
   <div id="Admin__Page">
      <b-container>
         <h1 class="text-center">Admin Page</h1>
         <b-calendar v-model="calendarValue" locale="ru-RU" />
      </b-container>
   </div>
</template>

<script>
export default {
   name: 'AdminView',
   data: () => ({
      calendarValue: 0
   })
}
</script>

<style lang="less">

</style>