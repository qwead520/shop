<template>
  <div style="position: relative;overflow: hidden;" class="w_640">
    <div class="hotsupplier">
      <div class="logo">
        <span>精选店铺</span>
        <span>HOT BRAND</span>
      </div>
    </div>
    <div class="supplierlist" v-if="storeList">
      <div class="suppliercontent" v-for="store in storeList" :key="store.suppliers_id">
        <div class="supplierinfo" v-bind:style="{ backgroundImage: 'url(' + returnBanner(store.suppliers_banner) + ')' }">
          <router-link :to="{ name: 'Store',params: store.suppliers_id}">
            <section class="supplierlogo">
              <img :src="store.suppliers_logo" />
            </section>
            <h3 class="suppliername">{{store.suppliers_name}}</h3>
            <article class="supplierdesc">{{store.suppliers_desc}}</article>
          </router-link>
        </div>
        <div class="bannergoodslist" :class="{ isempty: !store.goods_list }">
          <swiper :options="GoodsSwiperOption">
            <swiper-slide class="bannergoods" v-for="good of store.goods_list" :key="good.goods_id">
              <router-link :to="{ name: 'Good', params: good.goods_id }">
                <img :src="good.goods_thumb" />
                <span class="price">￥{{ good.team_price || good.shop_price }}</span>
                <span class="tag">热销</span>
              </router-link>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <span v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="20">
        <p v-if="!hasNext" class="noNext">人家可是有底线的呢</p>
        <p v-if="getErr" class="noNext" v-on:click="getStore">出错了呢！点击重试或刷新一下哈！</p>
      </span>
    </div>
    <div class="brand_content"  v-else>该分类下无产品呢</div>
    <Footer></Footer>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Footer from './Footer'
const infiniteScroll = require('vue-infinite-scroll')
export default {
  name: 'StoreList',
  components: {
    Footer,
    swiper,
    swiperSlide
  },
  directives: infiniteScroll,
  data () {
    return {
      // 当前页 默认0 created钩子加载一次+1
      nowPage: 0,
      // 分页大小
      limit: 5,
      // 每个商家展示的商品数
      goodsNum: 6,
      // 是否有下一页
      hasNext: false,
      // 商家列表
      storeList: [],
      // 商家商品滚动配置
      GoodsSwiperOption: {
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
      getErr: false,
      busy: false
    }
  },
  methods: {
    returnBanner (storeBanner) {
      return storeBanner || 'http://m.renxingsong.cn/themes/haohainew/images/bannerbg.jpg'
    },
    loadMore () {
      if (!this.hasNext)  return
      this.getStore()
    },
    getStore () {
      this.busy = true
      this.axios.get('/api/storelist/'+this.$route.params.id+'?page='+(this.nowPage+1)+'&limit='+this.limit+'&goodsNum='+this.goodsNum).then((response) => {
        let data = response.data
        if (data.code == 200 && data.data.length > 0) {
          this.storeList.push.apply(this.storeList,data.data)
          this.hasNext = data.pages.pageNow + 8 == data.pages.pageCount ? false : true
          this.nowPage = data.pages.pageNow
          this.getErr = false
        } else {
          this.getErr = true
        }
        this.busy = false
      }).catch((response) => {
        this.getErr = true
        this.busy = false
      })
    }
  },
  created () {
    this.getStore()
  },
  beforeRouteUpdate (to, from, next) {
    this.storeList.splice(this.storeList.length)
    this.nowPage = 0
    this.hasNext = false
    this.getErr = false
    this.getStore()
  }
}
</script>

<style scoped>
    .FightSingle_box{max-width:640px;min-width:120px;margin:0 auto;}
    .FightSingle_times{height:50px;line-height:50px;}
    .FightSingle_time_title{ line-height:42px; margin-left:2%;font-size:12px; float:left;}
    .FightSingle_contents{width:100%;height:auto;margin-top:45px;float:left;}
    .FightSingle_pro_fr_info{ width:60%; margin-left:2%; float:left;}
    .FightSingle_pro_fr_info h2{width:98%; height:34px; margin:0 auto;line-height:16px;text-align:left;font-size:12px;overflow: hidden;text-overflow: ellipsis;-webkit-box-orient: vertical;
        -webkit-line-clamp:2;color:#333;font-weight:400;display: -webkit-box;}
    .FightSingle_pro_fr_info strong{ height:30px; line-height:40px; font-size:18px; color:#f00; text-align:left; float:left;}
    .FightSingle_pro_fr_info span{height:30px; line-height:40px; margin-left:5px; font-size:10px; color:#ccc; text-decoration:line-through; float:left;}
    .FightSingle_pro_fr_btn{width:60%; margin-top:15px; line-height:30px; float:left;}
    .FightSingle_pro_fr_btn button{ width:40%; height:30px; margin-left:3%; background:#f00;border:0; border-radius:3px; color:#fff; font-size:12px;  display:block; float:left; }
    .FightSingle_pro_fr_btn font{ font-size:10px; color:#f00; float:right;}
    .FightSingle_pro_fr_btn em{ font-size:10px; color:#333; float:right;}

    .find_nav{width:100%;height: auto;z-index: 99;display: -moz-box;display: -webkit-box;display: box;}
    .find_nav_left{position: relative;overflow: hidden;-moz-box-flex: 1;-webkit-box-flex: 1;box-flex: 1;}
    .find_nav_list{height:44px; background: rgba(255,255,255,0.96); position:fixed;top:0px;border-bottom:1px solid #e5e5e5; z-index: 9999;}
    .find_nav_list ul{position: relative;white-space: nowrap;font-size: 0;}
    .find_nav_list ul li{width:80px;display: inline-block;}
    .find_nav_list ul li a{display: block;width: 100%;height: 100%;line-height: 45px;font-size: 14px;text-align: center;color: #666;}
    .find_nav_cur a{color: #F62449 !important;display:inline-block;position:relative;z-index:2;}
    .sideline{display: block;position: absolute;border: 0; border-bottom: 2px solid #F62449; height:44px; left: 0;top:0px;pointer-events: none;}

    .FightSingle_list{width: 100%; padding-top: 2%; background: #f4f4f4; overflow: hidden;}
    .FightSingle_pic{width:96%; height: auto; margin:0 auto;}
    .FightSingle_pic a{line-height: 0px; display: block;}
    .FightSingle_pic img{width: 100%; height: auto;}
    .FightSingle_list_title{width:96%; margin:0 auto; background: #fff;}
    .FightSingle_list_title h4{ height: 35px; font-weight: 400; line-height: 40px; padding: 0 2%;display: -webkit-box; -webkit-box-orient: vertical;-webkit-line-clamp:1;overflow: hidden;}
    .FightSingle_price{width: 96%; margin:0 auto; background: #fff; overflow: hidden;}
    .FightSingle_price_info{ width: 100%; margin-left: 2%; line-height:40px; float: left;height: 40px;}
    .FightSingle_btn{ width: 33%; margin-right:5%; line-height: 50px; text-align: right; float: right;}
    .FightSingle_btn a{width: 60px;box-shadow: 0px 0px 4px #ccc;  border-radius: 40px; padding: 8px 8px; color: #fff; font-size: 12px; background: -webkit-linear-gradient(left, #FF5353 , #FF2B95); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, #FF5353 , #FF2B95); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, #FF5353 , #FF2B95); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, #FF5353 , #FF2B95); /* 标准的语法（必须放在最后）*/}
    .FightSingle_price_nub{font-size: 16px; color: #F62449;}
    .FightSingle_buy{ float:right;margin-right:5px;font-size: 10px; color: #333;}
    .FightSingle_nub{color:#F62449; font-size: 10px; }
    .go_tuan{
        width: 60%;
        height: 28px;
        line-height: 28px;
        border-radius: 20px;
        color: #fff;
        font-size: 12px;
        font-weight: bold;
        background: -webkit-linear-gradient(left, #FF5353 , #FF2B95);
        background: -o-linear-gradient(right, #FF5353 , #FF2B95);
        background: -moz-linear-gradient(right, #FF5353 , #FF2B95);
        background: linear-gradient(to right, #FF5353 , #FF2B95);
        display: block;
        text-align: center;
        margin-left: 20%;
        margin-bottom: 3px;
    }
    /*.FightSingle_forward_White{ width:12px; height: 12px; background: url(../images/forward_White.png)no-repeat; background-size: 12px;  position: relative; display: block;}*/
    /*品牌会场*/
    .BrandArea{ }
    .BrandArea_list{padding-bottom: 15px; overflow: scroll;}
    .BrandArea_list li{width: 70px; height: 70px; margin:15px 0px 0px 15px; float:left;}
    .BrandArea_list li a{ line-height: 0px; display: block;}
    .BrandArea_list li a img{width: 100%; border-radius: 4px;box-shadow: 0px 0px 4px #e5e5e5;}
    .brand_content{width: 100%;background: #f4f4f4; padding-top:1px;}
    .brand_Shop{width: 100%; margin:0 auto;  margin-top: 1%;  background:#fff;}
    .brand_Shop_title{width: 100%; height: 55px; padding-top: 10px;}
    .brand_logo{width: 70%; margin-left:2%; float: left;}
    .brand_logo img{width: 50px; height:50px;border:1px solid #e5e5e5; border-radius: 4px; float: left;}
    .brand_logo h3{ width: 65%; margin-left: 2%; color:#333; font-weight: 400;float: left;white-space: nowrap;word-wrap: break-word;overflow: hidden;text-overflow: ellipsis;word-break: keep-all;}
    .brand_logo span{ width: 65%; margin-left: 2%; color:#333; font-weight: 400;float: left;}
    .brand_logo span a{padding: 2px 5px; font-size: 10px; border-radius: 4px; color: #fff; background: -webkit-linear-gradient(left, #FF5353 , #FF2B95); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, #FF5353 , #FF2B95); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, #FF5353 , #FF2B95); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, #FF5353 , #FF2B95); /* 标准的语法（必须放在最后）*/}
    .brand_enter{width: 25%; line-height: 45px; text-align: right; float: right; margin-right: 2%;}
    .brand_enter a{ padding: 6px 12px; border-radius: 50px; border:1px solid #F62449; font-size: 12px; color: #F62449;}
    .brand_coupon{width: 100%; height: 30px; margin: 15px 0px; line-height: 30px;}
    .brand_coupon_list{ width: 80%; float: left;}
    .brand_coupon_list li{width: 80px; margin-left: 2%; float: left;}
    .brand_coupon_list li a{ height: 22px; text-align:center; font-size: 10px; color:#F62449; border:1px solid #F62449; line-height: 22px; display: block;}
    .brand_coupon_more{width: 20%; float: right;}
    .brand_coupon_more a{color:#999;}
    .brand_banner{width: 96%; margin:0 auto; padding-bottom: 2%;}
    .brand_banner a{display: block; line-height: 0px;}
    /*.brand_banner a img{width: 360px;height: 123px;}*/
    .brand_banner a img{width: 100%;}

    .hotsupplier{width:100%;height:50px;border-left:5px solid #696969;margin-left: 2%;margin-top:5px;}
    .hotsupplier .logo{height:100%;width:100px;}
    .hotsupplier .logo span{width: 100%;display: inline-block;text-align: center;font-size:15px;font-weight:800;line-height:50%;}
    .supplierlist{width: 100%;height: auto;float: left;margin-bottom: 60px;}
    .suppliercontent{height: 100%;width: 96%;margin: 0 auto;padding: 20px 0 0 0}
    .supplierinfo{height:auto;width:100%;background-position: center;background-repeat: no-repeat;background-size: 100% 100%; border-radius: 30px 30px 0 0;text-align: center;border: 1px solid #d2d1d1;}
    .supplierlogo{height: 80px;width: 100%;text-align: center}
    .supplierlogo img{height: 80px;width: 80px;padding: 15px;border:0;}
    .suppliername{font-size: 19px;color: #fff;font-weight: bold;font-family:"Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu}
    .supplierdesc{text-indent: 2em;color: #fff;font-size: 13px;text-overflow: ellipsis;height: 78px;width: 100%;word-wrap: break-word;word-break: break-all;overflow: scroll;}
    .bannergoodslist{height: 160px;width: 100%;border: 1px solid #d2d1d1;border-top: 0;}
    .isempty{height: 0px!important;border:0!important;}
    .bannergoods{width: 33%;float: left;padding: 5px 0;text-align:center}
    .bannergoods img{width: 100%;}
    .bannergoods .price{font-size: 19px;color: #000;font-family: Comic Sans MS;display: inline-block;margin-top: -8px;float:  left;}
    .bannergoods .tag{height: 18px;width: 35px;display: inline-block;text-align: center;background: #6a6b6b;border-radius: 3px;color: #fff;font-size: 10px;line-height: 18px;}
    .noNext{text-align: center;color: #c3c3c3;font-size: 12px;}
</style>
