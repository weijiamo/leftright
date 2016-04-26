<template>
  <div class="bs-docs-section {{'tabs-categary'}}" id="tabs" >
    <div class="bs-example">
      <tabs v-ref:myTabs>
        <tab header="One">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse
             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
             proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </tab>
        <tab header="Two">
           <kline></kline>
        </tab>
        <tab header="Three">
          hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!
        </tab>
      </tabs>
    </div>
</template>

<script>
  import tabs from 'vue-strap/src/Tabset.vue'
  import tab from 'vue-strap/src/Tab.vue'
  import kline from 'src/components/kLine.vue'
  
  export default {
    components: {
      tabs,
      tab,
      kline
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
  .tabs-categary li {
    width: 33%;
    height: 60px;
    font-size: 26px;
    text-align: center;
    background: red;
  }
</style>
