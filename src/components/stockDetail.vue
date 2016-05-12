<template>
  <div class="st-stock-detail">
      <tabs v-ref:myTabs class="stock-info-tab">
        <tab header="行情">
          <stock-market></stock-market>
        </tab>
        <tab header="资讯">
           <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse
             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
             proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </tab>
        <tab header="财务">
          hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!
        </tab>
      </tabs>
    </div>
</template>

<script>
  import tabs from 'vue-strap/src/Tabset.vue'
  import tab from 'vue-strap/src/Tab.vue'
  import stockMarket from './stockMarket.vue'
  
  export default {
    components: {
      tabs,
      tab,
      stockMarket
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
  .st-stock-detail li {
    width: 33%;
    height: 2rem;
    font-size: 1rem;
    text-align: center;
    background: #F9F9F7;
  }
  .st-stock-detail li a{
    padding: 0.2rem 0.5rem
  }

  .st-stock-detail .nav-tabs {
    margin-bottom: 0px;
  }
  .st-stock-detail {
    #height: 85rem;
  }

  .st-stock-detail .nav-tabs>li>a {
    border: none;
    background: #fff;
    margin: 0;
    padding-bottom: 10px;
  }

  .nav-tabs>li.active>a, 
  .nav-tabs>li.active>a:focus, 
  .nav-tabs>li.active>a:hover {
    color: #b88845;
  }

  .st-stock-detail .nav-tabs>li.active>a {
    color: #b88845;
  }

  .st-stock-detail li.active a,
  .st-stock-detail li.active>a:hover{
      color: #b88845;
      background: #fff;
      border: none;
  }

  .st-stock-detail .nav > li > a:hover,
  .st-stock-detail .nav > li > a:focus {
    background-color: #fff;
  }

  .stock-info-tab > ul li.active a:after {
    content: '';
    border: 1px solid #b88845;
    width: 30%;
    position: absolute;
    bottom: 0;
    margin: auto;
    left: 35%;
  }
</style>
