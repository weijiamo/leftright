<template>
  <div class="st-pano-aggregated">
    <pano-indes></pano-indes>
    <pano-list></pano-list>
  </div>
</template>

<script>
  import panoList from './panoList.vue'
  import panoIndes from './panoIndes.vue'
  export default {
    data() {
      return {
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet'
      }
    },
    components: {
      panoIndes,
      panoList
    }
  }
</script>

<style>
  .st-pano-detail .nav-tabs {
    margin-bottom: 1rem;
  }

  .st-pano-aggregated-price {
    height: 3.0rem;
    font-size: 2rem;
    text-align: left;
    padding-top: 0.5rem;
    #background: yellow;
    background: white;
    color: red;
  }
</style>
