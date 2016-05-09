<template>
  <div class="st-main">
      <tabs class="st-main-tabs" v-ref:mainTabs>
        <tab header="pano">
          <pano-View></pano-View>
        </tab>
        <tab header="stoc">
          <stock-View></stock-View>
        </tab>
      </tabs>
    </div>
</template>

<script>
  import tabs from 'vue-strap/src/Tabset.vue'
  import tab from 'vue-strap/src/Tab.vue'
  import stockView from './stockView.vue'
  import panoView from './panorama/panoView.vue'
  
  export default {
    components: {
      tabs,
      tab,
      panoView,
      stockView
    },
    data: {
    },
    methods: {
      swipe: function(event, msg) {
        //event.preventDefault()
        event.stopPropagation()
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
  
</style>
