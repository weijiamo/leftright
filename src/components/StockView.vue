<template>
  <div class="st-stock">
    <stock-navi></stock-navi>
    <stock-detail></stock-detail>
    <stock-transaction></stock-transaction>
  </div>
</template>

<script>
  import stockNavi from './stockNavi.vue'
  import stockDetail from './stockDetail.vue'
  import stockTransaction from './stockTransaction.vue'
  
  export default {
    components: {
      stockNavi,
      stockDetail,
      stockTransaction
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
