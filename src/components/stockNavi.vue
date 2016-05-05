<template>
  <div class="st-stock-navi">腾讯控股
  </div>
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
  .st-stock-navi {
    height: 3.5rem;
    font-size: 26px;
    text-align: center;
    background: blue;
  }
</style>
