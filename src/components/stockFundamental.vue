<template>
  <table style="width:100%" class="st-stock-fundamental">
    <tr>
      <td style="">1</td>
      <td style="">2</td>
      <td style="">3</td> 
    </tr>
    <tr>
      <td style="">4</td>
      <td style="">5</td>
      <td style="">6</td> 
    </tr>
    <tr>
      <td style="">7</td>
      <td style="">8</td>
      <td style="">9</td> 
    </tr>
  </table>
</template>

<script>
  export default {
    data() {
      return {
        showModal: false,
        fadeModal: false,
        zoomModal: false,
        showCustomModal: false,
        largeModal: false,
        smallModal: false
      }
    },
    components: {
    }
  }
</script>

<style>
  .st-stock-fundamental {
    height: 14rem;
    font-size: 2rem;
    color: #222020;
    text-align: center;
    #background: #00CCFF;
    background: white;
  }
</style>
