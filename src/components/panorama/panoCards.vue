<template>
  <table style="width:100%" class="st-pano-cards">
    <tr>
      <td style="width:25%"><image src="/resources/images/stock_button_pressed.png" class="st-pano-card-image" align="top"></td>
      <td style="width:25%">
        <image src="/resources/images/trade_button_pressed.png" class="st-pano-card-image" align="top">
      </td> 
      <td style="width:25%"><image src="/resources/images/market_button_pressed.png" class="st-pano-card-image" align="top"></td>
      <td style="width:25%"><image src="/resources/images/personal_button_pressed.png" class="st-pano-card-image" align="top"></td>
    </tr>
  </table>
</template>

<script>  
  export default {
    components: {
    },
    data: {
    },
    methods: {
      swipe: function(event, msg) {
        
      }
    }
  }
</script>

<style>
  .st-pano-cards {
    height: 4rem;
    color: #b88845;
    font-size: 1.5rem; 
    text-align: center; 
    background: white;
    bottom: 0;
    position: fixed;
    width: 100%;
  }
  .st-pano-card-image {
    height: 2rem;
  }
</style>
