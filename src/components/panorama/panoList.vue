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
                    class="st-pano-list-th-{{getKey(key)}}
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
            | orderBy sortKey sortOrders[sortKey]"
            @click="goStock(entry)">
            <td v-for="key in columns" 
              class="st-pano-list-td-{{key}}">
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
      this.key = 0;
      this.data = [
        { name: '中国石油', price: 100, ratio: '11%'},
        { name: '中国石化', price: 24, ratio: '12%'},
        { name: '大江股份', price: 22, ratio: '10%'},
        { name: '佐丹奴', price: 10, ratio: '14%'},
        { name: '甲醛A', price: 2, ratio: '11%'},
        { name: '丽江旅游', price: 30, ratio: '11%'},
        { name: '腾讯控股', price: 10, ratio: '12%'},
        { name: '联想控股', price: 15.1, ratio: '13%'},
        { name: '中国石油', price: 100, ratio: '11%'},
        { name: '中国石化', price: 24, ratio: '12%'},
        { name: '大江股份', price: 22, ratio: '10%'},
        { name: '佐丹奴', price: 10, ratio: '14%'},
        { name: '甲醛A', price: 2, ratio: '11%'},
        { name: '丽江旅游', price: 30, ratio: '11%'},
        { name: '腾讯控股', price: 10, ratio: '12%'},
        { name: '联想控股', price: 15.1, ratio: '13%'},
        { name: '中国石油', price: 100, ratio: '11%'},
        { name: '中国石化', price: 24, ratio: '12%'},
        { name: '大江股份', price: 22, ratio: '10%'},
        { name: '佐丹奴', price: 10, ratio: '14%'},
        { name: '甲醛A', price: 2, ratio: '11%'},
        { name: '丽江旅游', price: 30, ratio: '11%'},
        { name: '腾讯控股', price: 10, ratio: '12%'},
        { name: '联想控股', price: 15.1, ratio: '13%'},
        { name: '中国石油', price: 100, ratio: '11%'},
        { name: '中国石化', price: 24, ratio: '12%'},
        { name: '大江股份', price: 22, ratio: '10%'},
        { name: '佐丹奴', price: 10, ratio: '14%'},
        { name: '甲醛A', price: 2, ratio: '11%'},
        { name: '丽江旅游', price: 30, ratio: '11%'},
        { name: '腾讯控股', price: 10, ratio: '12%'},
        { name: '联想控股', price: 15.1, ratio: '13%'},
        { name: '中国石油', price: 100, ratio: '11%'},
        { name: '中国石化', price: 24, ratio: '12%'},
        { name: '大江股份', price: 22, ratio: '10%'},
        { name: '佐丹奴', price: 10, ratio: '14%'},
        { name: '甲醛A', price: 2, ratio: '11%'},
        { name: '丽江旅游', price: 30, ratio: '11%'},
        { name: '腾讯控股', price: 10, ratio: '12%'},
        { name: '联想控股', price: 15.1, ratio: '13%'},
        { name: '中国石油', price: 100, ratio: '11%'},
        { name: '中国石化', price: 24, ratio: '12%'},
        { name: '大江股份', price: 22, ratio: '10%'},
        { name: '佐丹奴', price: 10, ratio: '14%'},
        { name: '甲醛A', price: 2, ratio: '11%'},
        { name: '丽江旅游', price: 30, ratio: '11%'},
        { name: '腾讯控股', price: 10, ratio: '12%'},
        { name: '联想控股', price: 15.1, ratio: '13%'}
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
      },
      goStock: function (entry) {
        //this.$root.currentView = 'stockView'
        this.$root.$children[0].$refs.maintabs.activeIndex = 1;
        this.$dispatch('show-stock', entry);
      },
      getKey: function (key1) {
        this.key++;
        return this.key;
      }
    },
    components: {
      
    }
  }
</script>

<style>
  .st-pano-list{
    height: 25.5rem;
    font-size: 1.5rem;
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
    #overflow-x: hidden;
  }
  .st-pano-table-head table,.table-body table {
    width:100%;
  }
  .st-pano-table-body table tr:nth-child(2n+1) {
    background-color:#f2f2f2;
  }

  .st-pano-list table {
    #border: 2px solid #42b983;
    border-radius: 0.5rem;
    background-color: #fff;
    border-spacing: 0.5rem;
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
    min-width: 9rem;
    padding: 0.5rem 0.5rem;
  }
  .st-pano-list td {
    min-width: 9rem;
    padding: 0.5rem 0.5rem;
  }

  .st-pano-list .st-pano-list-td-ratio {
    min-width: 7rem;
    text-align: center;
  }
  .st-pano-list .st-pano-list-th-3 {
    min-width: 7rem;
    padding: 0.5rem 0.5rem; 
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
    margin-left: 0.5rem;
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
</style>
