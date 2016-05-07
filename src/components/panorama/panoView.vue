<template>
  <div class="st-pano">
    <pano-tools></pano-tools>
    <pano-main></pano-detail>
  </div>
  <pano-cards></pano-cards>
</template>

<script>
  import panoTools from './panoTools.vue'
  import panoMain from './panoMain.vue'
  import panoCards from './panoCards.vue'
  export default {
    components: {
      panoTools,
      panoMain,
      panoCards
    },
    data: {
    },
    methods: {
      swipe: function(event, msg) {
        //event.preventDefault()
        //event.stopPropagation()
        //console.log(this.$refs.mytabs);
        var index = this.$refs.mytabs.activeIndex;
        if (msg == 'left') {
          index++;
          if (this.$refs.mytabs.$children.length <= index) {
            index = 0;
          }
        } else {
            index--;
            if (index < 0) {
                index = this.$refs.mytabs.$children.length - 1;
            }
        }
        console.log(index);   
        this.$refs.mytabs.activeIndex = index;
      }
    }
  }
</script>

<style>
  .st-pano {
    ##F9F9F7
    background: red;
  }

  body {
    background: #F9F9F7;
  }
</style>