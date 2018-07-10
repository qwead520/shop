<template>
  <div>
    <keep-alive><router-view v-on:hiddenFooter="hiddenFooter" /></keep-alive>
    <Footer v-if="isShow" ></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer'
import StoreList from './components/StoreList'
import Index from './components/Index'
import Good from './components/Good'
import Store from './components/Store'
import Mall from './components/Mall'
import FootPrint from './components/FootPrint'

export default {
  name: 'App',
  components: {Index, Footer, StoreList, Good, Store, Mall, FootPrint},
  data () {
    return {
      isShow: true
    }
  },
  methods: {
    // 某些路由子组件加载时隐藏 footer
    hiddenFooter () {
      this.isShow = false
    }
  }
}
</script>

<style>
  @import url('assets/fonts/iconfont.css');
  @import url('assets/css/font-awesome.min.css');
  * {margin:0; padding:0;}
  * html body { height: 100%; overflow:visible;}
  * html iframe, * html frame {overflow:auto;}
  * html frameset {overflow:hidden;}
  body {max-width:640px; min-width:320px; margin:0 auto; color:#000; font-size: 12px;font: 14px/2 'Microsoft YaHei', 'Arial';}
  input, select {font-size:12px; vertical-align:middle; cursor:pointer; outline: none; padding: 0;}
  input[type=button]{
    -webkit-appearance:none;
    outline:none;
    border:none;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #ccc; opacity:1; font-weight: 200; font-size: 12px;
  }

  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #ccc;opacity:1;font-weight: 200; font-size: 12px;
  }

  input:-ms-input-placeholder{
    color: #ccc;opacity:1;font-weight: 200; font-size: 12px;
  }

  input::-webkit-input-placeholder{
    color: #ccc;opacity:1;font-weight: 200; font-size: 12px;
  }
  input{-webkit-appearance:none;border-radius:0;}
  input[type="radio"]{appearance: none; -webkit-appearance: none;outline: none;display:none}
  .checkbox_label{width:30px;height:30px; margin: 5px 0px; display:inline-block;cursor:pointer; float: right;}
  .checkbox_label input[type="radio"] + span{width:20px;height:20px; margin: 5px; display:inline-block;background:url(assets/c_checkbox_bg.png) no-repeat;background-position:0 0; background-size: 20px;}
  .checkbox_label input[type="radio"]:checked + span{background-position:0 -21px}
  input[type="checkbox"]{appearance: none; -webkit-appearance: none;outline: none;display:none}
  .checkbox_label{width:30px;height:30px; margin: 5px 0px; display:inline-block;cursor:pointer; float: right;}
  .checkbox_label input[type="checkbox"] + span{width:20px;height:20px; margin: 5px; display:inline-block;background:url(assets/c_checkbox_bg.png) no-repeat;background-position:0 0; background-size: 20px;}
  .checkbox_label input[type="checkbox"]:checked + span{background-position:0 -21px}

  textarea, input {word-wrap:break-word; word-break:break-all; padding:0px;}
  li {list-style-type:none;}
  img {border:0 none;}
  em,i{ font-style:normal;}
  a {color:#000; text-decoration:none; outline: none;}
  a {outline:none; star:expression_r(this.onFocus=this.blur());}
  h1 { font-size:18px; }
  h2 { font-size:16px; }
  h3 { font-size:15px; }
  h4 { font-size:14px; }
  .clear { clear:both; height:0px; width:100%; font-size:1px; line-height:0px; visibility:hidden; overflow:hidden;}
  .w_640{ max-width:640px; min-width:320px; width:100%; margin:0 auto;}
  .Details_pic img{width: 100%; vertical-align: middle;}
</style>
