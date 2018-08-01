<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(curlimg,index) in courl" :key="index">
        <a :href="curlimg.href"><img :src="curlimg.url" alt="" style="width: 100%"></a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <index-advertise />
    <img src="../assets/../assets/Discount_event.png" style="width: 100%;height: 100%"/>
    <footer />
  </div>
</template>

<script>
import { swiper,  swiperSlide}from 'vue-awesome-swiper'
export default {
  name: 'Index',
  components: {
    footer: resolve => require(['@/components/Footer'], resolve),
    swiper, // : resolve => require(['vue-awesome-swiper'], resolve),
    swiperSlide, // : resolve => require(['vue-awesome-swiper'], resolve),
    indexAdvertise: resolve => require(['./IndexAdvertise'], resolve)
  },
  data () {
    return {
      pageName: 'index',
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
      }
    }
  }
}
</script>

<style scoped>
  /*品牌专区*/
  .brand_Area{border-bottom: 2px solid #f4f4f4;}
  .brand_event_title{ height: 45px; background: url(../assets/group_event_title.png) no-repeat center; background-size: 50%;}
  .home_brand_event a{ line-height: 0px; display: block;}
  .home_brand_event{ width: 40%; height: 100%;float: left;}
  .home_brand_event img{width: 100%;min-height: 115px;}
  .home_brand_event button{ width: 60%; height: 24px; line-height: 24px; border:0; border-radius: 100px; color: #fff; font-size: 10px; position: absolute; bottom:10%; left: 20%;
    background: -webkit-linear-gradient(left, #FF5353 , #FF2B95); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #FF5353 , #FF2B95); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #FF5353 , #FF2B95); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #FF5353 , #FF2B95); /* 标准的语法（必须放在最后）*/}

  .home_brand_logo{ width: 60%; height: 100%; float: left;}
  .home_brand_logo li{width: 33.33333333%; height: 50%; float: left;}
  .home_brand_logo li a{width: 100%; height: 100%; line-height:0px; display:block;}
  .home_brand_logo li a img{width: 100%; height: 100%; box-sizing:border-box;-moz-box-sizing:border-box; /* Firefox */-webkit-box-sizing:border-box; /* Safari *//* border:1px solid #f4f4f4;*/min-height: 125px;min-width: 125px;max-height: 125px;max-width: 125px;border-radius: 10px; }

  /*产品列表*/
  .product_like_title{ height: 45px; background: url(../assets/product_like_title.png) no-repeat center; background-size: 50%;}
  .product_list {background: #f4f4f4;overflow:hidden;}
  .product_list li{width: 48.5%; background: #fff; margin-left: 1%; margin-top:1%; float: left;text-align: center;position: relative;}
  .rightBox .product_list li:last-of-type{margin-bottom:15px;}
  /*.product_list li a{display: block;/*line-height: 0px;text-align:left} */
  .product_list li a img{width: 100%;}
  /*.product_list li a { width: 96%; margin-top: 5px; margin-left:2%;line-height:18px; font-size: 12px; font-weight: bolder; display: -webkit-box; -webkit-box-orient: vertical;-webkit-line-clamp:1;overflow: hidden;}*/
  .product_price_info{ width:94%; /*height: 60px;*/ margin-left: 3%; margin-top: 12px; float: left;}
  .product_price{float: left;}
  .product_price span{font-size: 14px; line-height:24px; color:#F62449;}
  .product_volume{font-size: 10px; color: #999; line-height:25px;float: right;}
  .active{background: white}

  .tuan_adv{
    width: 70%;
    height:100%;
    float:  left;
    position: relative;
  }
  .brand_event_title{
    text-align:center;
    line-height:30px;
    background-size:100%;
    margin:2.5px 0px;
  }
  .home_brand_event{
    width: 30%;
  }
  .home_brand_event a img{
    width:100%;
    min-height:110px;
    margin:0 0 0 3%;
  }
  .home_brand_event button{
    width:55%;
    height:20px;
    line-height:20px;
    border-radius:10px;
    font-size:8px;
    opacity:0.8;
    position:absolute;
    bottom:5%;
    left:24%;
  }
  .tuan_adv a img{
    width:98.5%;
    height:100%;
    max-width:448px;
    min-height:110px;
    margin:0 0 0 1.5%;
  }
  .tuan_adv button{
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
  .product_list ul li a h3{
    overflow:hidden;
    text-overflow:ellipsis;
    word-wrap: break-word;
    white-space: nowrap;
  }
  .product_list ul li a p{
    font-size:16px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: nowrap;
    width: 100%;
  }
  .product_price_info{
    margin-top:-3px;
    font-size:11px;
  }
  .product_price{
    font-size:11px;
    margin-left:3%;
  }
  .product_volume{
    color:rgba(64, 62, 62, 0.74);
    font-weight:700;
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
  .Brand_store{
    display:inline-block;
    margin:0 auto;
    width:90%;
  }
  .Brand_store a{
    margin:3px;
    height:18px;
    line-height:18px;
    padding:0px 5px;
    font-size:10px;
    border-radius:4px;
    color:#fff;
    background:linear-gradient(to right,#ff5353,#ff2b95);
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
</style>
