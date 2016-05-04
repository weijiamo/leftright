require('./assets/simpletrade.css')
require('./assets/style.css')
require('prismjs')
require('./js/showLanguage')

import stockView from './components/StockView.vue'
import welcome from './components/welcome.vue'
import deviceStatus from './components/deviceStatus.vue'
var VueGesture = require('vue-gesture')
Vue.use(VueGesture)
Vue.config.debug = true

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
