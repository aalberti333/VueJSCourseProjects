<template>
  <div class="row">
    <form>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <label>Quote</label>
        <textarea class="form-control" rows="3" v-model="quote"></textarea>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <button class="btn btn-primary" v-on:click.prevent="createNew">Add Quote</button>
        <!-- prevent means, prevent the default form submission, and use the createNew method instead-->
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        quote: ''
      };
    },
    methods: {
      createNew() {
        this.$emit('quoteAdded', this.quote); //broadcasts the quote taken from <textarea> to the parent App.vue. Then removes it from the textfield
        this.quote = '';
      }
    }
  }
</script>

<style>
</style>
