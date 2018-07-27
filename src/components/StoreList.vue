<template>
  <div style="position: relative;overflow: hidden;">
    <div class="hotsupplier">
      <div class="logo">
        <span>精选店铺</span>
        <span>HOT BRAND</span>
      </div>
    </div>
    <div class="supplierlist" v-if="storeList">
      <div class="suppliercontent" v-for="store in storeList" :key="store.suppliers_id">
        <div class="supplierinfo" v-bind:style="{ backgroundImage: 'url(' + returnBanner(store.suppliers_banner) + ')' }">
          <router-link :to="{ path: '/store/'+ store.suppliers_id}">
            <section class="supplierlogo">
              <img :src="store.suppliers_logo" />
            </section>
            <h3 class="suppliername">{{store.suppliers_name}}</h3>
            <article class="supplierdesc">{{store.suppliers_desc}}</article>
          </router-link>
        </div>
        <div class="bannergoodslist" :class="{ isempty: !store.goods_list }">
          <div class="bannergoods" v-for="good of store.goods_list" :key="good.goods_id">
            <router-link :to="{ path: '/good/'+ good.goods_id }">
              <img :src="good.goods_thumb" />
              <span class="price">￥{{ good.team_price || good.shop_price }}</span>
              <span class="tag">热销</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="brand_content"  v-else> <!--菜单一内容-->该分类下无产品呢</div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './Footer'
export default {
  name: 'StoreList',
  components: {Footer},
  data () {
    return {
      // 店铺列表
      storeList: [{
        suppliers_id: 1,
        suppliers_name: 'SheLins成人用品品牌专卖店',
        suppliers_logo: 'http://m.renxingsong.cn/data/business_file/1532074542082432653.jpg',
        suppliers_banner: '',
        suppliers_desc: '本店主营女性AV棒，男性后庭，飞机杯，缩阴球等成人用品。品牌有LEVETT, SheLins， FUN-MATES and Sinjoys。\n' +
        '工厂直营销售，质量保证，价格实惠！',
        goods_list: [
          {
            goods_id: 1,
            goods_thumb: 'http://m.renxingsong.cn/images/201807/1532505035267320818.jpg',
            team_price: 19,
            shop_price: 25
          },
          {
            goods_id: 2,
            goods_thumb: 'http://m.renxingsong.cn/images/201807/1532504875743264310.jpg',
            team_price: 19,
            shop_price: 25
          }
        ]
      },
      {
        suppliers_id: 2,
        suppliers_name: '南极人日常用品品牌专卖店',
        suppliers_logo: 'http://m.renxingsong.cn/data/business_file/1528727816220229345.jpg',
        suppliers_banner: '',
        suppliers_desc: '上海南极人医疗器械有限公司。专业研发医用人体护托全系列产品，有软护托、硬护托和矫形护托，这些产品适用于原发性骨关节 病、创伤骨关节病变（含软组织创伤、骨折）和变型骨关节病的治疗、康复及预防。公司拥有精湛的医学专家和技术人才，他们具有高深的骨科学、解剖学、关节生 理学、生物力学和教材学的专门知识和丰富的临床经验。 企业宗旨：坚持质量第一，顾客至上，真诚为合作商提供最优良的产品和服务。 企业理念：爱在关怀，健康于你。',
        goods_list: [
          {
            goods_id: 3,
            goods_thumb: 'http://m.renxingsong.cn/images/201807/1532329491799991208.jpg',
            team_price: 19,
            shop_price: 25
          },
          {
            goods_id: 4,
            goods_thumb: 'http://m.renxingsong.cn/images/201807/1532329901215654923.jpg',
            team_price: 19,
            shop_price: 25
          },
          {
            goods_id: 5,
            goods_thumb: 'http://m.renxingsong.cn/images/201807/1532608335602489679.jpg',
            team_price: 0,
            shop_price:15
          },
          {
            goods_id: 6,
            goods_thumb: 'http://m.renxingsong.cn/images/201807/1532608335602489679.jpg',
            team_price: 0,
            shop_price:15
          }
        ]
      }],
      storeBand: [{
        title: '全部品牌',
        band_id: 0
      }]
    }
  },
  methods: {
    returnBanner (storeBanner) {
      return storeBanner ||  'http://m.renxingsong.cn/themes/haohainew/images/bannerbg.jpg'
    }
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
    .supplierlogo img{height: 60px;width: 60px;padding: 15px;border:0;}
    .suppliername{font-size: 19px;color: #fff;font-weight: bold;font-family:"Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu}
    .supplierdesc{text-indent: 2em;color: #fff;font-size: 13px;text-overflow: ellipsis;height: 78px;width: 100%;word-wrap: break-word;word-break: break-all;overflow: scroll;}
    .bannergoodslist{height: 160px;width: 100%;border: 1px solid #d2d1d1;border-top: 0;}
    .isempty{height: 0px!important;border:0!important;}
    .bannergoods{width: 33%;float: left;padding: 5px 0;text-align:center}
    .bannergoods img{width: 100%;}
    .bannergoods .price{font-size: 19px;color: #000;font-family: Comic Sans MS;display: inline-block;margin-top: -8px;float:  left;}
    .bannergoods .tag{height: 18px;width: 35px;display: inline-block;text-align: center;background: #6a6b6b;border-radius: 3px;color: #fff;font-size: 10px;line-height: 18px;}

</style>
