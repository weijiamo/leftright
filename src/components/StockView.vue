<template>
  <div class="bs-docs-section" id="tabs">
    <div v-gesture:swipe="test($event, 'tst')" class="bs-example">
      <tabs>
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
           <p>
              Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
           </p>
        </tab>
        <tab header="three" disabled>
          ...
        </tab>
      </tabs>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<tabs :active="0">
  <tab header="one">
    ...
  </tab>
  <tab header="two">
    ...
  </tab>
  <tab header="three" disabled>
    ...
  </tab>
</tabs>
</script></code></pre>
</template>

<script>
  import tabs from 'vue-strap/src/Tabset.vue'
  import tab from 'vue-strap/src/Tab.vue'
  export default {
    components: {
      tabs,
      tab
    },
    methods: {
      test: function(event, msg) {
        console.log(tabs);
        //tabs.activeIndex = 2;
        console.log(msg );
      }
    }
  }
</script>
