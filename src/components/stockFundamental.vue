<template>
  <div class="st-stock-fundamental">
    <table style="width:100%; height:13rem">
      <tr>
        <td style="width:25%">今开<br>120.0</td>
        <td style="width:25%">昨收<br>120.0</td>
        <td style="width:25%">最高<br>120.0</td> 
        <td style="width:25%">最低<br>120.0</td> 
      </tr>
      <tr>
        <td style="width:25%">成交量<br>1200万股</td>
        <td style="width:25%">成交额<br>120亿</td>
        <td style="width:25%">成交价<br>120.0</td> 
        <td style="width:25%">市值<br>120亿</td> 
      </tr>
      <tr>
        <td style="width:25%">52周最高<br>121.0</td>
        <td style="width:25%">52周最低<br>120.0</td>
        <td style="width:25%">市盈率<br>12</td> 
        <td style="width:25%">周息率<br>0.12%</td> 
      </tr>
    </table>
  </div>
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
    font-size: 1rem;
    color: #222020;
    text-align: left;
    #background: #00CCFF;
    background: white;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 2rem;
  }
</style>
