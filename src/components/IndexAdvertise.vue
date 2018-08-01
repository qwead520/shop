<template>
    <div>
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
        <h1><span>{{bannerText}}</span><a class="banner_btn" :href="bannerEnter">{{bannerBtnText}}&gt;</a></h1>
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
    </div>
</template>

<script>
import {Swiper, SwiperSlider} from 'vue-awesome-swiper'
export default {
  name: 'IndexAdvertise',
  components: {Swiper, SwiperSlider},
  data () {
    return {
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
      }
    }
  }
}
</script>

<style scoped>
  /*品牌专区*/
  .brand_Area{border-bottom: 2px solid #f4f4f4;}
  .brand_event_title{ height: 45px; background: url(../assets/group_event_title.png) no-repeat center; background-size: 50%;}
  .adv_left a{ line-height: 0px; display: block;}
  .adv_left{ width: 40%; height: 100%;float: left;}
  .adv_left img{width: 100%;min-height: 115px;}

  .home_brand_logo{ width: 60%; height: 100%; float: left;}
  .home_brand_logo li{width: 33.33333333%; height: 50%; float: left;}
  .home_brand_logo li a{width: 100%; height: 100%; line-height:0px; display:block;}
  .home_brand_logo li a img{width: 100%; height: 100%; box-sizing:border-box;-moz-box-sizing:border-box; /* Firefox */-webkit-box-sizing:border-box; /* Safari *//* border:1px solid #f4f4f4;*/min-height: 125px;min-width: 125px;max-height: 125px;max-width: 125px;border-radius: 10px; }

  .adv_left{ width: 40%; height: 100%;float: left;}
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
  .adv_goods_list:last-child{margin-bottom: 50px;}
  .adv_goods_list h1 {
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
  .adv_goods_list span {
    margin-left: 2%;
  }

  .good_sales_num {
    margin-right: 2%;
    font-size: 10px;
    color: #ccc;
    float: right;
  }
</style>
