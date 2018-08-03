<template>
    <div class="w_640">
      <div class="w_640">
        <!--搜索框-->
        <div class="classify_top_bar">
          <div class="classify_back">
            <a href="JavaScript:history.back(-1)"><img src="http://m.renxingsong.cn/themes/haohainew/images/backtrack2.png"></a>
          </div>
          <div class="classify_search"><a><i class="search_icon"></i>搜索关键词</a></div>
        </div>
        <!--左侧-->
        <div class="l_left" id="con_left">
          <ul class="job_sub">
            <li v-for="cat in cat_list" :key="cat.cat_id" :class="{ on: selectCat(cat.cat_id) }" :id="cat.cat_id"> <router-link :to="{ name: 'Mall', params: cat.cat_id }">{{cat.title}}</router-link></li>
          </ul>
        </div>
        <!--右侧-->
        <div class="l_right" id="con_right">
          <div class="rightBox" id="scroller">
            <div class="product_list">
              <ul>
                <li v-for="good in goods_list" :key="good.goods_id">
                  <router-link :to="{ name: 'Good', params: good.goods_id }">
                    <img :src="good.goods_thumb">
                    <h3>{{good.goods_name}}</h3>
                  </router-link>
                  <span style="font-size:10px">剩余：</span><span class="goods_time" id="leftTime0">{{good.goods_time}}</span>
                  <div class="product_price_info">
                    <div class="product_price"><span>￥{{good.goods_team_price || good.goods_shop_price }}</span>&nbsp;&nbsp;<span style="text-decoration: line-through;font-size: 10px;color: #999;">￥{{good.goods_market_price}}</span></div>
                    <div class="product_volume"><em>已售</em><span>{{good.goods_sales_num}}</span></div>
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
      goods_list: [],
      cat_list: []
    }
  },
  methods: {
    getGoodListById (id) {
      var data
      switch (parseInt(id)) {
        case 0:
          data = [
            {
              goods_id: 1,
              goods_thumb: 'http://m.renxingsong.cn/images/201807/1531715475611467235.jpg',
              goods_name: '测试测试',
              goods_time: '28:18:49',
              goods_market_price: 39,
              goods_shop_price: 19,
              goods_team_price: 15,
              goods_sales_num: 124
            },
            {
              goods_id: 2,
              goods_thumb: 'http://m.renxingsong.cn/images/201805/1527471155117433080.jpg',
              goods_name: '超帅超帅的小哥哥一只',
              goods_time: '30:18:49',
              goods_market_price: 39,
              goods_shop_price: 20,
              goods_team_price: 16,
              goods_sales_num: 125
            }]
          break
        case 1:
          data = [
            {
              goods_id: 3,
              goods_thumb: 'http://m.renxingsong.cn/images/201807/1531715475611467235.jpg',
              goods_name: '测试测试',
              goods_time: '28:18:49',
              goods_market_price: 39,
              goods_shop_price: 21,
              goods_team_price: 17,
              goods_sales_num: 126
            },
            {
              goods_id: 4,
              goods_thumb: 'http://m.renxingsong.cn/images/201807/1532507671841929136.jpg',
              goods_name: '南极人防寒足贴保暖御寒足贴',
              goods_time: '10:18:49',
              goods_market_price: 39,
              goods_shop_price: 22,
              goods_team_price: 18,
              goods_sales_num: 127
            }]
          break
        case 2:
          data = [
            {
              goods_id: 5,
              goods_thumb: 'http://m.renxingsong.cn/images/201807/1531715475611467235.jpg',
              goods_name: '测试测试',
              goods_time: '28:18:49',
              goods_market_price: 77,
              goods_shop_price: 41,
              goods_team_price: 58,
              goods_sales_num: 129
            },
            {
              goods_id: 6,
              goods_thumb: 'http://m.renxingsong.cn/images/201805/1527471155117433080.jpg',
              goods_name: '超帅超帅的小哥哥一只',
              goods_time: '30:18:49',
              goods_market_price: 69,
              goods_shop_price: 28,
              goods_team_price: 68,
              goods_sales_num: 189
            }]
          break
        case 3:
          data = [
            {
              goods_id: 7,
              goods_thumb: 'http://m.renxingsong.cn/images/201807/1532329491799991208.jpg',
              goods_name: '南极人儿童雨衣儿童雨衣男童女童幼儿园宝宝小学生小孩子带书包位时尚雨披',
              goods_time: '69:18:49',
              goods_market_price: 34,
              goods_shop_price: 45,
              goods_team_price: 98,
              goods_sales_num: 457
            },
            {
              goods_id: 8,
              goods_thumb: 'http://m.renxingsong.cn/images/201807/1532329901215654923.jpg',
              goods_name: '真丝刺绣冰敷眼罩   睡觉冰袋缓解眼疲劳',
              goods_time: '20:18:49',
              goods_market_price: 96,
              goods_shop_price: 27,
              goods_team_price: 52,
              goods_sales_num: 169
            }]
          break
        case 4:
          data = [
            {
              goods_id: 9,
              goods_thumb: 'http://m.renxingsong.cn/images/201805/1526718821568842950.jpg',
              goods_name: '日本安心睡眠女式内衣',
              goods_time: '14:18:49',
              goods_market_price: 78,
              goods_shop_price: 45,
              goods_team_price: 36,
              goods_sales_num: 145
            },
            {
              goods_id: 10,
              goods_thumb: 'http://m.renxingsong.cn/images/201805/1527471155117433080.jpg',
              goods_name: '超帅超帅的小哥哥一只',
              goods_time: '30:18:49',
              goods_market_price: 19,
              goods_shop_price: 44,
              goods_team_price: 45,
              goods_sales_num: 189
            }]
          break
        default :
          data = []
      }
      return data
    },
    getCatById (id) {
      return [
        {
          cat_id: 0,
          title: '全部'
        },
        {
          cat_id: 1,
          title: '女装'
        },
        {
          cat_id: 2,
          title: '情趣用品'
        },
        {
          cat_id: 3,
          title: '内衣'
        },
        {
          cat_id: 4,
          title: '百货'
        }
      ]
    },
    selectCat (id) {
      return id === parseInt(this.$route.params.id)
    }
  },
  created () {
    this.goods_list = this.goods_list.concat(this.getGoodListById(this.$route.params.id))
    this.cat_list = this.cat_list.concat(this.getCatById(this.$route.params.id))
  },
  mounted () {
  },
  computed: {

  },
  beforeRouteUpdate (to, from, next) {
    this.goods_list = this.goods_list.splice(this.goods_list.length).concat(this.getGoodListById(this.$route.params.id))
    this.cat_list = this.cat_list.splice(this.cat_list.length).concat(this.getCatById(this.$route.params.id))
    next()
  }
}
</script>

<style scoped>
  .color{color:#019fe9;}
  .clear{clear:both;}
  .clearfix:before,.clearfix:after{content:' ';display:block;overflow:hidden;visibility:hidden;width:0;height:0;}
  .clearfix:after{clear:both;}
  .clearfix{zoom:1;}
  .disp{display:none;}
  .new_wap_con{max-width:480px;min-width:320px;margin:0 auto;background-color:#fff;}
  .new_wap_con2{background-color:#eee;}
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
  .product_list li{width: 48.5%; background: #fff; margin-left: 1%; margin-top:1%; float: left;text-align: center;position: relative;border: 1px solid #dad6d6;}
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
