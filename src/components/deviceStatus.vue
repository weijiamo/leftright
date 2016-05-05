<template>
  <div class="st-device-status">Battery Lever is {{level}}%
  </div>
</template>

<script>
  export default {
    components: {
    },
    data() {
      return {
        level: 0
      }
    },
    ready: function(event, msg) {
      debugger;
      var me = this;
      document.addEventListener("deviceready", onDeviceReady, false);
      function onDeviceReady() {
          console.log('onDeviceReady222');
          window.addEventListener("batterystatus", onBatteryStatus, false);
          
          function onBatteryStatus(status) {
            console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
            me.level = status.level;
          }
      }
    }
  }
</script>

<style>
  .st-device-status {
    background: gray;
    height: 2rem;
    font-size: 20px;
    text-align: center;
  }
</style>
