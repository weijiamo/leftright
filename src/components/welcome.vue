<template>
  <div class="bs-docs-section" id="typeahead">
    <h1 class="page-header"><a href="#typeahead" class="anchor">welcome you!</a></h1>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data() {
      return {
        
      }
    },
    methods: {
      googleCallback(items, targetVM) {
        const that = targetVM;
        that.reset()
        that.query = items.formatted_address
      },
      githubCallback(items) {
        window.open(items.html_url, '_blank')
      }
    }
  }
</script>
