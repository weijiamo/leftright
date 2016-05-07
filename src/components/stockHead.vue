<template>
  <div class="st-stock-market-head">
    <table style="width:100%;height:4rem">
      <tr>
        <td style="width:33%">11-11 14:05</td>
        <td style="width:33%"></td>
        <td style="width:33%"></td> 
      </tr>
      <tr>
        <td style="width:33%">当前价 122.0</td>
        <td style="width:33%">涨跌额 +11</td>
        <td style="width:33%">涨跌幅 +8%</td> 
      </tr>
      <tr>
        <td style="width:33%">成交量 99万股</td>
        <td style="width:33%">成交额 5869万</td>
        <td style="width:33%"></td> 
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    components: {
    }
  }
</script>

<style>
  .st-stock-market-head {
    height: 5rem;
    font-size: 0.8rem;
    color: white;
    text-align: left;
    background: #222020;
    padding-left: 1.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
</style>
