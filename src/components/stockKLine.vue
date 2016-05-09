<template>
    <div class="k-nav">
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
    </div>
    <div class="chart-container">
      <div id="canvas" class="chart-canvas"></div>
      <div class="tooltip" v-el:tooltip>
        <div class="tooltip-body">
            <div class="tooltip-item">
                <div>开盘价</div>
                <div>{{tooltip.openprice | digit}}</div>
            </div>
            <div class="tooltip-item">
                <div>收盘价</div>
                <div>{{tooltip.closeprice | digit}}</div>
            </div>
            <div class="tooltip-item">
                <div>最高</div>
                <div>{{tooltip.highprice | digit}}</div>
            </div>
            <div class="tooltip-item">
                <div>最低</div>
                <div>{{tooltip.lowprice | digit}}</div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
  // var echarts = require('echarts');
  // 引入 ECharts 主模块
    var echarts = require('echarts/lib/echarts');
    require('echarts/lib/chart/line')
    require('echarts/lib/chart/bar')
    require('echarts/lib/chart/candlestick');
    var tooltip = require('echarts/lib/component/tooltip');
    require('echarts/lib/component/dataZoom');
  export default {
  components: {
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
        freqData: ['分时', '五日', '日K', '周K', '月K']
    }
  },
  methods: {
    handleTabListClick(index, r) {
        this.active = index;
    },
    onPan(e) {
        console.log(e);
        return;
        e.srcEvent.stopPropagation();
        var chartWidth = this.chart.getWidth();
        var dataZoom = this.chart.getOption().dataZoom[0];
        var beta = parseInt(e.distance / chartWidth * 100);
        if(e.direction === 2) {//left
            beta = -Math.abs(beta);
            if(dataZoom.start <= 0) {
                beta = 0;
            }
        } else if(e.direction === 4) {//right
            beta = Math.abs(beta);
            if(dataZoom.end >= 100) {
                beta = 0;
            }
        }
        this.chart.dispatchAction({
                type: 'dataZoom',
                // 可选，dataZoom 组件的 index，多个 dataZoom 组件时有用，默认为 0
                dataZoomIndex: 0,
                // 开始位置的百分比，0 - 100
                start: dataZoom.start + beta,
                // 结束位置的百分比，0 - 100
                end: dataZoom.end + beta,
                // 开始位置的数值
                // startValue: number,
                // 结束位置的数值
                // endValue: number
            });
    },
    timeTrend() {
        var data = {
            categoryData: []
        };
        var option = {
            grid: {
                top: 10,
                left: 40,
                right: 5,
                height: '85%'
            },
            xAxis: {
                type: 'category',
                data: data.categoryData,
                scale: true,
                boundaryGap : true,
                axisLine: {onZero: false},
                splitLine: {show: false},
                splitNumber: 20,
                min: 'dataMin',
                max: 'dataMax'
            },
            yAxis: {
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
            }
        }
    }
  },
  computed: {
    // a computed getter
    deviceWidth: function () {
      return window.screen.width
    }
  },
  ready: function(event, msg) {
  // 基于准备好的dom，初始化echarts实例
    var raw = require('./../data/monthly.js');
    // 开盘，收盘，最低，最高
    var data0 = extract(raw);
    function extract(rawData) {
        var categoryData = [];
        var values = [];
        var volume = [];
        var ma = [];
        var sum = 0;
        for (var i = 0, ln=rawData.secu_klineinfo.length; i < ln; i++) {
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
                color: meta.closeprice > meta.openprice ? 'red': 'green'
            });
            sum += meta.closeprice;
            var mean = 0;
            var freq = 20;
            if(i < freq) {
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
    }

    var option = {
        title: {
            show: false,
            text: '上证指数',
            left: 'center'
        },
        tooltip: {
            show: true,
            showContent: true,
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    type: 'solid',
                    color: '#000'
                }
            },
            alwaysShowContent: true,
            trigger: 'axis',
            // triggerOn: 'click',
            position: [0, 0],
            extraCssText: 'right: 0',
            formatter: function(params) {
                this.tooltip.openprice = params.data[0];
                this.tooltip.closeprice = params.data[1];
                this.tooltip.highprice = params.data[2];
                this.tooltip.lowprice = params.data[3];
                return this.$els.tooltip.innerHTML;
            }.bind(this)
        },
        grid: [{
            left: 40,
            right: 5,
            top: 10,
            height: '45%'
        }, {
            left: 40,
            right: 5,
            height: '15%',
            top: '55%'
        }],
        xAxis: [{
            type: 'category',
            data: data0.categoryData,
            scale: true,
            boundaryGap : true,
            axisLine: {onZero: false},
            splitLine: {show: false},
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
            data: data0.categoryData,
            scale: true,
            boundaryGap : true,
            axisLine: {onZero: false},
            splitLine: {show: false},
            splitNumber: 20,
            min: 'dataMin',
            max: 'dataMax',
            gridIndex: 1
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
            name: '万股',
            nameLocation: 'start',
            nameGap: 30,
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
                    // return value / 10000;
                    return '';
                }
            }
        }],
        dataZoom: [
            {
                type: 'inside',
                start: 50,
                end: 100,
                xAxisIndex: [0, 1]
            },
            {
                show: true,
                type: 'slider',
                y: '90%',
                start: 50,
                end: 100,
                xAxisIndex: [0, 1]
            }
        ],
        series: [
            {
                type: 'candlestick',
                data: data0.values,
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
                data: data0.volume,
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
                data: data0.ma
            }
        ],
        animation: false
    };

    function formatDate(data) {
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            var date = new Date(item[0].replace('-', '/'));
            item[0] = +date;
        }
        return data;
    };
    var myChart = echarts.init(document.getElementById('canvas'));
    myChart.setOption(option);
    myChart.on('touchend', function(e) {
        console.log(e);
    });
    setTimeout(function() {
        myChart.resize();
    }, 500);
    window.onresize = myChart.resize;
    this.chart = myChart;
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

</style>
