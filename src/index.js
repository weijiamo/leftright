require('./assets/simpletrade.css')
require('./assets/style.css')
require('prismjs')
require('./js/showLanguage')

import stockView from './components/StockView.vue'
import welcome from './components/welcome.vue'
import deviceStatus from './components/deviceStatus.vue'

var VueGesture = require('vue-gesture')
Vue.use(VueGesture)
var VueTouch = require('vue-touch')
Vue.use(VueTouch)
Vue.config.debug = true

Vue.filter('digit', function(value, decimalPlace) {
    return value.toFixed(decimalPlace || 2);
});
Vue.filter('dateformat', function(value, format) {
    var year = value.getFullYear();
    var month = value.getMonth() + 1;
    var date = value.getDate();
    var hour = value.getHours();
    var minute = value.getMinutes();
    var second = value.getSeconds();
    return format.replace(/Y/, year).replace(/m/, month).replace(/d/, date).replace(/hh/, hour)
        .replace(/H/, hour).replace(/i/, minute).replace(/s/, second);
});

var app = new Vue({
  el: '#wrapper',
  components: {
    'deviceStatus': deviceStatus,
    'welcome': welcome,
    'stockView': stockView
  },
  data() {
    return {
      currentView: 'stockView',
      anchor: [],
      showWelcome: false,
      showStock: true,
      showDeviceStatus: true
    }
  },
  filters: {
    space(val) {
      return val.replace('-', ' ')
    }
  },
  ready() {
  }
})

app.currentView = 'welcome'
