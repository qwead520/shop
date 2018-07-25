<template>
    <div>
      <div class="new_wap_con" style="max-width:100%;">
        <!--搜索框-->
        <div class="classify_top_bar">
          <div class="classify_back">
            <a href="JavaScript:history.back(-1)"><img src="http://m.renxingsong.cn/themes/haohainew/images/backtrack2.png"></a>
          </div>
          <div class="classify_search"><a><i class="search_icon"></i>搜索关键词</a></div>
        </div>
        <!--左侧-->
        <div class="l_left" id="con_left">
          <ul class="job_sub" id="scroller1">
            <li class="on" id="quan"> <a href="">全部</a></li>
            <li><a href="">女装</a></li>
            <li><a href="">情趣用品</a></li>
            <li><a href="">内衣</a></li>
            <li><a href="">百货</a></li>
          </ul>
        </div>
        <!--右侧-->
        <div class="l_right" id="con_right">
          <div class="rightBox" id="scroller">
            <div class="product_list">
              <ul>
                <li>
                  <a href="goods.php?id=20&amp;uid=0">
                    <img src="http://m.renxingsong.cn/images/201806/1529741885227120692.jpg">
                    <h3>香蕉计划延时湿巾</h3>
                  </a>
                  <span style="font-size:10px">剩余：</span><span class="goods_time" id="leftTime0"><b>51</b>:<b>12</b>:<b>27</b></span>
                  <div class="product_price_info">
                    <div class="product_price"><span>￥15</span>&nbsp;&nbsp;<span style="text-decoration: line-through;font-size: 10px;color: #999;">￥18</span></div>
                    <div class="product_volume"><em>已售</em><span>204</span></div>
                  </div>
                </li>
                <li>
                  <a href="goods.php?id=19&amp;uid=0">
                    <img src="http://m.renxingsong.cn/images/201806/1528855761553597164.jpg">
                    <h3>香蕉计划0.02超薄避孕套无硅油安全套002男用廷时装成人延长湿巾</h3>

                  </a>
                  <span style="font-size:10px">剩余：</span><span class="goods_time" id="leftTime1"><b>3</b>:<b>33</b>:<b>57</b></span>
                  <div class="product_price_info">
                    <div class="product_price"><span>￥68</span>&nbsp;&nbsp;<span style="text-decoration: line-through;font-size: 10px;color: #999;">￥68</span></div>
                    <div class="product_volume"><em>已售</em><span>203</span></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
import Footer from './Footer'
export default {
  name: 'Mall',
  components: {Footer},
  data () {
    return {
      pageName: 'mall',
      cat: [
        {
          cat_id: 0,
          title: '全部'
        }
      ]
    }
  }
}
</script>

<style scoped>

  html,body,div,span,h1,h2,h3,h4,p,em,img,dl,dt,dd,ol,ul,li,table,tr,th,td,form{margin:0;padding:0;border:0;}
  html body{font:14px/1.5 '微软雅黑','宋体', arial, tahoma, simsun;color:#666;background:#fff;height:100%;}
  .new_bod_bg{background-color:#eee;}
  html{height:100%;}
  ul,ol,li{list-style:none;text-align:left;}
  img{vertical-align:top;border:0 none;}
  input,label{vertical-align:middle;}
  input{-webkit-appearance: none ;}
  table{border-collapse:collapse;border-spacing:0;}
  p,div{word-wrap:break-word;}
  .color{color:#019fe9;}
  .clear{clear:both;}
  .clearfix:before,.clearfix:after{content:' ';display:block;overflow:hidden;visibility:hidden;width:0;height:0;}
  .clearfix:after{clear:both;}
  .clearfix{zoom:1;}
  .disp{display:none;}
  .new_wap_con{max-width:480px;min-width:320px;margin:0 auto;background-color:#fff;}
  .new_wap_con2{background-color:#eee;}
  p{color:#333;}
  .hei_10{height:1px;width:100%;background-color:#eee;}
  .bai_heig{height:10px;}
  .top_border{}
  .disp{display:none;}




  .page_cons{height:50px;line-height:50px;table-layout: fixed;background-color:#e5e5e5;width:95%;padding:0 2.5%;position:relative;border-bottom:1px solid #bfbfbf;}
  #mou_input{display: -webkit-box;display:-moz-box;display:box;-webkit-box-flex: 1;-moz-box-flex: 1;box-flex:1;-webkit-appearance:none;box-shadow:none;outline:none;border:2px solid #bfbfbf;height:28px;padding:0 0 0 8px;margin:9px 0px 9px 60px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;color:#c2c2c2;font-size:14px;}
  #clear_val2{display: block;position:absolute;top:7px;right:0px;width:35px;height:35px;background:url('http://rep.mmb.cn/wap/upload/touch/newWap/icon/scfd2.png') no-repeat center center;background-size: 18px auto;border:0;-webkit-appearance:none;box-shadow:none;padding:0;}
  .cons_ser{display:-webkit-box;display: -moz-box;height: 50px;width:100%;position: relative;}
  a#close_serc2{display: block;position:absolute;top:10px;left:2.5%;width:30px;height:30px;background:url('http://rep.mmb.cn/wap/upload/touch/newWap/icon/fh00.png') no-repeat center center;background-size: 12px auto;-webkit-border-radius:30px;-moz-border-radius:30px;border-radius:30px;}

  a.all_cata{width:87.5%;display:block;height:35px;line-height:35px;text-align:center;color:#666;margin:20px auto 0;border:2px solid #666;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;}
  .l_left{position: absolute;top:46px;left:0;width:25%;bottom:40px;overflow: auto;}
  .l_left ul.job_sub li{line-height: 50px;font-size: 16px;color: #e4e4e4;text-align: center; }
  .l_left ul.job_sub li a{color: #252525;display: block;font-size: 14px;padding: 0 4px 0 4px;text-align: center; border: 1px solid #f4f4f4; border-top:none;background: #fff;}
  .l_left ul.job_sub li.on a{ color:#F62449; display: block;text-align: center;background: #fff;border-left:2px solid #F62449;border-top:none;}
  .l_left ul.job_sub li.on:first-child a{ border-top:none;}
  .l_left ul.job_sub li:last-child a{border-bottom:1px solid #e5e5e5;}
  .l_right{position: absolute;top:46px;right:0;background: #f4f4f4;width:75%;bottom:40px;overflow: auto;}
  .fr_ite{padding:15px 0;}
  .pLine{clear: both;width:87.5%;height:2px;background-color: #ededed;margin:10px auto;}
  .fr_ite h1{font-size: 18px; text-align: center;color: #323232;line-height:35px;font-weight:500;}
  #scroller1,#scroller{position: absolute;z-index: 1;-webkit-tap-highlight-color: rgba(0,0,0,0);width: 100%;-webkit-transform: translateZ(0);-moz-transform: translateZ(0);-ms-transform: translateZ(0);-o-transform: translateZ(0);transform: translateZ(0);-webkit-touch-callout: none;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;-webkit-text-size-adjust: none;-moz-text-size-adjust: none;-ms-text-size-adjust: none;-o-text-size-adjust: none;text-size-adjust: none;}

  #ser_page div{float:none;}
  .ser_navs{width:97.5%;padding-left:2.5%;background-color:#fff;border-top:1px solid #eee;border-bottom:1px solid #bfbfbf;}
  .ser_navs li{display: block;border-bottom:1px solid #bfbfbf;}
  .ser_navs li a{width:100%;display: block;height:40px;background-color:#fff;line-height:40px;color:#999;}
  .ser_navs li:last-child{border:none;}
  #sum_inputs{position:absolute;height:34px;top:8px;right:2.5%;width:40px;border:0;-webkit-appearance:none;box-shadow:none;padding:0;background:url(http://rep3.mmb.cn/wap/upload/touch/newWap/icon/scfd.png) no-repeat center center;background-size: 20px auto;}
  #ser_page{position:fixed;top:0;left:0;z-index:9999999;background-color:#eee;width:100%;height:100%;display: none;}
  .page_cons{height:50px;table-layout:fixed;background-color:#e5e5e5;width:95%;padding:0 2.5%;position:relative;}
  #mou_input2{font-size:14px;display: -webkit-box;display:-moz-box;display:box;-webkit-box-flex:1;-moz-box-flex: 1;box-flex:1;-webkit-appearance:none;box-shadow:none;height:28px;border:2px solid #bfbfbf;padding:0 0 0 8px;margin:9px 40px 9px 40px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;color:#c2c2c2;}
  #clear_val{display: block;position:absolute;top:10px;right:40px;width:34px;height:30px;background:url(http://rep3.mmb.cn/wap/upload/touch/newWap/icon/qcs.png) no-repeat center center;background-size: 18px auto;}
  .cons_ser{display:-webkit-box;display:-moz-box;height: 50px;width:100%;position: relative;}
  #close_serc{display:block;position:absolute;top:10px;left:2.5%;width:30px;height:30px;background:url(http://rep3.mmb.cn/wap/upload/touch/newWap/icon/fh00.png) no-repeat 9px 5px #fff;background-size: 10px auto;-webkit-border-radius:30px;-moz-border-radius:30px;border-radius:30px;}
  #sum_page{position:absolute;height:32px;top:8px;right:2.5%;width:40px;border:0;-webkit-appearance:none;box-shadow:none;padding:0;background:url(http://rep3.mmb.cn/wap/upload/touch/newWap/icon/scfd2.png) no-repeat center center;background-size:20px auto;}
  #clear_all{display: block;width:95%;margin:20px auto;height:50px;line-height: 50px;text-align: center;background-color:#EB6100;color:#fff;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;font-size:16px;}
  #no_ser{text-align: center;padding:50px 0;color:#999;}
  #no_ser img{width:50px;padding-bottom:20px;}



  /*分类顶部搜索栏目*/
  .classify_top_bar{width:100%; height:45px; border-bottom:1px solid #f2f2f2; position:fixed; top:0px; z-index:99999;}
  .classify_back{width:15%; height:45px; float:left;}
  .classify_back a{ width:100%; height:45px; display:block; text-align:center;}
  .classify_back img{ width:16px; margin-top:14px;}
  .classify_search{width:80%; height:30px; margin-top:8px; border-radius:25px; border:0; background:#dadada; float:left;}
  .classify_search a{width:100%; display:block; text-align:center; line-height:30px; font-size:10px; color:#fff;}
  .search_icon{ width:12px; height:12px; background:url(../assets/search.png) no-repeat; background-size:12px 12px; margin-top:8px; margin-left:-46px; position:relative; left:50%;  float:left; display:block;}
  .product_class_list{width: 100%; overflow: hidden;}
  .product_class_list ul{overflow: hidden;}
  .product_class_list li{width:49%; background: #fff; margin: 1% 0 1% 1%; float: left;}
  .product_class_list li a{display: block; line-height: 0px;}
  .product_class_list li a img{ width: 100%; }
  .product_class_list li a h4{font-weight: 400;line-height:18px; padding: 0px 4px; display: -webkit-box; -webkit-box-orient: vertical;-webkit-line-clamp:1;overflow: hidden;}
  .product_class_price{ width: 100%; height: 30px; line-height:30px; overflow: hidden; font-size: 12px;}
  .product_class_price strong{ margin-left: 2%; font-size: 12px;color: #F62449;  float: left;}
  .product_class_price em{font-size: 10px; color:#ccc; float: right;}

  /*产品列表*/
  .product_like_title{ height: 45px; background: url(../assets/product_like_title.png) no-repeat center; background-size: 50%;}
  .product_list {background: #f4f4f4; overflow:hidden;}
  .product_list li{width: 48.5%; background: #fff; margin-left: 1%; margin-top:1%; float: left;text-align: center;position: relative;}
  /*.product_list li a{display: block;/*line-height: 0px;text-align:left}*/
  .product_list li a img{width: 100%;}
  /*.product_list li a { width: 96%; margin-top: 5px; margin-left:2%;line-height:18px; font-size: 12px; font-weight: bolder; display: -webkit-box; -webkit-box-orient: vertical;-webkit-line-clamp:1;overflow: hidden;}*/
  .product_price_info{ width:94%; /*height: 60px;*/ margin-left: 3%; margin-top: 12px; float: left;}
  .product_price{float: left;}
  .product_price span{font-size: 14px; line-height:24px; color:#F62449;}
  .product_volume{font-size: 10px; color: #999; line-height:25px;float: right;}
  .product_list ul li a h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: nowrap;
  }
</style>
