require('./assets/simpletrade.css')
require('./assets/style.css')
require('prismjs')
require('./js/showLanguage')

import stockView from './components/StockView.vue'
import panoView from './components/panorama/panoView.vue'
import welcome from './components/welcome.vue'
import deviceStatus from './components/deviceStatus.vue'
import mainView from './components/mainView.vue'

var filters = require('./utils/filters.js');
Vue.use(filters);
var VueGesture = require('vue-gesture')
Vue.use(VueGesture)
var VueTouch = require('vue-touch')
Vue.use(VueTouch)
Vue.use(require('vue-resource'))
Vue.config.debug = true

var stApp = new Vue({
  el: '#wrapper',
  components: {
    'deviceStatus': deviceStatus,
    'welcome': welcome,
    'stockView': stockView,
    'panoView': panoView,
    'mainView': mainView
  },
  data() {
    return {
      currentView: 'mainView'
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

stApp.currentView = 'mainView'
