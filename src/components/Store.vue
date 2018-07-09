<template>
    <div class="container">
        <div class="tpl-shop">
            <div class="tpl-shop-topbar" style="background-color:#f8f8f8">
                <a :href="'javascript:collect_store('+$route.params.id+')'" style="color:#000"><i class="fa fa-heart" style="color:red"></i>收藏店铺</a>
                <a href="javascript:;showCode();" style="color:#000"><i class="fa fa-qrcode" style="color:red"></i>二维码</a>
            </div>
            <div class="tpl-shop-header" style="background-color:#FF6666">
                <div class="tpl-shop-title">
                    <p>{{storeName}}</p>
                </div>
                <div class="tpl-shop-avatar">
                    <img :src="storeLogo">
                </div>
            </div>
            <div class="tpl-shop-content">
                <span>商品<b>{{goods_num}}</b></span>
                <span>销量<b>{{sale_num}}</b></span>
                <a v-on:click="showShare(true)">分享店铺</a>
            </div>
        </div>
        <div class="store_nav">
            <a  :class="{cur:isPin}" v-on:click="getPin"><span>拼团商品</span></a>
            <a  :class="{cur:isOne}" v-on:click="getOne"><span>优惠商品</span></a>
        </div>
        <!--拼团-->
        <div class="good_list" v-show="isPin">
            <div class="tuan_list">
                <div class="tuan_g" v-for="goods in goodsTuanList" :key="goods.goods_id">
                    <div class="tuan_g_img">
                        <a :href="'#/good/'+goods.goods_id"><img v-lazy="goods.goods_thumb"></a>
                    </div>
                    <div class="tuan_g_info">
                        <p class="tuan_g_name">{{goods.goods_name}}</p>
                    </div>
                    <div class="tuan_g_core">
                        <div class="tuan_g_num">{{goods.team_num}}人团</div>
                        <div class="tuan_g_price"><i>¥</i>{{goods.team_price}}</div>
                        <del class="tuan_g_mprice"><i>￥</i>{{goods.shop_price}}</del>
                    </div>
                    <a class="tuan_g_btn" :href="'#/good/'+goods.goods_id">立即开团</a>
                </div>
            </div>
            <div class="nothing" v-if="goodsTuanList.length<1">
                <i class="iconfont icon-shangpin"></i>
                <p>此分类下暂无商品</p>
            </div>
        </div>
        <!--单独购-->
        <div class="good_list" v-show="isOne">
            <ul class="list_B">
                <li v-for="goods in goodsList" :key="goods.good_id">
                    <a :href="'#/good/'+goods.goods_id"><img  v-lazy="goods.goods_thumb"></a>
                    <p class="tit"><a :href="'#/good/'+goods.goods_id">{{goods.goods_name}}</a></p>
                    <!--p class="brief">{$goods.goods_brief}</p-->
                    <p>
                        <font class="price">¥<b>{{goods.shop_price}}</b></font>
                        <a class="tocartbtn"  v-if="goods.goods_number>0">加入购物车</a>
                        <a class="mai hui" href="javascript:;" v-else>缺货</a>
                    </p>
                </li>
                <div class="nothing" v-if="goodsList.length<1">
                    <i class="iconfont icon-shangpin"></i>
                    <p>此分类下暂无商品</p>
                </div>
            </ul>
        </div>
        <div class="share_img" v-if="shareShow" v-on:click="showShare(false)">
            <p><img class="arrow" src="../assets/share.png" ></p>
            <p style="margin-top:20px; margin-right:50px;">点击右上角，</p>
            <p style="margin-right:50px;">将此店铺分享给好友</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Store',
  data () {
    return {
      goodsList: [],
      goodsTuanList: [{
        goods_id: 2,
        goods_thumb: 'http://m.renxingsong.cn/business/uploads/2/20180519083540ocsmfozq.jpg',
        goods_name: '日本安心睡眠内衣女',
        goods_number: 3,
        shop_price: 59,
        team_price: 39,
        team_num: 2
      }],
      isPin: true,
      isOne: false,
      storeName: '小只专卖店',
      storeLogo: 'http://m.renxingsong.cn/data/business_file/1528727816220229345.jpg',
      goods_num: 5,
      sale_num: 50,
      shareShow: false
    }
  },
  methods: {
    getPin: function (e) {
      if (this.isPin) {
        return false
      } else {
        this.isPin = true
        this.goodsTuanList.push({
          goods_id: 3,
          goods_thumb: 'http://m.renxingsong.cn/business/uploads/2/20180519083540ocsmfozq.jpg',
          goods_name: '日本安心睡眠内衣女',
          goods_number: 3,
          shop_price: 59,
          team_price: 39,
          team_num: 2
        })
        this.isOne = false
      }
    },
    getOne: function (e) {
      if (this.isOne) {
        return false
      } else {
        this.isOne = true
        this.goodsList.push({
          goods_id: 4,
          goods_thumb: 'http://m.renxingsong.cn/images/201805/1527471155117433080.jpg',
          goods_name: '超帅超帅的小哥哥一只',
          goods_number: 3,
          shop_price: 998
        })
        this.isPin = false
      }
    },
    showShare: function (flag) {
      this.shareShow = flag
    }
  }
}
</script>

<style scoped>
    .list_B{  }
    .list_B li{float:left;width:48%;margin-bottom:1px; background: #fff; padding-bottom: 3px; position:relative;margin:1% 1%;}
    .list_B li:nth-child(2n){margin-left:0.5%;}
    .list_B li img{width:100%;display:block;}
    .list_B li p { width: 96%; padding: 0 2%; }
    .list_B li del { float: right;line-height: 30px; }
    .top_search{padding:10px 5px 5px 5px;position:relative;}
    .top_search .text{width:96%;padding:0 2%;height:40px;line-height:40px;background:#fff;border-radius:8px;font-size:14px;border:none;}
    .top_search .submit{width:40px;height:40px;position:absolute;right:10px;top:18px;background:url(../assets/top_s.png) no-repeat;background-size:60%;border:none;text-indent:-9999em;}
    .good_list h3 {width:100%;height:40px;line-height:40px;border-bottom:#eee 1px solid;margin-bottom:1px;}
    .good_list .tit{font-size:14px;height:40px;line-height:20px;overflow:hidden;}
    .good_list .tit i { padding:2px 4px;background: #FF6666; color:#fff; border-radius:12px; font-size:12px; }
    .good_list .brief{height:40px;line-height:20px;overflow:hidden;}
    .good_list .price{color:#FF6666;font-size:14px;}
    .good_list .price b{font-size:20px;}
    .good_list .buy1{
        width:60%;
        height:22px;
        line-height: 22px;
        color:#fff;
        background-color: #FF6666;
        display:block;
        border-radius:20px;
        text-align: center;
        margin:10px auto 0;
    }
    .good_list .hui{
        background-color: #ccc;
        color:#fff;
    }.good_list .mai { float: right; background: #FF6666; padding:0 15px; color: #fff; height: 24px; line-height: 24px; border-radius: 12px; font-size: 14px; }
    .hui_button{ background-color: #ccc;color: #fff; float: right;padding: 0 15px;height: 24px;line-height: 24px; border-radius: 12px;font-size: 14px;}
    .blank{height:1px;line-height:10px;clear:both;visibility:hidden;}
    .container{position:relative;width:100%;max-width:640px;min-width:320px;min-height:100%;margin:0 auto;padding:0 0 60px 0;}
    .goods_time{
        text-align:center;
        line-height: 20px;
        font-size: 10px;
        max-height: 20px;
    }
    .DetailsGeneral_timeout{
        float: right;
        margin-right: 5%;
    }
    .DetailsGeneral_timeout .goods_time{
        font-size: 15px;
    }
    .product_list li .goods_time{
        font-size: 13px;
    }
    .fx_level{background:#fff;overflow:hidden;margin:50px 0 60px 0;}
    .fx_level ul{}
    .fx_level li{float:left;width:20%; padding:10px 0; border-bottom: #f2f2f2 1px solid;}
    .fx_level li a { display:block; border-right:#f2f2f2 1px solid; }
    .fx_level li:nth-child(5n) a {  border-right:none; }
    .fx_level li img{ display:block; width:60%;border-radius:50%; margin:0 auto;}
    .fx_level li p{ height:24px;line-height:24px;overflow:hidden;text-align:center;}
    .fx_money{background:#fff;overflow:hidden;padding:10px;}
    .fx_money h3{border-bottom:#ddd 1px solid;padding:10px 0 10px 34px;font-size:14px;position:relative;}
    .fx_money h3 i{display:inline-block;width:24px;height:24px;line-height:24px;border-radius:12px;text-align:center;font-size:16px;color:#fff;left:0;position:absolute;top:10px; background:#FA8562;}
    .fx_money h3 a{float:right; background:#FA8562; color:#fff; padding:0 10px; border-radius:3px;}
    .tpl-shop-topbar { height:30px; line-height:30px; background:#933; text-align:right; }
    .tpl-shop-topbar a { color:#fff; padding-right:10px; font-size:14px; }
    .tpl-shop-topbar i{padding:0 2px; margin-right:5px; font-size:16px; color:#fff;}
    .tpl-shop-header{position: relative; height:60px; background-repeat: no-repeat; background-position-x: center; background-size: cover; background:#FF6666;}
    .tpl-shop-title{position: absolute; bottom: 10px; left: 100px; font-size:20px; color: #fff; font-weight:700; text-shadow: 0 1px 2px rgba(0,0,0,0.5);}
    .tpl-shop-title p{ /* 2018.05.13 张小只 */
        white-space: nowrap;
        word-wrap: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: keep-all;
        width: 260px;
    }
    .tpl-shop-avatar{position: absolute; left: 10px; bottom: -34px; width: 80px; height: 80px;}
    .tpl-shop-avatar img{width: 80px; height: 80px; border-radius:10px; border:#fff 2px solid; -webkit-box-shadow: 0 0 1px 1px rgba(0,0,0,0.2); box-shadow: 0 0 1px 1px rgba(0,0,0,0.2);}

    .tpl-shop-content{padding:10px 0 10px 100px; border: 1px solid #E4E4E4; background: #fff; overflow:hidden;}
    .tpl-shop-content span{font-size: 14px; text-align: center; color: #666;}
    .tpl-shop-content span b { color:#FF6666; padding:0 8px 0 2px; }
    .tpl-shop-content a{ display:block; float:right; margin-right:10px; border:#FF6666 1px dashed; padding:2px 6px; color:#FF6666; font-size:12px; border-radius:12px; text-align:center;}

    .myshop_header{position: relative; height:120px; background:#FF6666;}
    .myshop_header .avatar{position: absolute; left:10px; top:20px; width: 80px; height: 80px;}
    .myshop_header .avatar img{width: 80px; height: 80px; border-radius:40px; border:#fff 2px solid; -webkit-box-shadow: 0 0 1px 1px rgba(0,0,0,0.2); box-shadow: 0 0 1px 1px rgba(0,0,0,0.2);}
    .myshop_header .content{margin:0 10px 0 120px; height:70px; padding:30px 10px 20px 0; overflow:hidden; position:relative;}
    .myshop_header .content h3{height:40px; line-height:40px; border-bottom:#fff 1px solid; color:#fff; font-size:18px;}
    .myshop_header .content .share{position: absolute; height:24px; line-height:24px; top:10px; right:0; padding:0 10px; background:#fff; color:#FF6666; border-radius:5px; font-size:14px;}
    .myshop_header .content li{float:left; width:33%; height:30px; line-height:30px; color:#fff; font-size:14px;}
    .myshop_header .content li font{padding-left:5px; font-size:16px; font-weight:700;}
    .myshop_header .content li a{color:#fff;}
    .myshop_header .content li i{padding:0 2px; margin-left:5px; border-radius:3px; font-size:16px; background:#fff; color:#000;}
    .share_img{position:fixed;top:0;right:0;z-index:99999;display:block;background:#000;opacity:0.8;filter:alpha(opacity=80);width:100%;height:100%;text-align:right;}
    .share_img p{color:#fff;line-height:30px;font-size:16px;}

    .store_nav{background-color:#fff;height:40px;width:100%;font-size:15px;text-align:center;max-width:640px; border-bottom: 1px solid #e4e4e4;}
    .store_nav a{height:40px;line-height:40px;width:50%;float:left;display:block;}
    .store_nav a.cur span { line-height: 36px; display: inline-block; border-bottom:2px solid #FF6666;color:#FF6666; width: 100%; }

    .qr_code{position:fixed; left:0; top:0; width:100%;height:100%; z-index:99;}
    .qrcode_bg { position:fixed; left:0; top:0; background:#000;opacity:0.8;filter:alpha(opacity=80);width:100%;height:100%; z-index:100; }
    .qrcode { width:300px; height:364px; position:fixed; top:50%; left:50%; margin-left:-150px; margin-top:-175px; background:url(../assets/qrcode.png) no-repeat; background-size: cover;z-index:99999; }
    .qrcode h3 { text-align:center; padding-left:10px; margin:60px auto 10px auto;  color: #582909; font-size: 14px; }
    .qrcode img { display: block;width: 250px;height: 250px;margin: 0 auto;padding: 0 0 10px 10px;margin-top: 70px; } /*2018.05.10 张小只*/
    .qrcode p { padding:0 30px 0 40px; }
    .pagebar{padding:10px;text-align:center;}
    .pagebar a,.pagebar span{padding:5px 20px;background:#fff;border-radius:3px;margin-right:20px;}
    .pagebar a {background:#FF6666;color:#fff; }
    .pagebar span.page_now{background:#FF6666;color:#fff;}
    .guanzhu{position:fixed;width:100%;height:40px;line-height:40px;top:0;background:#000;opacity:0.6;filter:alpha(opacity=60);color:#fff;text-align:center;font-size:14px;box-shadow:0 0 2px #000;}
    .guanzhu a{padding:4px 10px;background:#FF6666;color:#fff;border-radius:5px;}
    .guanzhu span{float:right;padding-right:10px;line-height:30px;}
    .guanzhu span i{font-size:16px;}
    .nav_fixed{position:fixed;background-color:#fff;height:40px;width:100%;font-size:15px;text-align:center;z-index:9999;top:0;max-width:640px; border-bottom: 1px solid #e4e4e4;}
    .nav_fixed a{height:40px;line-height:40px;width:33.3333%;float:left;display:block;}
    .nav_fixed a:last-child{border-right:none;}
    .nav_fixed a.cur span { line-height: 36px; display: inline-block; border-bottom:2px solid #FF6666;color:#FF6666; }
    .nav_spike a { width:25%; }
    .nav_order a { width:20%; }
    .rank_nav a{width:50%;}
    .consignee{}
    .consignee h3{line-height:20px;font-size:14px;margin-bottom:10px; padding:10px 0;}
    .consignee h3 i{display:block;float:left;width:4px;height:20px;border-radius:2px;background:#FF6666;margin-right:5px;}
    .consignee dl{line-height:40px; border-bottom:#eee 1px solid; position:relative;background:#fff; }
    .consignee dt{width:60px; position:absolute; left:0; top:0; line-height:40px; font-size:14px; text-align:right;}
    .consignee dd{padding-left:70px; position:relative;}
    .consignee dd.diqu { padding-left:0; overflow:hidden; }
    .consignee .diqu select { float:left; width:33.3333%; border:none; color:#666; height:40px; line-height:40px; appearance:none;-moz-appearance:none;-webkit-appearance:none; }
    .consignee dd input{width:96%; height:30px; line-height:30px; padding:0 2%; border:none; color:#666;}
    .consignee dd select{width:100%;}
    .consignee .submit{float:left; width:100%; height:30px; line-height:30px; text-align:center; background:#FF6666; color:#fff; border-radius:5px; border:none; font-size:14px;}
    .consignee .t1,.consignee .t2{width:46%; margin:0 2%;}
    .consignee .t2{background:#999;}
    .consignee .operate_tips{height:24px; line-height:24px; padding:0 8px;border:1px solid #dad699;background:#f9f5c7;position:absolute;bottom:0px;    right: 0;border-radius:2px;color:#FF6666;z-index: 99;}
    .consignee .operate_tips .down_row{position:absolute;bottom:-6px;_bottom:-7px;left:20px;width:12px;height:6px;background:url(../assets/down_row.png) no-repeat;font-size:1px;}
    .consignee .operate_tips .operate_content{width:100%;text-align:left;}
    .account_top{width:100%; height:40px; line-height:40px; background:#FF6666; position:fixed; top:0;max-width: 640px;}
    .account_top p{font-size:16px; color:#fff; padding:0 20px;}
    .account_top p a {color:#fff; }
    .account_top p span { float:right; }
    .account_box{ padding:90px 0 10px 0;}
    .account_deposit{font-size:14px;}
    .account_deposit h3{line-height:30px; color:#FF6666; font-size:14px; font-weight:400; text-align:center;}
    .account_deposit ul { padding:10px; }
    .account_deposit li{width:100%; margin:0 auto; margin-bottom:10px;}
    /*.account_deposit li label{float:left; width:60px;}*/
    .account_deposit li .inp{width:100%; border:#ddd 1px solid; height:36px; padding:0 1%; margin:0 auto; border-radius:5px;}
    .account_deposit li .tex{width:100%; border:#ddd 1px solid; padding:0 1%; height:80px; padding-top:6px; border-radius:5px;}
    .account_deposit li .bnt{width:100%; background:#FF6666; color:#fff; border:none; height:40px; border-radius:5px; font-size:16px;}
    .account_deposit .pay-box { float:left; width:50%; }
    .nothing { width:100%; height:120px; color:#FF6666; text-align: center; position:absolute; left:0; top:90%; }
    .nothing i { font-size:70px;  }
    .nothing p { height: 20px; line-height: 20px; font-size: 14px;  }
    .tuan_g {
        width: 48%;
        background-color: #FFF;
        float: left;
        margin: 1%;
    }

    .tuan_g_img {
        display: block;
        position: relative;
    }

    .tuan_g_img img {
        overflow: hidden;
        width: 100%;
        min-height: 180px;
        height:120px;
    }

   /* .sell_f {
        display: block;
        position: absolute;
        right: 30px;
        bottom:45px;
        width: 60px;
        height: 60px;
        background-image: url(../images/sell_f.png);
        background-size: 100%;
    }

    .sell_o {
        display: block;
        position: absolute;
        right: 30px;
        bottom:40px;
        width: 60px;
        height: 60px;
        background-image: url(../images/sell_o.png);
        background-size: 100%;
    }*/

    .tuan_g_info {
        padding-top: 10px;
    }

    .tuan_g_name {
        margin:0 5px 5px 5px;
        font-size: 14px;
        font-weight: 500;
        color: #191919;
        line-height: 1.4;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient:vertical;
        overflow:hidden;
        word-wrap:break-word;
        word-break:break-all;
    }

    .tuan_g_cx {
        color: #707070;
        padding:5px;
    }

    .tuan_g_core {
        display: block;
        margin-top: 10px;
        position: relative;
        height:40px;
        color:#ff6666;
        background-color: #f9f9f9;
    }
    .tuan_g_core .line { width: 1px; float:left;height:30px;margin-top:5px;margin-left: 2%; border-left: #eee 1px solid; overflow: hidden;}
    .tuan_g_core:before {
        content: "";
        float:left;
        margin-left:5px;
        margin-top: 5px;
        width:30px;
        height:30px;
        background-image: url(../assets/people.png);
        background-size: 100%;
    }

    .tuan_g_num{
        float:left;padding-left:2%;line-height:40px;font-size: 16px;
    }

    .tuan_g_mprice {
        display: inline-block;
        color: #999;
        line-height: 45px;
        font-size: 12px;
        padding-left: 5px;
    }

    .tuan_g_price {
        float:left;
        height:100%;
        padding-left: 8%;
        line-height: 40px;
        color:#ff4422;
        font-size: 18px;
    }

    .tuan_g_price i {
        font-size: 14px;
    }

    .tuan_g_btn {
        width: 50%;
        height: 28px;
        line-height: 28px;
        border-radius: 100px;
        color: #fff;
        font-size: 12px;
        font-weight: bold;
        background: -webkit-linear-gradient(left, #FF5353 , #FF2B95);
        background: -o-linear-gradient(right, #FF5353 , #FF2B95);
        background: -moz-linear-gradient(right, #FF5353 , #FF2B95);
        background: linear-gradient(to right, #FF5353 , #FF2B95);
        display: block;
        text-align: center;
        margin-left: 25%;
        margin-bottom: 3px;
    }
    .tocartbtn{
        width: 40%;
        height: 28px;
        float: right;
        line-height: 28px;
        border-radius: 100px;
        color: #fff;
        font-size: 12px;
        font-weight: bold;
        background: -webkit-linear-gradient(left, #FF5353 , #FF2B95);
        background: -o-linear-gradient(right, #FF5353 , #FF2B95);
        background: -moz-linear-gradient(right, #FF5353 , #FF2B95);
        background: linear-gradient(to right, #FF5353 , #FF2B95);
        display: inline-block;
        text-align: center;
        margin-bottom: 3px;
    }
</style>
