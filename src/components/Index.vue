<template>
  <div class="w_640">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(curlimg,index) in courl" :key="index">
        <a :href="curlimg.href"><img :src="curlimg.url" alt="" style="width: 100%"></a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="adv_left">
      <a :href="leftEnter" :title="leftDesc"><img :src="leftImg" :title="leftDesc" :alt="leftDesc"></a>
    </div>
    <div class="adv_right">
      <a :href="rightEnter" :title="rightDesc">
        <img :src="rightImg" :title="rightDesc" :alt="rightDesc">
        <button>{{rightBtnText}}</button>
      </a>
    </div>
    <div class="adv_goods_list">
      <h1 class="red"><span>{{bannerText}}</span><a class="banner_btn" :href="bannerEnter">{{bannerBtnText}}&gt;</a></h1>
      <swiper :options="advGoodsSwiperOption">
        <swiper-slide v-for="(item, index) in advGoods" :key="index">
          <li>
            <a :href="item.goods_url">
              <img :src="item.goods_thumb">
              <h4>{{item.goods_name}}</h4>
              <div class="list_content_price"><strong>￥{{item.goods_price}}</strong><span class="good_sales_num">已售{{item.goods_sales_num}}</span></div>
            </a>
          </li>
        </swiper-slide>
      </swiper>
    </div>
    <nobr class="clear"></nobr>
    <img src="../assets/../assets/Discount_event.png" style="width: 99%;height: 100%"/>
    <div class="adv_left">
      <a :href="leftEnter" :title="leftDesc"><img :src="leftImg" :title="leftDesc" :alt="leftDesc"></a>
    </div>
    <div class="adv_right">
      <a :href="rightEnter" :title="rightDesc">
        <img :src="rightImg" :title="rightDesc" :alt="rightDesc">
        <button>{{rightBtnText}}</button>
      </a>
    </div>
    <div class="adv_goods_list">
      <h1 class="zong"><span>{{bannerText}}</span><a class="banner_btn" :href="bannerEnter">{{bannerBtnText}}&gt;</a></h1>
      <swiper :options="advGoodsSwiperOption">
        <swiper-slide v-for="(item, index) in advGoods" :key="index">
          <li>
            <a :href="item.goods_url">
              <img :src="item.goods_thumb">
              <h4>{{item.goods_name}}</h4>
              <div class="list_content_price"><strong>￥{{item.goods_price}}</strong><span class="good_sales_num">{{item.goods_sales_num}}</span><em>已售</em></div>
            </a>
          </li>
        </swiper-slide>
      </swiper>
    </div>
    <h2 class="product_like_title"></h2>
    <div class="product_list" >
      <ul>
        <li v-for="(good, index) in indexGoods" :key="index">
          <router-link :to="{ path: '/good/'+good.goods_id }">
            <div class="countdown">
              <span style="font-size:10px;">距结束:</span>
              <span style="font-size:12px;" class="goods_time">{{good.goods_time}}</span>
            </div>
            <img :src="good.goods_thumb">
            <h3>{{good.goods_name}} </h3>
          </router-link>
          <div class="product_price_info">
            <div class="product_price"><span>{{good.shop_price}}</span>&nbsp;&nbsp;<del>{{good.market_price}}</del></div>
            <div class="product_volume"><em>已售</em><span>{{good.goods_sales_num}}</span></div>
          </div>
          <br>
          <router-link :to="{ path: '/store/'+ good.supplier.suppliers_id }" class="Brand_store"><a>品牌</a><span>{{good.supplier.suppliers_name}}</span></router-link>
        </li>
      </ul>
      <div style="clear:both;" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="20"></div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Footer from '@/components/Footer'
const infiniteScroll = require('vue-infinite-scroll')
export default {
  name: 'Index',
  directives: infiniteScroll,
  components: {
    Footer,
    swiper,
    swiperSlide
  },
  data () {
    return {
      // 首页轮播图
      courl: [
        {
          courl_id: 1,
          url: 'http://m.renxingsong.cn/data/afficheimg/1532948481296677882.jpg',
          href: '#'
        },
        {
          courl_id: 2,
          url: 'http://m.renxingsong.cn/data/afficheimg/1532948351493570128.jpg',
          href: '#'
        },
        {
          courl_id: 3,
          url: 'http://m.renxingsong.cn/data/afficheimg/1532948367575946512.jpg',
          href: '#'
        },
        {
          courl_id: 4,
          url: 'http://m.renxingsong.cn/data/afficheimg/1532948533296324646.jpg',
          href: '#'
        }
      ],
      // 轮播配置
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          bulletActiveClass: 'active'
        },
        autoplay: {
          delay: 1500,
          stopOnLastSlider: false,
          disableOnInteraction: false
        },
        autoplayDisableOnInteraction: false,
        coverflow: {
          rotate: 30,
          stretch: 10,
          depth: 60,
          modifier: 2,
          slideShadows: true
        },
        effect: 'coverflow',
        paginationType: 'bullets',
        height: 400
      },

      // 左边入口
      leftEnter: '#',
      // 左边图片
      leftImg: 'http://m.renxingsong.cn/themes/haohainew/images/home_discount_event.jpg',
      // 左边alt
      leftDesc: '全场优惠购',
      // 右边入口
      rightEnter: '#',
      // 右边图片
      rightImg: 'http://m.renxingsong.cn/data/afficheimg/1532329679081436832.jpg',
      // 右边alt
      rightDesc: '夏季清仓爆款',
      // 右边按钮文本
      rightBtnText: '立即抢购',
      // 导航文本
      bannerText: '夏行必备',
      // 导航按钮链接
      bannerEnter: '#',
      // 导航按钮文本
      bannerBtnText: '进去看看',
      // 广告商品
      advGoods: [
        {
          goods_id: 1,
          goods_url: '#',
          goods_thumb: 'http://m.renxingsong.cn/data/afficheimg/1526722261272711843.jpg',
          goods_name: '新款夏季女装休闲韩版修身短裙，白搭女款',
          goods_price: 145,
          goods_sales_num: 155
        },
        {
          goods_id: 2,
          goods_url: '#',
          goods_thumb: 'http://m.renxingsong.cn/data/afficheimg/1526722343040404701.jpg',
          goods_name: '新款夏季女装休闲韩版修身短裙，白搭女款',
          goods_price: 145,
          goods_sales_num: 155
        },
        {
          goods_id: 3,
          goods_url: '#',
          goods_thumb: 'http://m.renxingsong.cn/data/afficheimg/1526722307297135595.jpg',
          goods_name: '新款夏季女装休闲韩版修身短裙，白搭女款',
          goods_price: 145,
          goods_sales_num: 155
        },
        {
          goods_id: 4,
          goods_url: '#',
          goods_thumb: 'http://m.renxingsong.cn/data/afficheimg/1526722285644819117.jpg',
          goods_name: '新款夏季女装休闲韩版修身短裙，白搭女款',
          goods_price: 145,
          goods_sales_num: 155
        },
        {
          goods_id: 5,
          goods_url: '#',
          goods_thumb: 'http://m.renxingsong.cn/data/afficheimg/1526722322805086377.jpg',
          goods_name: '新款夏季女装休闲韩版修身短裙，白搭女款',
          goods_price: 145,
          goods_sales_num: 155
        },
        {
          goods_id: 6,
          goods_url: '#',
          goods_thumb: 'http://m.renxingsong.cn/data/afficheimg/1526722297654211329.jpg',
          goods_name: '新款夏季女装休闲韩版修身短裙，白搭女款',
          goods_price: 145,
          goods_sales_num: 155
        },
        {
          goods_id: 1,
          goods_url: '#',
          goods_thumb: 'http://m.renxingsong.cn/data/afficheimg/1526722307297135595.jpg',
          goods_name: '新款夏季女装休闲韩版修身短裙，白搭女款',
          goods_price: 145,
          goods_sales_num: 155
        }
      ],
      advGoodsSwiperOption: {
        slidesPerView: 2,
        breakpoints: {
          // 当宽度小于等于320
          320: {
            slidesPerView: 2
          },
          // 当宽度小于等于480
          480: {
            slidesPerView: 3
          }
        },
        loop: true,
        loopedSlides: 6
      },
      // 首页商品
      indexGoods: [
        {
          goods_id: 1,
          goods_url: '#',
          goods_thumb: 'http://m.renxingsong.cn/data/afficheimg/1526722297654211329.jpg',
          goods_name: '新款夏季女装休闲韩版修身短裙，白搭女款',
          shop_price: 145,
          market_price: 169,
          goods_sales_num: 155,
          goods_time: '4:2:34',
          supplier: {
            suppliers_id: 1,
            suppliers_name: '香蕉计划品牌专卖店'
          }
        },
        {
          goods_id: 1,
          goods_url: '#',
          goods_thumb: 'http://m.renxingsong.cn/data/afficheimg/1526722297654211329.jpg',
          goods_name: '新款夏季女装休闲韩版修身短裙，白搭女款',
          shop_price: 145,
          market_price: 169,
          goods_sales_num: 155,
          goods_time: '4:2:34',
          supplier: {
            suppliers_id: 1,
            suppliers_name: '香蕉计划品牌专卖店'
          }
        },
        {
          goods_id: 1,
          goods_url: '#',
          goods_thumb: 'http://m.renxingsong.cn/data/afficheimg/1526722297654211329.jpg',
          goods_name: '新款夏季女装休闲韩版修身短裙，白搭女款',
          shop_price: 145,
          market_price: 169,
          goods_sales_num: 155,
          goods_time: '4:2:34',
          supplier: {
            suppliers_id: 1,
            suppliers_name: '香蕉计划品牌专卖店'
          }
        },
        {
          goods_id: 1,
          goods_url: '#',
          goods_thumb: 'http://m.renxingsong.cn/data/afficheimg/1526722297654211329.jpg',
          goods_name: '新款夏季女装休闲韩版修身短裙，白搭女款',
          shop_price: 145,
          market_price: 169,
          goods_sales_num: 155,
          goods_time: '4:2:34',
          supplier: {
            suppliers_id: 1,
            suppliers_name: '香蕉计划品牌专卖店'
          }
        }
      ],
      busy: false
    }
  },
  methods: {
    loadMore () {
      this.busy = true
      this.indexGoods.push.apply(this.indexGoods,this.getIndexGoods())
      this.busy = false
    },
    getIndexGoods () {
      return [
        {
          goods_id: 1,
          goods_url: '#',
          goods_thumb: 'http://m.renxingsong.cn/data/afficheimg/1526722297654211329.jpg',
          goods_name: '新款夏季女装休闲韩版修身短裙，白搭女款',
          shop_price: 145,
          market_price: 169,
          goods_sales_num: 155,
          goods_time: '4:2:34',
          supplier: {
            suppliers_id: 1,
            suppliers_name: '香蕉计划品牌专卖店'
          }
        },
        {
          goods_id: 1,
          goods_url: '#',
          goods_thumb: 'http://m.renxingsong.cn/data/afficheimg/1526722297654211329.jpg',
          goods_name: '新款夏季女装休闲韩版修身短裙，白搭女款',
          shop_price: 145,
          market_price: 169,
          goods_sales_num: 155,
          goods_time: '4:2:34',
          supplier: {
            suppliers_id: 1,
            suppliers_name: '香蕉计划品牌专卖店'
          }
        },
        {
          goods_id: 1,
          goods_url: '#',
          goods_thumb: 'http://m.renxingsong.cn/data/afficheimg/1526722297654211329.jpg',
          goods_name: '新款夏季女装休闲韩版修身短裙，白搭女款',
          shop_price: 145,
          market_price: 169,
          goods_sales_num: 155,
          goods_time: '4:2:34',
          supplier: {
            suppliers_id: 2,
            suppliers_name: '香蕉计划品牌专卖店'
          }
        },
        {
          goods_id: 1,
          goods_url: '#',
          goods_thumb: 'http://m.renxingsong.cn/data/afficheimg/1526722297654211329.jpg',
          goods_name: '新款夏季女装休闲韩版修身短裙，白搭女款',
          shop_price: 145,
          market_price: 169,
          goods_sales_num: 155,
          goods_time: '4:2:34',
          supplier: {
            suppliers_id: 3,
            suppliers_name: '香蕉计划品牌专卖店'
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
  .product_like_title {
    height: 45px;
    background: url(../assets/product_like_title.png) no-repeat center;
    background-size: 50%;
  }
  .product_list{
    background: #f4f4f4;
  }
  .product_list li {
    width: 48.5%;
    background: #fff;
    margin-left: 1%;
    margin-top: 1%;
    float: left;
    text-align: center;
    position: relative;
    border: 1px solid #d8d0d0;
  }
  .product_list li:last-of-type{margin-bottom: 50px}
  .product_list li a img{width: 100%;display: block}
  .product_list li a h3 {
    width: 96%;
    height: 34px;
    margin-top: 5px;
    margin-left: 2%;
    line-height: 18px;
    font-size: 13px;
    font-weight: 400;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .product_list ul li a p{
    font-size:16px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: nowrap;
    width: 100%;
  }
  .countdown {
    width: 98px;
    height: 23px;
    padding: 3px auto;
    background: url(../assets/seckilling.png);
    color: #fff;
    opacity: 0.7;
    border-radius: 3px;
    position: absolute;
    right: 0;
  }

  .product_price_info {
    width: 94%;
    margin-left: 3%;
    margin-top: 3px;
    font-size: 11px;
    float: left;
  }
  .product_price {
    font-size: 11px;
    margin-left: 3%;
    float: left;
  }
  .product_price span {
    font-size: 14px;
    line-height: 24px;
    color: #F62449;
  }
  .product_volume {
    color: rgba(64, 62, 62, 0.74);
    font-weight: 700;
    font-size: 10px;
    line-height: 25px;
    float: right;
  }
  .home_brand_logo{
    width:100%;
    overflow-x:scroll;
    overflow-y:hidden;
  }
  .home_brand_logo ul{
    width:850px;
    white-space:nowrap;
  }
  .home_brand_logo ul li{
    width:15%;
    margin:15px 8px 15px 3px;
    box-shadow:3px 3px 5px #888888;
    border-radius: 10px;
  }
  .hiSlider-wrap{
    overflow:hidden;
    position:relative;
    width:100%;
  }
  .hiSlider hiSlider3{
    width:200%;
    left:-375px;
    position:relative;
  }
  .hiSlider-item{
    width:360px;
    float:left;
  }
  .hiSlider-item a img{
    height:90px;
  }
  .Special_event_title{
    text-align:center;
    line-height:30px;
    background-size:100%;
    margin:2.5px 0px;
    height: 45px;
    background: url(../assets/Discount_event.png) no-repeat center;
    background-size: 98%;
  }
  .countdown{
    width:98px;
    height:23px;
    line-height: 23px;
    padding:3px auto;
    background:url(../assets/seckilling.png);
    color:#fff;
    opacity:0.7;
    border-radius:3px;
    position:absolute;
    right:0;
  }
  .countdown span b{
    width:10%;
    color:#fff;
  }
  .product_list li .goods_time {
    font-size: 12px;
    text-align: center;
    line-height: 20px;
    font-size: 10px;
    max-height: 20px;
  }
  .Brand_store{
    display:inline-block;
    margin:0 auto;
    width:90%;
  }
  .Brand_store a{
    margin: 5px 2px;
    height: 18px;
    line-height: 18px;
    padding: 0px 5px;
    font-size: 10px;
    border-radius: 4px;
    color: #fff;
    background: -webkit-gradient(linear,left top, right top,from(#ff5353),to(#ff2b95));
    background: linear-gradient(to right,#ff5353,#ff2b95);
    float: left;
    font-weight: bold;
  }
  .Brand_store span{
    text-align:left;
    float: left;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: nowrap;
    width: 75%;
  }
  .list_content_list {
    width: 100%;
    background: #f4f4f4;
    margin: 0 auto;
    border: 1px solid #c5826d;
    float: left;
  }
  .list_content_list:last-child{margin-bottom: 50px;}
  .list_content_list h1 {
    width: 100%;
    line-height: 45px;
    font-size: 12px;
    color: #fff;
    font-weight: 300;
    background: -webkit-linear-gradient(left, #c5826d , #926659);
    background: -o-linear-gradient(right, #c5826d , #926659);
    background: -moz-linear-gradient(right, #c5826d , #926659);
    background: linear-gradient(to right, #c5826d , #926659);
  }
  .list_content_list span {
    margin-left: 2%;
  }
  .list_content_btn {
    width: 80px;
    height: 22px;
    margin-top: 12px;
    background: #fff;
    text-align: center;
    line-height: 22px;
    border-radius: 22px;
    font-size: 10px;
    color: #F62449;
    float: right;
    margin-right: 2%;
  }
  .list_content_list ul {
    overflow: hidden;
  }
  .list_content_list li {
    /*width: 70%;*/
    background: #fff;
    margin: 2% 0 2% 1%;
    float: left;
  }
  .list_content_list li a {
    display: block;
    line-height: 0px;
  }
  .list_content_list li a img {
    width: 100%;
    display: block;
    margin: 0 auto;
    border: 0 none;
    min-height: 140px;
  }
  .list_content_list li a h4 {
    font-weight: 400;
    line-height: 18px;
    padding: 0px 4px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .list_content_price {
    width: 100%;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    font-size: 12px;
  }
  .list_content_price strong {
    margin-left: 2%;
    font-size: 12px;
    color: #F62449;
    float: left;
  }
  .list_content_list span {
    margin-left: 2%;
  }
  .list_content_nub {
    margin-right: 2%;
    font-size: 10px;
    color: #ccc;
    float: right;
  }
  .list_content_price em {
    font-size: 10px;
    color: #ccc;
    float: right;
  }
  .adv_left{ width: 30%; height: 100%;float: left;}
  .adv_left a{ line-height: 0px; display: block;}
  .adv_left img{width: 100%;min-height: 115px;}

  .adv_right{
    width: 70%;
    height:100%;
    float:  left;
    position: relative;
  }
  .adv_right a img{
    width:98.5%;
    height:100%;
    max-width:448px;
    min-height:110px;
    margin:0 0 0 1.5%;
  }
  .adv_right a button{
    width: 24%;
    height: 20px;
    line-height:18px;
    border:0;
    border-radius:10px;
    color: #fff;
    font-size:8px;
    position: absolute;
    top:72%;
    right: 36%;
    opacity: .8;
    box-shadow: -2px 2px 16px #000000;
    background: -webkit-linear-gradient(left, #FF5353 , #FF2B95); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #FF5353 , #FF2B95); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #FF5353 , #FF2B95); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #FF5353 , #FF2B95); /* 标准的语法（必须放在最后）*/
  }

  .adv_goods_list {
    width: 100%;
    background: #f4f4f4;
    margin: 0 auto;
    border: 1px solid #c5826d;
    float: left;
  }
  .adv_goods_list h1 {
    width: 100%;
    line-height: 45px;
    font-size: 12px;
    color: #fff;
    font-weight: 300;
  }
  .adv_goods_list span {
    margin-left: 2%;
  }
  .banner_btn {
    width: 80px;
    height: 22px;
    margin-top: 12px;
    background: #fff;
    text-align: center;
    line-height: 22px;
    border-radius: 22px;
    font-size: 10px;
    color: #F62449;
    float: right;
    margin-right: 2%;
  }
  .adv_goods_list ul {
    overflow: hidden;
  }
  .adv_goods_list li {
    /*width: 70%;*/
    background: #fff;
    margin: 2% 0 2% 1%;
    float: left;
  }
  .adv_goods_list li a {
    display: block;
    line-height: 0px;
  }
  .adv_goods_list li a img {
    width: 100%;
    display: block;
    margin: 0 auto;
    border: 0 none;
    min-height: 140px;
  }
  .adv_goods_list li a h4 {
    font-weight: 400;
    line-height: 18px;
    padding: 0px 4px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .list_content_price {
    width: 100%;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    font-size: 12px;
  }
  .list_content_price strong {
    margin-left: 2%;
    font-size: 12px;
    color: #F62449;
    float: left;
  }

  .good_sales_num {
    margin-right: 2%;
    font-size: 10px;
    color: #ccc;
    float: right;
  }
  .active{background: white;opacity: 1}

  .red{background: -webkit-linear-gradient(left, #FF5353 , #FF2B95);background: -o-linear-gradient(right, #FF5353 , #FF2B95);background: -moz-linear-gradient(right, #FF5353 , #FF2B95);background: linear-gradient(to right, #FF5353 , #FF2B95);}
  .zong{background: -webkit-linear-gradient(left, #c5826d , #926659);background: -o-linear-gradient(right, #c5826d , #926659);background: -moz-linear-gradient(right, #c5826d , #926659);background: linear-gradient(to right, #c5826d , #926659);}
</style>
