require('./assets/docs.css')
require('./assets/style.css')
require('prismjs')
require('./js/showLanguage')

// import gettingStarted from './components/gettingStarted.vue'
// import affix from './components/Affix.vue'
// import container from './components/container.vue'
// import headerDocs from './components/headerDocs.vue'
// import alertDocs from './components/alertDocs.vue'
// import accordionDocs from './components/accordionDocs.vue'
// import affixDocs from './components/affixDocs.vue'
// import asideDocs from './components/asideDocs.vue'
// import carouselDocs from './components/carouselDocs.vue'
// import buttonsDocs  from './components/buttonsDocs.vue'
// import datepickerDocs from './components/datepickerDocs.vue'
// import dropdownDocs from './components/dropdownDocs.vue'
// import modalDocs from './components/modalDocs.vue'
// import popoverDocs from './components/popoverDocs.vue'
// import progressbarDocs from './components/progressbar-docs.vue'
// import selectDocs from './components/selectDocs.vue'
import tabsDocs2 from './components/tabsDocs.vue'
// import tooltipDocs from './components/tooltipDocs.vue'
// import typeaheadDocs from './components/typeaheadDocs.vue'

Vue.config.debug = true

new Vue({
  el: '#wrapper',
  components: {
    // gettingStarted,
    // container,
    // affix,
    // alertDocs,
    // headerDocs,
    // accordionDocs,
    // affixDocs,
    // asideDocs,
    // carouselDocs,
    // buttonsDocs,
    // datepickerDocs,
    // dropdownDocs,
    // modalDocs,
    // popoverDocs,
    // progressbarDocs,
    // selectDocs,
    tabsDocs2,
    // tooltipDocs,
    // typeaheadDocs,
    list: {
      inherit: true,
      template: ''
    }
  },
  data() {
    return {
      anchor: []
    }
  },
  filters: {
    space(val) {
      return val.replace('-', ' ')
    }
  },
  ready() {
    // add h1.anchor.innerHTML to sidebar list
    const anchor = document.querySelectorAll('.anchor')
    this.anchor = [...anchor].map(el=> el.innerHTML.replace(' ', '-'))
    // Scrollspy
    const section = document.querySelectorAll('.bs-docs-section')
    const sections = {}
    const navbar = document.querySelector('#sidenav')
    let i = 0

    window.onload = ()=> {
      Array.prototype.forEach.call(section, (e)=> {
        sections[e.id] = e.offsetTop
      })
    }

    function scrollSpy() {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop

      for (i in sections) {
        // 420 = firstSection.getBoundingClientRect().top (when body.scrollTop = 0)
        // = nav.height + header.height + firstSection.margin-top - 6 (for offset)
        if (sections[i] + 420 <= scrollPosition) {
  	      if (navbar) {
  	        if (navbar.querySelector('.active')) navbar.querySelector('.active').className = ''
  	        navbar.querySelector('a[href*=' + i + ']').parentNode.className = 'active'
  	      }
        }
      }
    }

    window.onscroll = ()=> {
      scrollSpy()
    }
  }
})
