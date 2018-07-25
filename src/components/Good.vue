<template>
    <div>
        <!--返回上一页开始-->
        <div class="backtrack"><a v-on:click="$router.go(-1)" ></a></div>
        <!--返回上一页结束-->
        <!--购物车图标开始-->
        <div class="myshopcar_icon"><a href="#/user/cart" ></a></div>
        <!--购物车图标结束-->
        <!--轮播海报开始-->
        <swiper :options="swiperOption" class="mycurl">
            <swiper-slide v-for="(curlimg,index) in good.curlimgList" :key="index">
                <img :src="curlimg" alt="" style="width: 100%">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <!--轮播海报结束-->
        <div class="DetailsGeneral_title">
            <div class="DetailsGeneral_p">
                <div class="DetailsGeneral_price"><span>￥{{good.shop_price}}</span><em>￥{{good.market_price}}</em></div>
                <div class="DetailsGeneral_timeout">
                    <span>剩余时间：</span>
                    <font class="goods_time" id="leftTime1">{{good.time}}</font>
                </div>
            </div>
            <div class="DetailsGeneral_info">
                <div class="DetailsGeneral_express"><em>快递：</em><span>{{good.shipping_fee}}</span></div>
                <div class="DetailsGeneral_Sales"><em>已售：</em><span>{{good.buy_num}}</span></div>
                <div class="DetailsGeneral_express">
                    <em>规格:</em><span>{{good.guige}}</span>
                </div>
            </div>
            <div class="DetailsGeneral_name"><h4>{{good.name}}</h4></div>
        </div>
        <div class="Details_coupon_info">
            <div class="Details_shop_info">
                <div class="Details_shop_logo"><img :src="supplier.logo"></div>
                <div class="Details_shop_expr">
                    <div class="Details_shop_name"><h3>{{supplier.name}}</h3></div>
                    <div class="Details_shop_nub"><em>商品数量：</em><span>{{supplier.goods_num}} </span><em>已售：</em><span>{{supplier.sales_num}}</span></div>
                </div>
                <div class="Details_shop_btn"><a :href="'#/store/'+supplier.id">进店看看 ></a></div>
            </div>
            <div class="DetailsGeneral_title" v-if="supplier.desc">
                <span style="font-size:14px;font-weight:800;">品牌简介:</span> {{supplier.desc}}
            </div>
            <div class="Details_promise">
                <ul>
                    <li><span>{{good.lab_qgby}}</span></li>
                    <li><span>{{good.lab_zpbz}}</span></li>
                    <li><span>{{good.lab_qtth}}</span></li>
                    <li><span>{{good.lab_jkbs}}</span></li>
                    <li><span>{{good.lab_hwzy}}</span></li>
                </ul>
            </div>
        </div>
        <div class="Details_specification">
            <div class="Details_parameter"><a v-on:click="showAttr"><span>产品参数</span><em></em></a></div>
        </div>
        <div class="Details_Evaluation">

            <div class="Details_description">
                <div class="details_title"><i class="details_title_icon"></i><h1>商品详情</h1></div>
                <div class="Details_pic" v-html="good.desc"></div>
            </div>
            <div class="details_title"><i class="details_title_icon"></i><h1>商品评价</h1><span>({{good.comments_num}})</span></div>
            <div class="Details_Evaluation_info">
                <div class="Details_Evaluation_expr" v-for="(comment,index) in good.comments" :key="index">
                    <div class="Details_Evaluation_user">
                        <img :src="comment.headurl"><span>{{comment.username}}</span>
                        <div style="float:right">
                            <ul class="star_ul">
                                <li v-for="n in comment.rank" :key="n"><img src="../assets/star_full.png" /></li>
                            </ul>
                        </div>
                    </div>
                    <div class="Details_Evaluation_content">
                        <p>{{comment.content}}</p>
                    </div>
                    <div class="Details_Evaluation_buy">{{comment.goods_attr}}<em>{{comment.add_time}}</em></div>
                </div>
                <p style="text-align:center;color:#ff2424" v-if="good.comments.length<1">暂无评论</p>
                <div class="Details_Evaluation_more" v-if="good.comments.length>4"> <a :href="'#good/' + $route.params.id + '/comments'">查看全部评价</a>  </div>
            </div>
        </div>
        <div>
            <div class="details_title"><i class="details_title_icon"></i><h1>精选推荐</h1></div>
            <div class="recommend_list">
                <ul>
                    <li v-for="commend in commends" :key="commend.id">
                        <a :href="'#/good/'+commend.goods_id">
                            <img :src="commend.goods_thumb">
                            <h4>{{commend.goods_name}}</h4>
                            <div class="list_content_price"><strong>￥{{commend.team_price || commend.shop_price}}</strong><!-- <span class="list_content_nub">件</span><em>已售</em>-->
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="Details_footer w_640">
            <div class="Details_footer_icon"><router-link to="/"><i class="Details_footer_home"></i><span>首页</span></router-link></div>
            <div class="Details_footer_icon"><a href="javascript:" > <!-- 2018.05.10  张小只-->
                <i :class="{Details_footer_collection_ok:good.isIn, Details_footer_collection:!good.isIn}"></i>
                <span>收藏</span>
            </a>
            </div>
            <div class="Details_footer_icon"><a :href='supplier.qq'><i class="Details_footer_service"></i><span>客服</span></a></div>
            <div class="Details_footer_cart"><input type="button" value="加入购物车" v-on:click="showAttr"></div>
            <div class="Details_footer_buy"><input type="button" value="立即购买" v-on:click="showAttr"></div>
        </div>
        <GoodAttr v-on:hiddenAttr="hiddenAttr" v-bind:is-show="this.attrShow"></GoodAttr>
    </div>
</template>

<script>
import GoodAttr from './GoodAttr'
export default {
  name: 'Good',
  components: {GoodAttr},
  data () {
    return {
      attrShow: false,
      // 商品属性
      good: {
        name: '日本安心睡眠内衣女',
        shop_price: 39,
        market_price: 69,
        guige: '里料成分：锦纶/尼龙',
        shipping_fee: '00.00',
        buy_num: 39,
        time: '3小时34分25秒',
        curlimgList: ['http://m.renxingsong.cn/business/uploads/2/20180519085353bpiubrlu.jpg', 'http://m.renxingsong.cn/business/uploads/2/20180519085352kjlmyjgm.jpg'],
        lab_qgby: '新品1折',
        lab_zpbz: '权威荣誉',
        lab_qtth: '客服在线',
        lab_jkbs: '品牌授权',
        lab_hwzy: '品牌清仓',
        desc: '<img src="http://m.renxingsong.cn/business/includes/kindeditor/php/../../../uploads/2/image/20180519/20180519083601_86742.jpg" alt="" /><img src="http://m.renxingsong.cn/business/includes/kindeditor/php/../../../uploads/2/image/20180519/20180519083601_88875.jpg" alt="" /><img src="/business/includes/kindeditor/php/../../../uploads/2/image/20180519/20180519083601_32832.jpg" alt="" /><img src="http://m.renxingsong.cn/business/includes/kindeditor/php/../../../uploads/2/image/20180519/20180519083601_56480.jpg" alt="" /><img src="http://m.renxingsong.cn/business/includes/kindeditor/php/../../../uploads/2/image/20180519/20180519083601_12507.jpg" alt="" /><img src="http://m.renxingsong.cn/business/includes/kindeditor/php/../../../uploads/2/image/20180519/20180519083601_76923.jpg" alt="" /><img src="http://m.renxingsong.cn/business/includes/kindeditor/php/../../../uploads/2/image/20180519/20180519083601_29946.jpg" alt="" /><img src="http://m.renxingsong.cn/business/includes/kindeditor/php/../../../uploads/2/image/20180519/20180519083601_98234.jpg" alt="" /><img src="http://m.renxingsong.cn/business/includes/kindeditor/php/../../../uploads/2/image/20180519/20180519083601_41790.jpg" alt="" /><img src="http://m.renxingsong.cn/business/includes/kindeditor/php/../../../uploads/2/image/20180519/20180519083601_74377.jpg" alt="" /><img src="http://m.renxingsong.cn/business/includes/kindeditor/php/../../../uploads/2/image/20180519/20180519083602_38870.jpg" alt="" /><img src="http://m.renxingsong.cn/business/includes/kindeditor/php/../../../uploads/2/image/20180519/20180519083602_85057.jpg" alt="" /><img src="/business/includes/kindeditor/php/../../../uploads/2/image/20180519/20180519083602_57346.jpg" alt="" /><img src="http://m.renxingsong.cn/business/includes/kindeditor/php/../../../uploads/2/image/20180519/20180519083602_18055.jpg" alt="" /><img src="http://m.renxingsong.cn/business/includes/kindeditor/php/../../../uploads/2/image/20180519/20180519083602_67450.jpg" alt="" /><img src="http://m.renxingsong.cn/business/includes/kindeditor/php/../../../uploads/2/image/20180519/20180519083602_25384.jpg" alt="" /><img src="http://m.renxingsong.cn/business/includes/kindeditor/php/../../../uploads/2/image/20180519/20180519083602_61390.jpg" alt="" /><img src="http://m.renxingsong.cn/business/includes/kindeditor/php/../../../uploads/2/image/20180519/20180519083602_64748.jpg" alt="" />',
        comments_num: 60,
        isIn: false,
        comments: [{
          username: '丶Tik',
          headurl: 'http://thirdwx.qlogo.cn/mmopen/vi_32/MzQVZhFALRNtuVarhnIHgNl3hYBKwZiaJ02PMHdZtSwIezsUQzwCF8GQfweLksjPaTp2rXM8wk3l7XicmHDU5tEw/0',
          rank: 5,
          content: 'very good!',
          goods_attr: 'S/36B',
          add_time: '2018-07-04 15:45:36'
        }]
      },
      // 底部推荐商品列表
      commends: [{
        goods_id: 1,
        goods_name: '日本安心睡眠内衣女',
        goods_thumb: 'http://m.renxingsong.cn/business/uploads/2/20180519085353bpiubrlu.jpg',
        team_price: 19,
        shop_price: 29
      }],

      // 店铺属性
      supplier: {
        id: 3,
        logo: 'http://m.renxingsong.cn/data/business_file/1526716881359560551.jpg',
        name: '兔耳兔品牌代理商',
        goods_num: 10,
        sales_num: 666,
        desc: '兔耳兔以时尚、休闲、个性为元素的中高档女装,强调系列感及可搭配性,注重服饰细节与品质感。 色彩表现: 色彩清新、雅致六、表现气质:时尚大气、简洁、优雅。',
        qq: 'http://p.qiao.baidu.com/cps/chat?siteId=11116021&userId=24414341'
      },

      // 轮播配置
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 1500,
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
  },
  methods: {
    showAttr: function () {
      this.attrShow = true
    },
    hiddenAttr: function () {
      this.attrShow = false
    }
  },
  // 组件加载完成隐藏父组件的footer
  created () {
    // this.$store.state.footerShow = false
  }
}
</script>

<style scoped>
    /*购物车图标*/
    .myshopcar_icon{position: fixed; top:2%; right:3%; z-index: 999999999;}
    .myshopcar_icon a{ width: 32px; height: 32px; background: url(../assets/myshopcar_icon.png) no-repeat; background-size: 32px; display: block;}

    /*返回上一页*/
    .backtrack{position: fixed; top:2%; left: 3%; z-index: 999999999;}
    .backtrack a{ width: 32px; height: 32px; background: url(../assets/backtrack.png) no-repeat; background-size: 32px; display: block;}
    .mycurl{width: 375px;}

    /*品牌详情*/
    .DetailsBrand_banner{width: 100%; overflow: hidden;}
    .DetailsBrand_banner img{width: 100%;}
    .DetailsBrand_coupon{width: 100%; padding: 10px 0px; border-bottom: 8px solid #f4f4f4; overflow: hidden;}
    .DetailsBrand_coupon li{ width:95px; height: 50px; margin-left: 2%; float: left;}
    .DetailsBrand_coupon li a{ height: 35px; padding: 5px; line-height: 12px; color: #fff; display: block; background: -webkit-linear-gradient(left, #FF5353 , #FF2B95); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, #FF5353 , #FF2B95); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, #FF5353 , #FF2B95); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, #FF5353 , #FF2B95); /* 标准的语法（必须放在最后）*/}
    .DetailsBrand_coupon_nub{font-size: 18px; font-weight: 400; float: left;}
    .DetailsBrand_coupon li a em{float: left; font-size: 10px;line-height: 20px; margin-left: 5px;}
    .DetailsBrand_coupon_y{width:100%; text-align: center; font-size: 10px; float: left;}
    .brand_more_list{ padding-bottom: 20px; overflow: hidden;}
    .brand_title{ height: 45px; background: url(../assets/brand_title.png) no-repeat center; background-size: 50%;}
    .brand_more{width: 100%; background: #fff;}
    .brand_more li{width: 30%; height:60px; margin-left: 2.5%;  margin-top: 2.5%; background: #fff;  box-shadow: 0px 0px 4px #ccc;  float: left;}
    .brand_more li a{ line-height: 0px; display: block;}
    .brand_more li a img{height: 60px;}

    /*榜单*/
    .brandlist{width: 100%; overflow: hidden;}
    .listbanner{margin-top: 2%; position: relative;}
    .listbanner img{width: 96%; margin-left:2%; border-radius: 4px;}
    .listbanner a{ width: 100px; height: 30px; margin-left: -50px; color:#fff; box-shadow: 0px 0px 4px #ccc; font-size: 10px;  position: absolute; bottom: 15%; left: 50%;  border-radius: 50px; text-align: center; line-height: 30px; display: block;
        background: -webkit-linear-gradient(left, #FF5353 , #FF2B95); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, #FF5353 , #FF2B95); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, #FF5353 , #FF2B95); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, #FF5353 , #FF2B95); /* 标准的语法（必须放在最后）*/}
    .brandlist_menu{width: 100%; overflow: hidden;}
    .brandlist_menu li{width: 30%; margin-left: 2.5%; margin-top: 2.5%; border-radius: 4px; box-shadow: 0px 0px 6px #e5e5e5; float: left;}
    .brandlist_menu li a{ padding: 10px 0px; position: relative; display: block;}
    .brandlist_menu li a img{width: 70%;}
    .brandlist_menu_i{ width: 32px; background: #FF318B; padding-left: 2px; border-top-right-radius: 50px;border-bottom-right-radius: 50px; color: #fff; font-size:9px; position: absolute; left: 0px; top: 8px;}
    .brandlist_menu_btn{width: 80px; height: 25px; margin:0 auto; margin-bottom: 10px; color:#fff; box-shadow: 0px 0px 4px #ccc; font-size: 10px;border-radius: 100px; text-align: center; line-height: 25px; display: block;
        background: -webkit-linear-gradient(left, #FF5353 , #FF2B95); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, #FF5353 , #FF2B95); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, #FF5353 , #FF2B95); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, #FF5353 , #FF2B95); /* 标准的语法（必须放在最后）*/}
    .list_content{overflow: hidden;}
    .list_content_list{ width: 96%; background:#f4f4f4; margin:0 auto; margin-top: 2%;border:1px solid #F62449;}
    .list_content_list h1{ width: 100%; height: 45px; line-height: 45px; font-size: 12px; color: #fff; font-weight: 300;
        background: -webkit-linear-gradient(left, #FF5353 , #FF2B95); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, #FF5353 , #FF2B95); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, #FF5353 , #FF2B95); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, #FF5353 , #FF2B95); /* 标准的语法（必须放在最后）*/}
    .list_content_list span{margin-left: 2%;}
    .list_content_btn{ width: 80px; height: 22px; margin-top: 12px; background: #fff; text-align:center; line-height: 22px; border-radius:22px;  font-size: 10px; color: #F62449; float: right; margin-right: 2%;}
    .list_content_list ul{overflow: hidden;}
    .list_content_list li{width:32%; background: #fff; margin: 2% 0 2% 1%; float: left;}
    .list_content_list li a{display: block; line-height: 0px;}
    .list_content_list li a img{ width: 100%; }
    .list_content_list li a h4{font-weight: 400;line-height:18px; padding: 0px 4px; display: -webkit-box; -webkit-box-orient: vertical;-webkit-line-clamp:1;overflow: hidden;}
    .list_content_price{ width: 100%; height: 30px; line-height:30px; overflow: hidden; font-size: 12px;}
    .list_content_price strong{ margin-left: 2%; font-size: 12px;color: #F62449;  float: left;}
    .list_content_price em{font-size: 10px; color:#ccc; float: right;}
    .list_content_nub{ margin-right: 2%; font-size: 10px; color:#ccc;float: right;}

    /*普通产品详情*/
    .DetailsGeneral_title{width: 100%; border-bottom: 2px solid #f4f4f4;  overflow:hidden;}
    .DetailsGeneral_p{width: 100%; height: 50px; line-height: 50px; overflow:hidden;}
    .DetailsGeneral_price{ width: 40%; margin-left: 2%;float: left;}
    .DetailsGeneral_price span{ font-size: 21px; color:#F62449;font-weight: bolder;}
    .DetailsGeneral_price em{ margin-left: 2%; font-size: 10px; color:#ccc; text-decoration:line-through;}
    .DetailsGeneral_share{width:36%; margin-right: 2%; text-align:right; float: right;}
    .DetailsGeneral_share input{width: 60px; height: 25px; font-size: 10px; line-height: 25px; color: #fff; border-radius: 30px; border:0;box-shadow: 0px 0px 4px #ccc;
        background: -webkit-linear-gradient(left, #FF5353 , #FF2B95); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, #FF5353 , #FF2B95); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, #FF5353 , #FF2B95); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, #FF5353 , #FF2B95); /* 标准的语法（必须放在最后）*/}
    .DetailsGeneral_info{width: 100%;text-align: center; font-size: 10px; color:#ccc; line-height:20px;}
    .DetailsGeneral_express{margin-left: 3%; text-align: left; float: left;}
    .DetailsGeneral_Sales{ width: 33.33%; float: left;}
    .DetailsGeneral_addr{ width: 30.33%;margin-right:3%; text-align: right; float: left;}
    .DetailsGeneral_name{width:96%; margin:0 auto; overflow: hidden;}
    .DetailsGeneral_name h4{line-height: 24px; font-weight: 400;height:40px; padding: 10px 0px; font-size: 15px; display: -webkit-box; -webkit-box-orient: vertical;-webkit-line-clamp:2;overflow: hidden;}

    .recommend_list{ width:100%; background:#f4f4f4; margin:0 auto;}
    .recommend_list ul{overflow: hidden;}
    .recommend_list li{width:32%; background: #fff; margin: 1% 0 1% 1%; float: left;}
    .recommend_list li a{display: block; line-height: 0px;}
    .recommend_list li a img{ width: 100%;min-height: 130px; max-height: 130px; }
    .recommend_list li a h4{font-weight: 400;line-height:18px;  height:17px;min-height: 36px;padding: 0px 4px; display: -webkit-box; -webkit-box-orient: vertical;-webkit-line-clamp:2;overflow: hidden;}

    .Details_footer{width: 100%; height: 50px; background:#fff; text-align: center; position: fixed; bottom: 0px; overflow: hidden;}
    .Details_footer_icon{ width: 15%; float: left;}
    .Details_footer_icon a{ width: 100%; height: 50px; display: block;}
    .Details_footer_icon span{width: 100%; font-size: 10px; color: #666; float: left;}
    .Details_footer_home{width:100%; height: 18px; margin-top: 10px; background: url(../assets/Details_footer_home.png)no-repeat center; background-size: 18px;display: block;}
    .Details_footer_collection{width:100%; height: 18px; margin-top: 10px; background: url(../assets/Details_footer_collection.png)no-repeat center; background-size: 18px;display: block;}
    .Details_footer_collection_ok{width:100%; height: 18px; margin-top: 10px; background: url(../assets/star_full.png)no-repeat center; background-size: 18px;display: block;}
    .Details_footer_service{width:100%; height: 18px; margin-top: 10px; background: url(../assets/Details_footer_service.png)no-repeat center; background-size: 18px;display: block;}
    .Details_footer_cart{ width: 25%;line-height: 50px; float: left;}
    .Details_footer_cart input{ width: 100%; height: 50px;  background: #38002F;  border: none; color: #fff; display: block;}
    .Details_footer_buy{ width: 30%; line-height: 50px;  float: left;}
    .Details_footer_buy input{ width: 100%; height: 50px; border:none; color: #fff; display: block;
        background: -webkit-linear-gradient(left, #FF5353 , #FF2B95); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, #FF5353 , #FF2B95); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, #FF5353 , #FF2B95); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, #FF5353 , #FF2B95); /* 标准的语法（必须放在最后）*/}

    .details_title{width: 100%; height: 40px; border-bottom: 1px solid #f4f4f4; overflow: hidden;}
    .details_title h1{font-size: 14px; margin-left:1.5%; line-height: 40px; color: #333; float: left;}
    .details_title span{font-size: 14px;color: #666; line-height: 40px;}
    .details_title_icon{width: 4px; height: 16px; margin-top: 12px; margin-left: 2%; border-radius: 4px; background: #F62449; display: block; float: left;}
    .Details_description{width: 100%; overflow: hidden;}
    .Details_pic {width: 100%;}
    .Details_pic img{width: 100%; vertical-align: middle;}
    .Details_coupon_info{width: 100%;overflow: hidden;}
    .Details_coupon{width: 100%; border-bottom: 1px solid #f4f4f4; overflow: hidden;}
    .Details_coupon_expr{ width: 60%; float: left;}
    .Details_coupon_tmall{ margin-top:8px; margin-left: 5%; color: #999; font-size: 10px; }
    .Details_coupon_tmall i{width: 70px; text-align:center; height: 23px; line-height: 25px; font-size: 10px; border-radius: 20px; border:1px solid #F62449; color: #F62449; float: left; display: block;}
    .Details_coupon_tmall span{margin-left: 10px;}
    .Details_coupon_shop{ margin-top: 10px; margin-left: 5%; color: #999; font-size: 10px; clear: both;}
    .Details_coupon_shop i{width: 70px; text-align:center; height: 23px; line-height: 25px; font-size: 10px; border-radius: 20px; border:1px solid #F62449; color: #F62449; float: left; display: block;}
    .Details_coupon_shop span{margin-left: 10px;}
    .Details_coupon_btn{width: 40%; height: 70px; line-height: 70px; text-align:right; float: right;}
    .Details_coupon_btn input{width: 70px; height: 70px; background: #fff; margin-right: 5%; font-size: 10px; line-height: 25px; border-radius: 20px; font-size: 10px; border:1px solid #F62449; color: #F62449;}
    .Details_promise{width: 100%; height: 50px; line-height: 50px; border-bottom: 2px solid #f4f4f4;}
    .Details_promise li{ width: 70px; font-size: 12px; color: #ff3289; text-align:center; float: left;}
    .Details_specification{width: 100%; font-size: 14px; line-height: 40px;  border-bottom:2px solid #f4f4f4;  overflow: hidden;}
    .Details_parameter{width:96%; margin: 0 auto; border-bottom: 1px solid #f4f4f4;}
    .Details_parameter a{display: block;}
    .Details_parameter a em{ width: 30px; height: 40px; margin-right: 2%; background: url(../assets/morepoit.png) no-repeat center; background-size:65%; float: right; display: block;}
    .Details_Evaluation{width: 100%; overflow: hidden;}
    .Details_Evaluation_info{width: 100%;}
    .Details_Evaluation_expr{width: 100%; margin-top: 15px; border-bottom: 1px solid #f8f8f8; overflow: hidden;}
    .Details_Evaluation_user{width: 96%; height: 30px; margin: 0 auto; line-height:30px;}
    .Details_Evaluation_user img{width: 24px; height: 24px; margin-top: 3px; border-radius: 24px;float: left;}
    .Details_Evaluation_user span{ height: 30px; margin-left: 10px; color: #999; float: left; display: inline-block;}
    .Details_Evaluation_content{width: 96%; margin:0 auto;}
    .Details_Evaluation_content p{padding:5px 0; color: #666; line-height: 18px; font-size: 12px;}
    .Details_Evaluation_buy{width: 96%;margin: 0 auto; font-size: 10px; color: #ccc; line-height: 24px;}
    .Details_Evaluation_buy strong{font-weight: 400;}
    .Details_Evaluation_buy span{margin-left: 5px;}
    .Details_Evaluation_buy em{float: right;}
    .Details_Evaluation_more{width: 100%; height: 40px; margin-top: 15px; border-bottom: 2px solid #f4f4f4;     text-align:center; overflow: hidden;}
    .Details_Evaluation_more input{width: 90px; height: 25px; border-radius: 20px; background: #fff; border:1px solid #F62449; font-size: 10px; line-height: 25px; color: #F62449}
    .Details_shop_info{width: 100%; height: 52px; padding: 10px 0; border-bottom: 2px solid #f4f4f4;overflow: hidden;}
    .Details_shop_logo{width: 15%; margin-left: 2%; float: left;}
    .Details_shop_logo img{width:50px; margin-left: 2%;border:1px solid #f2f2f2; border-radius: 4px;}
    .Details_shop_expr{width: 50%; margin-left: 5px; float: left;}
    .Details_shop_name h3{font-weight: 400; color: #333;}
    .Details_shop_nub{font-size: 10px; color: #999; line-height: 28px;}
    .Details_shop_nub span{margin-right: 20px; }
    .Details_shop_btn{width: 30%; float: left;}
    .Details_shop_btn a{width: 80px; height: 23px; margin-top: 12px; margin-right: 2%; text-align: center; border-radius: 20px; background: #fff; border:1px solid #F62449; font-size: 10px; line-height: 25px; color: #F62449; display: block; float: right;}

    .star_ul li{margin-right: 10px;float: left;}
    .star_ul img {width: 16px;height: 16px;vertical-align: text-bottom;}
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
</style>
