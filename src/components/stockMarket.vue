<template>
  <div class="st-stock-market">
    <div class="st-stock-market-price">122.30</div>
    <stock-head></stock-head>
    <stock-kline></stock-kline>
    <stock-fundamental></stock-fundamental>
  </div>
</template>

<script>
  import stockKline from './stockKline.vue'
  import stockHead from './stockHead.vue'
  import stockFundamental from './stockFundamental.vue'
  export default {
    data() {
      return {
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet'
      }
    },
    components: {
      stockHead,
      stockKline,
      stockFundamental
    }
  }
</script>

<style>
  .st-stock-market-price {
    height: 3.5rem;
    font-size: 2rem;
    text-align: center;
    background: yellow;
  }
</style>
