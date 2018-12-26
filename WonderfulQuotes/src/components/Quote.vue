<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div clcass="panel panel-default">
      <div class="panel-body quote">
        <slot></slot> <!--where to display data being generated in QuoteGrid.vue in terms of div heirarchy-->
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
  .panel-body {
    font-family: 'Arizonia', cursive;
    font-size: 24px;
    color: #6e6e6e;
  }

  .quote {
    cursor: pointer;
  }

  .quote:hover {
    background-color: #ffe2e2;
  }
</style>
