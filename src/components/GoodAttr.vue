<template>
    <div>
            <div :class="{ sele_specifications, w_640, am_modal_active:isShow }">
                <div class="sele_specifications_info">
                    <img :src="goodThumb">
                    <strong>￥{{goodPrice}}</strong>
                    <span id="sku-msg">{{goodSku}}</span>
                    <!--<label>库存</label><span>2803</span>-->
                </div>
                <div class="sele_specifications_option" v-for="spec in specification" :key="spec.id" :id="spec.id">
                    <h1>{{spec.name}}</h1>
                    <ul class="uc_01 ui-choose" >
                        <li v-for="value in spec.values" :key="value.id"><input type="hidden" :value="value.id" />{{value.name}}</li>
                    </ul>
                </div>
                <div class="sele_specifications_nub">
                    <h1>数量</h1>
                    <div class="spinner">
                        <button class="decrease"-</button>
                        <input type="text" class="spinnerExample value spinnerExample1" maxlength="2">
                        <button class="increase">+</button>
                    </div>
                </div>
                <div class="sele_specifications_btn"><input onclick="addToShopCart(this,20);" type="button" value="确 认"></div>
            </div>
        <div class="sele_specifications_bg sele_specifications_bg-active" v-on:click="hiddenAttr"></div>
    </div>
</template>

<script>
export default {
  name: 'GoodAttr',
  data () {
    return {
      goodThumb: 'http://m.renxingsong.cn/images/201806/1529741885227120692.jpg',
      goodPrice: 15,
      goodSku: '未选择',
      specification: [{
        id: 1,
        name: '颜色分类',
        values: [{
          id: 159,
          name: '黄色/3片装'
        },
        {
          id: 155,
          name: '黄色/5片装'
        }]
      }]
    }
  },
  methods: {
    hiddenAttr: function () {
      this.$emit('hiddenAttr')
    }
  }
}
</script>

<style scoped>
    /*商品详细页*/
    .Details_select_list{width: 100%; background: #fff; overflow: hidden; position: fixed; bottom: 50px; z-index: 99999;}
    .sele_specifications { width:100%; height:420px; background:#fff;  font-size: 14px; border-radius: 0; bottom:0; left: 0; position: fixed; text-align: center; -webkit-transform: translateY(100%); -ms-transform: translateY(100%); transform: translateY(100%); -webkit-transition: -webkit-transform 300ms; transition: transform 300ms ; width: 100%; z-index:999; }
    .am_modal_active { transform: translateY(0px);  -webkit-transform: translateY(0); -ms-transform: translateY(0); transform: translateY(0) ; overflow:auto;}
    .am_modal_out { z-index: 1109; -webkit-transform: translateY(100%); -ms-transform: translateY(100%); transform: translateY(100%) }
    .sele_specifications_bg { background-color: rgba(0, 0, 0, 0.5); bottom: 0; height: 100%; left: 0; opacity: 0; position: fixed; right: 0; top: 0; width: 100%; z-index: 8; display:none; }
    .sele_specifications_bg-active { opacity: 1; display:block; }
    .sele_specifications_close{ width:26px; height:26px; display:inline-block; position:absolute; top:10px; right:10px;}
    /*.sele_close_btn{ width:26px; height:26px;background:url(../assets/sele_close_btn.png) no-repeat; background-size:26px; border:0;}*/

    select.ui-choose{display: none;}
    ul.ui-choose { padding-bottom:10px; margin-left:10px; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; float:left; }
    ul.ui-choose:after { content: ""; display: table; clear: both; }
    ul.ui-choose>li { background:#f2f2f2; border:0; border-radius:30px; float: left; height: 25px; line-height: 27px; margin:6px; padding: 0 16px; font-size:10px; cursor: pointer; position: relative;  text-align: center; }
    ul.ui-choose>li:hover { z-index: 4; border-color: #0080ff; color: #0080ff; }
    ul.ui-choose>li.selected { z-index: 3;color: #fff;background: -webkit-linear-gradient(left, #FF5353 , #FF2B95); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, #FF5353 , #FF2B95); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, #FF5353 , #FF2B95); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, #FF5353 , #FF2B95); /* 标准的语法（必须放在最后）*/ }
    ul.ui-choose>li.disabled { z-index: 2; background-color: #f2f2f2; color: #aaa; cursor: not-allowed; }
    ul.ui-choose>li.disabled:hover { border-color: #aaa; }
    ul.ui-choose>li.selected.disabled { z-index: 2; background-color: #8FC7FF; color: #fff; cursor: not-allowed; border-color: #8FC7FF; }
    /*ul.choose-type-right>li.selected { color: #0080ff; background: transparent url("../images/checke.png") no-repeat right bottom; }*/
    ul.ui-choose.choose-flex { display: flex; }
    ul.ui-choose.choose-flex>li { flex: 1; padding: 0 8px; }
    .sele_specifications_info{width:100%; height:80px; overflow:visible;}
    .sele_specifications_info img{width:55px; margin:10px 2% 10px 0px; margin-left:2%; border:1px solid #f4f4f4;float:left;}
    .sele_specifications_info strong{ width:78%; text-align:left; margin-top:3%; color:#f00; font-size:16px; line-height:30px; float:left;}
    .sele_specifications_info span{ color:#999;  font-size: 12px; text-align:left;line-height:30px; float:left;}
    .sele_specifications_info label{ color:#999; font-size: 12px; text-align:left; line-height:30px; float:left;}
    .sele_specifications_option{ clear:both; border-bottom:1px solid #f2f2f2; overflow:hidden;}
    .sele_specifications_option h1{ height:40px; margin-left:12px; line-height:40px; font-size:14px; text-align:left; font-weight:400;}
    .sele_specifications_nub{ height:25px; margin:30px 0px; overflow:hidden;}
    .sele_specifications_nub h1{ width:50px; height:25px; margin-left:12px; line-height:25px; font-size:15px; text-align:left; font-weight:400; float:left;}
    /*.spinner-sprite, .spinner .decrease, .spinner .decrease[disabled], .spinner .increase, .spinner .value, .spinner .value.passive{background: url('../images/spinner.png') no-repeat}*/
    .spinner{height: 25px;width:75px;overflow: hidden;*zoom:1;-webkit-box-shadow: 0 3px 3px -4px #aaa;-moz-box-shadow: 0 3px 3px -4px #aaa;box-shadow: 0 3px 3px -4px #aaa}
    .spinner button, .spinner .value{text-align: center;display: block;float: left;height: 100%;line-height: 25px;margin: 0}
    .spinner button{border: none;width: 24px;color: #e5312a;font: 22px Arial bold;padding: 0;outline: none}
    .spinner .decrease{background-position: 0 -50px;cursor: pointer;text-indent: -10000px}
    .spinner .decrease[disabled]{background-position: 0 -75px;cursor: default}
    .spinner .increase{background-position: 0 0;cursor: pointer;text-indent: -10000px}
    .spinner .value{background-position: 0 -100px;width: 24px;height: 27px;border: none;font-family: Arial;color: #666;padding: 0px}
    .spinner .value.passive{background-position: 0 -25px;color: #919191}

    .sele_specifications_btn{ width:100%; margin:20px auto; text-align:center; }
    .sele_specifications_btn input{width:90%; height:45px; line-height:45px; text-align:center; border:0; border-radius:40px; color:#fff;
        background: -webkit-linear-gradient(left, #FF5353 , #FF2B95); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, #FF5353 , #FF2B95); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, #FF5353 , #FF2B95); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, #FF5353 , #FF2B95); /* 标准的语法（必须放在最后）*/  }
    .attr-enter{
        transform: translateY(100%);
    }
    .attr-enter-to{
        transform: translateY(0%);
    }

</style>
