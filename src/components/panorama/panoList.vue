<template>
  <div class="st-content st-pano-list">
    <div class="st-pano-table-head">
      <table>
          <colgroup>
              <col style="width: 3rem;" />
              <col />
          </colgroup>
          <thead>
              <thead>
                <tr>
                  <th v-for="key in columnsName"
                    @click="sortBy(key)"
                    :class="{active: sortKey == key}">
                    {{key | capitalize}}
                    <span class="arrow"
                      :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
                    </span>
                  </th>
                </tr>
              </thead>
         </thead>
     </table>
  </div>
    <div class="st-pano-table-body">
      <table>
        <tbody>
          <tr v-for="
            entry in data
            | filterBy filterKey
            | orderBy sortKey sortOrders[sortKey]">
            <td v-for="key in columns">
              {{entry[key]}}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
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
    },
    components: {
      
    }
  }
</script>

<style>
  .st-pano-list{
    height: 28rem;
    font-size: 1rem;
    margin-top: 1rem;
  }

  .st-pano-table-head {
    #padding-right:17px;
    color:#000;
  }
  .st-pano-table-body {
    width: 100%;
    height: 23rem;
    overflow-y: scroll;
  }
  .st-pano-table-head table,.table-body table {
    width:100%;
  }
  .st-pano-table-body table tr:nth-child(2n+1) {
    background-color:#f2f2f2;
  }

  .st-pano-list table {
    #border: 2px solid #42b983;
    border-radius: 3px;
    background-color: #fff;
  }

  .st-pano-list th {
    #background-color: #42b983;
    color: #b88845;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -user-select: none;
    font-size: 1.5rem;
  }

  .st-pano-list td {
    background-color: white;
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
