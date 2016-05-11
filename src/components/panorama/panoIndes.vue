<template>
    <div class="st-content st-pano-indes">
      <div class="st-pano-indes-exchanger">
        <table style="width:100%;height:100%">
          <tr>
            <td style="width:10%"><image src="/resources/images/hk_flag.png" class="st-pano-indes-image-hk" align="top"></image></td>
            <td style="width:45%">香港</td>
            <td style="width:45%" class="st-pano-indes-exchanger-opentext">休市 05-06 16:00:00</td> 
          </tr>
        </table>
      </div>
      <div class="st-pano-indes-items">
        <table style="width:100%;height:100%">
          <tr>
            <td style="width:33%">
              <div class="st-pano-indes-item">
                <h3>恒生指数</h3>
                <h4>20106</h4>
                <h6>-333 -2.0%</h6>
              </div>
            </td>
            <td style="width:33%">
              <div>
                <h3>国企指数</h3>
                <h4>20106</h4>
                <h6>-333 -2.0%</h6>
              </div>
            </td>
            <td style="width:33%">
              <div>
                <h3>红筹指数</h3>
                <h4>20106</h4>
                <h6>-333 -2.0%</h6>
              </div>
            </td> 
          </tr>
        </table>
      </div>
      <div class="st-pano-indes-switch">
        <table style="width:100%;height:100%">
          <tr>
            <td style="width:33%">
            <td style="width:33%">
              <div class="st-pano-indes-dotdot">
                <span class="glyphicon glyphicon-option-horizontal" aria-hidden="true"></span>
              </div>
            </td>
            <td style="width:33%"></td> 
          </tr>
        </table>
      </div>
    </div>
</template>

<script>
  import { carousel } from 'vue-strap'
  import { slider } from 'vue-strap'
  export default {
    components: {
      carousel,
      slider
    }
  }
</script>

<style>
  .st-pano-indes {
    height: 11rem;
    margin-top: 1rem;
  }
  .st-pano-indes-exchanger {
    font-size: 1rem;
    height: 2rem;
    vertical-align: bottom;
    line-height: 1rem;
  }
  .st-pano-indes-exchanger td{
    font-size: 1rem;
    height: 2rem;
    vertical-align: bottom;
    line-height: 1rem;
  }
  .st-pano-indes-exchanger .st-pano-indes-exchanger-opentext{
    text-align: right;
  }
  .st-pano-indes-image-hk {
    height: 1.2rem;
  }
  .st-pano-indes-items {
    height: 7rem;
  }
  .st-pano-indes-switch {
    height: 2rem;
  }
  .st-pano-indes-item {
    margin: 1rem;
  }
  .st-pano-indes-dotdot {
    text-align: center;
  }
</style>
