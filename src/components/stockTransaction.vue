<template>
  <table style="width:100%" class="st-stock-transaction">
    <tr>
      <td style="width:20%"></td>
      <td style="width:5%"><span class="glyphicon glyphicon-save" aria-hidden="true"></span></td>
      <td style="width:15%">买入</td>
      <td style="width:20%"></td>
      <td style="width:5%"><span class="glyphicon glyphicon-open" aria-hidden="true"></span></td>
      <td style="width:15%">卖出</td>
      <td style="width:20%"></td>
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
  .st-stock-transaction {
    height: 4rem;
    color: #b88845;
    font-size: 1.5rem; 
    text-align: center; 
    #background: #00FF66;
    background: white;
    bottom: 0;
    position: fixed;
    width: 100%;
  }
</style>
