<template>
  <div class="st-pano-main">
      <tabs>
        <tab header="全部">
          <pano-aggregated></pano-aggregated>
        </tab>
        <tab header="港股">
           <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse
             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
             proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </tab>
        <tab header="美股">
          hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!
        </tab>
      </tabs>
    </div>
</template>

<script>
  import tabs from 'vue-strap/src/Tabset.vue'
  import tab from 'vue-strap/src/Tab.vue'
  import panoAggregated from './panoAggregated.vue'
  
  export default {
    components: {
      tabs,
      tab,
      panoAggregated
    },
    data: {
      isA: true,
      isB: false
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
  .st-pano-main li {
    width: 33%;
    height: 2rem;
    font-size: 1rem;
    text-align: center;
    background: #F9F9F7;
  }
  .st-pano-main li a{
    padding: 0.2rem 0.5rem
  }
  .st-pano-main ul {
    margin-bottom: 0px;
    display: block;
  }
  .st-pano-main {
    #height: 85rem;
  }
</style>
