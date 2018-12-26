<template>
  <div class="row">
    <app-quote v-for="(quote, index) in quotes" v-on:click.native="deleteQuote(index)">{{ quote }}</app-quote>
    <!-- done so each <app-quote> tag created will follow the layout given by Quote.vue-->
  </div>
</template>

<script>
import Quote from './Quote.vue';

  export default {
    props: ['quotes'], //data captured from Parent component App.vue
    components: {
      "app-quote": Quote
    },
    methods: {
      deleteQuote(index) {
          this.$emit('quoteDeleted', index)
      }
    }
  }
</script>

<style>
</style>
