<template>
  <div class="bs-docs-section" id="tabs">
    <div v-gesture:swipe="test($event, 'tst')" class="bs-example">
      <tabs v-ref:myTabs>
        <tab header="hello one">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse
             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
             proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </tab>
        <tab header="hello two">
           <kline></kline>
        </tab>
        <tab header="three">
          hello world!
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
    methods: {
      test: function(event, msg) {
        var tabs2 = Vue.component('tabs')
        console.log(this.$refs.mytabs);
        var index = this.$refs.mytabs.activeIndex + 1;
        if (this.$refs.mytabs.$children.length <= index) {
          index = 0;
        }
        this.$refs.mytabs.activeIndex = index;
        console.log(index);    
      }
    }
  }
</script>
