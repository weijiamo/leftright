<template>
  <table style="width:100%" class="st-stock-navi-back">
    <tr>
      <td style="width:10%"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span></td>
      <td style="width:10%"></td>
      <td style="width:60%">
        <div class="st-stock-navi-title1">腾讯控股</div>
        <div class="st-stock-navi-title2">开盘 08-08</div>
      </td> 
      <td style="width:10%"><span class="glyphicon glyphicon-star" aria-hidden="true"></span></td>
      <td style="width:10%"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></td>
    </tr>
  </table>
</template>

<script>
  export default {
    data() {
      return {
        dynamicData: [5, 15, 25, 35, 45],
        stackedData: [10, 20, 30, 40],
      }
    },
    components: {
    },
    methods: {
      dynamicClick() {
        this.dynamicData = this.dynamicData.map(() => {
          return Math.floor(Math.random() * 50)
        })
      },
      stackedClick() {
        let i = 100
        this.stackedData = this.stackedData.map(() => {
          const random = Math.floor(Math.random() * i)
          i = i - random
          return random
        })
      }
    }
  }
</script>

<style>
  .st-stock-navi-back {
    color: #b88845;
    height: 3.5rem;
    font-size: 1.5rem;
    text-align: center;
  }
  .st-stock-navi-back span{
    top: 0.25rem;
  }
  .st-stock-navi-title1 {
    font-size: 1.5rem;
  }
  .st-stock-navi-title2 {
    font-size: 0.5rem;
    color: gray;
  }
  .st-stock-navi-star {
    font-size: 1.5rem;
    text-align: center;
  }
  .st-stock-navi-edit {
    color: #b88845;
    font-size: 1.5rem;
    text-align: center;
  }
</style>
