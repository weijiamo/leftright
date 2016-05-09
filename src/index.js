require('./assets/simpletrade.css')
require('./assets/style.css')
require('prismjs')
require('./js/showLanguage')

import stockView from './components/StockView.vue'
import panoView from './components/panorama/panoView.vue'
import welcome from './components/welcome.vue'
import deviceStatus from './components/deviceStatus.vue'

var filters = require('./utils/filters.js');
Vue.use(filters);
var VueGesture = require('vue-gesture')
Vue.use(VueGesture)
var VueTouch = require('vue-touch')
Vue.use(VueTouch)
Vue.config.debug = true

var app = new Vue({
  el: '#wrapper',
  components: {
    'deviceStatus': deviceStatus,
    'welcome': welcome,
    'stockView': stockView,
    'panoView': panoView
  },
  data() {
    return {
      currentView: 'panoView',
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

app.currentView = 'stockView'
