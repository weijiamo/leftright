<template>
  <div class="st-pano-list">
      <demo-grid
        :data="gridData"
        :columns="gridColumns"
        :filter-key="searchQuery">
      </demo-grid>
    </div>
  </div>
</template>

<script>
  export default {
    data: {
      searchQuery: '',
      gridColumns: ['name', 'power'],
      gridData: [
        { name: 'Chuck Norris', power: Infinity },
        { name: 'Bruce Lee', power: 9000 },
        { name: 'Jackie Chan', power: 7000 },
        { name: 'Jet Li', power: 8000 }
      ]
    },
    components: {
      "demoGrid": {
        template: '#grid-template',
        props: {
          data: Array,
          columns: Array,
          filterKey: String
        },
        data: function () {
          var sortOrders = {}
          this.columnsName = ['名称','价格','涨跌幅']
          this.columns = ['name', 'price', 'ratio'];
          this.data = [
            { name: 'Chuck Norris', price: Infinity, ratio: '10%'},
            { name: 'Bruce Lee', price: 9000, ratio: '10%'},
            { name: 'Jackie Chan', price: 7000, ratio: '10%'},
            { name: 'Jackie Chan', price: 7000, ratio: '10%'},
            { name: 'Jackie Chan', price: 7000, ratio: '10%'},
            { name: 'Jackie Chan', price: 7000, ratio: '10%'},
            { name: 'Jackie Chan', price: 7000, ratio: '10%'},
            { name: 'Jackie Chan', price: 7000, ratio: '10%'},
            { name: 'Jackie Chan', price: 7000, ratio: '10%'},
            { name: 'Jackie Chan', price: 7000, ratio: '10%'},
            { name: 'Jackie Chan', price: 7000, ratio: '10%'},
            { name: 'Jackie Chan', price: 7000, ratio: '10%'},
            { name: 'Jackie Chan', price: 7000, ratio: '10%'},
            { name: 'Jackie Chan', price: 7000, ratio: '10%'},
            { name: 'Jackie Chan', price: 7000, ratio: '10%'},
            { name: 'Jackie Chan', price: 7000, ratio: '10%'},
            { name: 'Jackie Chan', price: 7000, ratio: '10%'},
            { name: 'Jet Li', price: 8000, ratio: '10%'}
          ];
          this.columns.forEach(function (key) {
            sortOrders[key] = 1
          })
          return {
            sortKey: '',
            sortOrders: sortOrders
          }
        },
        methods: {
          sortBy: function (key) {
            this.sortKey = key
            this.sortOrders[key] = this.sortOrders[key] * -1
          }
        }
      }
    }
  }
</script>

<style>
  .st-pano-list {
    height: 27rem;
    font-size: 1rem;
    color: #222020;
    text-align: left;
    #background: #00CCFF;
    padding-bottom: 0.5rem;
    padding-left: 2rem;
    margin-top: 1rem;
    overflow-y: scroll;
  }

  .st-pano-list table {
    border: 2px solid #42b983;
    border-radius: 3px;
    background-color: #fff;
  }

  .st-pano-list th {
    background-color: #42b983;
    color: rgba(255,255,255,0.66);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -user-select: none;
  }

  .st-pano-list td {
    background-color: #f9f9f9;
  }

  .st-pano-list th {
    min-width: 8.5rem;
    padding: 1rem 1rem;
  }

  .st-pano-list td {
    min-width: 8.5rem;
    padding: 1rem 1rem;
  }

  .st-pano-list th.active {
    color: #fff;
  }

  .st-pano-list th.active .arrow {
    opacity: 1;
  }

  .st-pano-list .arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: 0.66;
  }

  .st-pano-list .arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #fff;
  }

  .st-pano-list .arrow.dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #fff;
  }

  .st-pano-list #search {
    margin-bottom: 10px;
  }
</style>
