<template>
    <div class="FightSingle_box">
        <div class="find_nav">
            <div class="find_nav_left tab1" id="tab1">
                <div class="find_nav_list DiscountSnacks_nav" style="background-color: #fff;width: 100%;">
                    <ul>
                        <li><a href="#/storelist">全部品牌</a></li>
                        <li class="sideline"></li>
                    </ul>
                </div>
                <div class="FightSingle_contents">
                    <div class="brand_content" v-if="storeList"> <!--菜单一内容-->
                        <div class="brand_Shop"  v-for="store in storeList" :key="store.suppliers_id">
                            <div class="brand_Shop_title">
                                <div class="brand_logo">
                                    <img :src="store.suppliers_logo">  <!-- 2018.05.10  张小只-->
                                    <h3>{{store.suppliers_name}}</h3>
                                    <span><a>品牌店</a></span>
                                </div>
                                <div class="brand_enter"><a :href="'#/store/'+store.suppliers_id">进店看看 ></a></div>
                            </div>
                            <div class="brand_banner">
                                <a :href="store.suppliers_banner_url" v-if="store.suppliers_banner"><img :src="store.suppliers_banner"></a>
                                <a v-else><img src="http://m.renxingsong.cn/images/no_pic640x350.jpg" /></a>
                            </div>
                        </div>
                    </div>
                    <div class="brand_content" id="con_one_{math $smarty.foreach.suppliers.index}" v-else> <!--菜单一内容-->该分类下无产品呢</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'StoreList',
  data () {
    return {
      pageName: 'storelist',
      storeList: [{
        suppliers_id: 1,
        suppliers_name: '小只旗舰店',
        suppliers_logo: 'http://m.renxingsong.cn/data/business_file/1528727816220229345.jpg',
        suppliers_banner: 'http://m.renxingsong.cn/images/201806/1528768452491549761.jpg',
        suppliers_banner_url: '#'
      },
      {
        suppliers_id: 2,
        suppliers_name: '小只专卖店',
        suppliers_logo: 'http://m.renxingsong.cn/data/business_file/1528727816220229345.jpg',
        suppliers_banner: 'http://m.renxingsong.cn/images/201806/1528768452491549761.jpg',
        suppliers_banner_url: '#'
      }],
      storeBand: [{
        title: '全部品牌',
        url: '#/storelist/1'
      }]
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
    .brand_banner a img{width: 360px;height: 123px;}

</style>
