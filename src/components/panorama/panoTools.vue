<template>
  <table style="width:100%" class="st-pano-tools">
    <tr>
      <td style="width:20%"><span class="glyphicon glyphicon-list" aria-hidden="true"></span></td>
      <td style="width:60%">
        <div class="st-pano-navi-title1">自选股票</div>
      </td> 
      <td style="width:20%"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></td>
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
  .st-pano-tools {
    color: #b88845;
    height: 3.5rem;
    font-size: 1.5rem;
    text-align: center;
    background: #FFFFFF;
  }
  .st-pano-tools span{
    top: 0.25rem;
  }
  .st-pano-navi-title1 {
    font-size: 1.5rem;
    background: #FFFFFF;
  }
  .st-pano-navi-title2 {
    font-size: 0.5rem;
    color: gray;
    background: #FFFFFF;
  }
  .st-pano-navi-star {
    font-size: 1.5rem;
    text-align: center;
    background: #FFFFFF;
  }
  .st-pano-navi-edit {
    color: #b88845;
    font-size: 1.5rem;
    text-align: center;
    background: #FFFFFF;
  }
</style>
