<template>
  <table style="width:100%" class="st-stock-transaction">
    <tr>
      <td style="width:20%"></td>
      <td  class="hotspot" style="width:20%"><span class="glyphicon glyphicon-save" style="width:40%" aria-hidden="true"></span>买入</td>
      <td style="width:20%"></td>
      <td  class="hotspot" style="width:20%"><span class="glyphicon glyphicon-open" style="width:40%" aria-hidden="true"></span>卖出</td>
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
  .hotspot:hover{
    /*color: #a87733;*/
    color:red;
  }
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
