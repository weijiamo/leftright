<template>
    <div class="chart-container">
      <div id="canvas" class="chart-canvas" 
        v-touch-options:pan="{ direction: 'horizontal'}"
        v-touch:pan.prevent.stop="onPan($event)">
      </div>
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
        }
    }
  },
  methods: {
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
        for (var i = 0, ln=rawData.secu_klineinfo.length; i < ln; i++) {
            var item = rawData.secu_klineinfo[i];
            var meta = item.basic_info;
            var time = item.time + '';
            var year = time.substr(0, 4);
            var month = time.substr(4, 2);
            var date = time.substr(6);
            categoryData.push(year + '/' + month + '/' + date);
            values.push([meta.openprice, meta.closeprice, meta.lowprice, meta.highprice]);
        }
        return {
            categoryData: categoryData,
            values: values
        };
    }

    var option = {
        title: {
            show: false,
            text: '上证指数',
            left: 'center'
        },
        tooltip: {
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    type: 'solid',
                    color: '#000'
                }
            },
            alwaysShowContent: true,
            trigger: 'axis',
            triggerOn: 'click',
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
        grid: {
            left: '10%',
            right: '1%',
            // bottom: '10%'
        },
        xAxis: {
            type: 'category',
            data: data0.categoryData,
            scale: true,
            boundaryGap : false,
            axisLine: {onZero: false},
            splitLine: {show: false},
            splitNumber: 20,
            min: 'dataMin',
            max: 'dataMax'
        },
        yAxis: {
            scale: true,
            splitArea: {
                show: true
            }
        },
        dataZoom: [
            {
                type: 'inside',
                start: 50,
                end: 100
            },
            {
                show: true,
                type: 'slider',
                y: '90%',
                start: 50,
                end: 100
            }
        ],
        series: [
            {
                name: '上证指数',
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
    myChart.on('mousedown', function(e) {
        console.log(e);
    })
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
</style>
