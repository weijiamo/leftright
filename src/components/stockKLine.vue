<template>
    <div class="k-navs">
        <tabs v-ref:kTabs>
            <tab header="分时">
                <div class="chart-container">
                    <div class="chart-canvas time-trend"></div>
                </div>
            </tab>
            <tab header="五日">
                <div class="chart-container">
                    <div class="chart-canvas five-days"></div>
                </div>
            </tab>
            <tab header="日K">
                <div class="chart-container">
                    <div class="chart-canvas daily"></div>
                </div>
            </tab>
            <tab header="周K">
                <div class="chart-container">
                    <div class="chart-canvas weekly"></div>
                </div>
            </tab>
            <tab header="月K">
                <div class="chart-container">
                    <div class="chart-canvas monthly"></div>
                </div>
            </tab>
        </tabs>
    </div>
<!--     <div class="k-nav">
        <div
            v-for="r in freqData"
            v-bind:class="{
              'active': ($index === active),
              'row-item': true
            }"
            @click.prevent="handleTabListClick($index, r)"
        >
            <span>  
                <slot name="header"> 
                  {{ r }}
                </slot> 
            </span>
        </div>
    </div> -->
<!--     <div class="chart-container">
      <div id="canvas" class="chart-canvas"></div>
      <div class="tooltip" v-el:tooltip>
        <div class="tooltip-body">
            <div class="tooltip-item">
                <div>开盘价</div>
                <div>{{tooltip.openprice | digit}}</div>
            </div>
            <div class="tooltip-item">
                <div>收盘�/div>
                <div>{{tooltip.closeprice | digit}}</div>
            </div>
            <div class="tooltip-item">
                <div>最�/div>
                <div>{{tooltip.highprice | digit}}</div>
            </div>
            <div class="tooltip-item">
                <div>最�/div>
                <div>{{tooltip.lowprice | digit}}</div>
            </div>
        </div>
    </div>
    </div> -->
</template>

<script>
  import tabs from 'vue-strap/src/Tabset.vue'
  import tab from 'vue-strap/src/Tab.vue'
// var echarts = require('echarts');
// 引入 ECharts 主模�
var echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/line')
require('echarts/lib/chart/bar')
require('echarts/lib/chart/candlestick');
// require('echarts/lib/component/tooltip');
require('echarts/lib/component/dataZoom');
// require('./tooltip/TooltipView.js');
export default {
    components: {
        tabs, tab
    },
    data() {
        return {
            tooltip: {
                openprice: 0,
                closeprice: 0,
                highprice: 0,
                lowprice: 0
            },
            active: 0,
            kData: {},
            kCharts: [],
            timeCharts: [],
            freqData: ['分时', '五日', '日K', '周K', '月K']
        }
    },
    events: {
        'show-stock': function(data) {
            this.drawTimeTrend();
        }
    },
    methods: {
        handleTabListClick(index, r) {
            this.active = index;
            if(index < 2) {
                this.drawTimeTrend();
            } else {
                this.drawCandlestick();
            }
        },
        onPan(e) {
            console.log(e);
            return;
            e.srcEvent.stopPropagation();
            var chartWidth = this.chart.getWidth();
            var dataZoom = this.chart.getOption().dataZoom[0];
            var beta = parseInt(e.distance / chartWidth * 100);
            if (e.direction === 2) { //left
                beta = -Math.abs(beta);
                if (dataZoom.start <= 0) {
                    beta = 0;
                }
            } else if (e.direction === 4) { //right
                beta = Math.abs(beta);
                if (dataZoom.end >= 100) {
                    beta = 0;
                }
            }
            this.chart.dispatchAction({
                type: 'dataZoom',
                // 可选，dataZoom 组件�index，多�dataZoom 组件时有用，默认�0
                dataZoomIndex: 0,
                // 开始位置的百分比，0 - 100
                start: dataZoom.start + beta,
                // 结束位置的百分比� - 100
                end: dataZoom.end + beta,
                // 开始位置的数�
                // startValue: number,
                // 结束位置的数�
                // endValue: number
            });
        },
        extractData(rawData) {
            var categoryData = [];
            var values = [];
            var volume = [];
            var ma = [];
            var sum = 0;
            for (var i = 0, ln = rawData.secu_klineinfo.length; i < ln; i++) {
                var item = rawData.secu_klineinfo[i];
                var meta = item.basic_info;
                var time = item.time + '';
                var year = time.substr(0, 4);
                var month = time.substr(4, 2);
                var date = time.substr(6);
                categoryData.push(year + '/' + month + '/' + date);
                values.push([meta.openprice, meta.closeprice, meta.lowprice, meta.highprice]);
                volume.push({
                    value: meta.volume.low,
                    color: meta.closeprice > meta.openprice ? 'red' : 'green'
                });
                sum += meta.closeprice;
                var mean = 0;
                var freq = 20;
                if (i < freq) {
                    mean = sum / (i + 1);
                } else {
                    sum -= rawData.secu_klineinfo[i - freq].basic_info.closeprice;
                    mean = sum / freq;
                }
                ma.push(mean);
            }
            return {
                categoryData: categoryData,
                values: values,
                volume: volume,
                ma: ma
            };
        },
        extractTimeTrendData(rawData) {
            var categoryData = [];
            var values = [];
            var volume = [];
            var timeInfo = rawData.day_timeinfo[0].secu_timeinfo;
            for(var i = 0, ln = timeInfo.length; i < ln; i++) {
                var item = timeInfo[i];
                categoryData.push(item.time);
                values.push(item.averageprice);
            }
            return {
                categoryData: categoryData,
                values: values
            };
        },
        getKChartOptions() {
            var option = {
                grid: [{
                    left: 40,
                    right: 5,
                    top: 10,
                    height: '50%'
                }, {
                    left: 40,
                    right: 5,
                    height: '20%',
                    top: '55%'
                }],
                xAxis: [{
                    type: 'category',
                    data: [],
                    scale: true,
                    boundaryGap: true,
                    axisLine: { onZero: false },
                    splitLine: { show: false },
                    splitNumber: 20,
                    min: 'dataMin',
                    max: 'dataMax',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    }
                }, {
                    type: 'category',
                    data: [],
                    scale: true,
                    boundaryGap: true,
                    axisLine: { onZero: false },
                    splitLine: { show: false },
                    splitNumber: 20,
                    min: 'dataMin',
                    max: 'dataMax',
                    gridIndex: 1,
                    axisLabel: {
                        formatter(val) {
                            return val && val.substr(2);
                        }
                    }
                }],
                yAxis: [{
                    scale: true,
                    splitNumber: 3,
                    splitArea: {
                        show: true
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    }
                }, {
                    gridIndex: 1,
                    splitNumber: 1,
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        formatter(value, index) {
                            return '';
                        }
                    }
                }],
                dataZoom: [{
                    type: 'inside',
                    start: 80,
                    end: 100,
                    xAxisIndex: [0, 1]
                }, {
                    show: true,
                    type: 'slider',
                    y: '90%',
                    start: 90,
                    end: 100,
                    xAxisIndex: [0, 1]
                }],
                series: [{
                    type: 'candlestick',
                    data: [],
                    itemStyle: {
                        normal: {
                            color: 'red',
                            borderColor: 'red',
                            color0: 'green',
                            borderColor0: 'green'
                        }
                    }
                }, {
                    type: 'bar',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    data: [],
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                return params.data.color;
                            }
                        }
                    }
                }, {
                    type: 'line',
                    symbolSize: 0,
                    lineStyle: {
                        normal: {
                            color: 'orange'
                        }
                    },
                    data: []
                }],
                animation: false
            };
            return option;
        },
        drawCandlestick(freq) {
            if(this.kData[freq]) {
                return;
            }
            var option = this.getKChartOptions();
            function formatDate(data) {
                for (var i = 0; i < data.length; i++) {
                    var item = data[i];
                    var date = new Date(item[0].replace('-', '/'));
                    item[0] = +date;
                }
                return data;
            };
            var domCls = ['.daily', '.weekly', '.monthly'];
            var myChart = echarts.init(document.querySelector(domCls[freq]));
            myChart.setOption(option);
            setTimeout(function() {
                myChart.resize();
            }, 0);
            window.addEventListener('resize', function() {
                myChart.resize();
            })
            this.kCharts[freq] = myChart;

            function setData(data) {
                var initItemCount = 50;
                var zoomStart = 100 - (initItemCount / data.categoryData.length) * 100;
                myChart.setOption({
                    xAxis: [{
                        data: data.categoryData
                    }, {
                        data: data.categoryData
                    }],
                    series: [{
                        data: data.values
                    }, {
                        data: data.volume
                    }],
                    dataZoom: [{
                        start: zoomStart
                    }, {
                        start: zoomStart
                    }]
                })
            }
            myChart.showLoading();
            this.$http({
                url: 'http://139.196.107.119/service/marketSecuKLine',
                method: 'GET',
                params: {
                    exchgid: 0,
                    securitycode: '00700',
                    klinetype: freq || 0
                },
                timeout: 15000
            }).then(function(response) {
                myChart.hideLoading();
                console.log(response.data);
                var data = this.extractData(response.data.data);
                setData(data);
                this.kData[freq] = data;
            }.bind(this), function(err) {
                myChart.hideLoading();
            });
        },
        drawTimeTrend(freq) {
            var raw = require('./../data/timetrend.js');
            var data = this.extractTimeTrendData(raw);
            var option = {
                grid: {
                    top: 10,
                    left: 40,
                    right: 15,
                    height: '85%'
                },
                xAxis: {
                    type: 'category',
                    data: data.categoryData,
                    scale: true,
                    boundaryGap: true,
                    axisLine: { onZero: false },
                    splitLine: { show: false },
                    splitNumber: 20,
                    min: 'dataMin',
                    max: 'dataMax',
                    axisLabel: {
                        formatter(val) {
                            var hour = ~~(val / 100);
                            var minute = val % 100;
                            return hour + ':' + minute;
                        }
                    }
                },
                yAxis: {
                    scale: true,
                    splitNumber: 3,
                    splitArea: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    }
                },
                series: [{
                    type: 'line',
                    symbolSize: 0,
                    lineStyle: {
                        normal: {
                            color: 'red'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: 'rgba(255, 0, 0, 0.5)'
                        }
                    },
                    data: data.values
                }]
            }
            var myChart = echarts.init(document.querySelector('.time-trend'));
            myChart.setOption(option);
            setTimeout(function() {
                myChart.resize();
            }, 0);
            window.addEventListener('resize', function() {
                myChart.resize();
            });
            this.timeCharts[freq] = myChart;
        }
    },
    computed: {
        
    },
    ready: function(event, msg) {
        this.$refs.ktabs.$watch('activeIndex', function(v) {
            console.log(v);
            if(v < 2) {
                this.drawTimeTrend(v);
            } else {
                this.drawCandlestick(v - 2);
            }
        }.bind(this));
    }
}

</script>
<style>
  .st-stock-kline {
    height: 300px;
    width: 100%;
    display: block;
  }

  .chart-container {
    height: 19rem;
    position: relative;
  }

  .chart-canvas {
    height: 100%;
  }

  .tooltip {
    display: none;
  }

  .tooltip-body {
    display: flex;
  }

  .tooltip-item {
    flex: 1;
  }

  .gesture-mask {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 30px;
    z-index: 10;
  }

      .k-nav {
        display: flex;
    }

    .row-item {
        flex: 1;
    }

    .k-nav .row-item {
        text-align: center;
    }

    .active {
        color: #b88845;
    }
    .k-nav {
        height: 50px;
        line-height: 50px;
    }
    .k-navs li {
        width: 20%;
        text-align: center;
    }

    .k-navs .nav-tabs>li>a {
        border: none;
        background: #fff;
        margin: 0;
    }

    .k-navs li.active a,
    .k-navs li.active>a:hover{
        color: #b88845;
        background: #fff;
        border: none;
    }

    .k-navs .nav > li > a:hover,
    .k-navs .nav > li > a:focus {
      background-color: #fff;
    }

</style>
