<template>
    <div class="footer w_640">
        <ul>
            <li><router-link to="/storelist"><i class="nav_icon1"></i>品牌</router-link></li>
            <li><router-link to="/mall"><i class="nav_icon2"></i>分类</router-link></li>
            <li><router-link to="/"><i class="nav_icon3"></i></router-link></li>
            <li><router-link to="/footprint"><i class="nav_icon4"></i>足迹</router-link></li>
            <li><router-link to="/user"><i class="nav_icon5"></i>我的</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
    /*底部导航*/
    .footer{ width:100%; height:50px; background:rgba(255,255,255,0.98); border-top:1px solid #f6f6f6; position:fixed; bottom:-1px; z-index:999999;}
    .footer li{width:20%; height:50px; text-align:center; float:left;}
    .footer li a{width:100%; height:50px; text-align:center; line-height:78px; display:block; font-size:10px;color:#4A4A4A; float:left; position:relative;}
    .nav_icon1{width:36px; height:35px; margin-left:-18px; position:absolute; left:50%; background:url(../assets/nav1.png) center center no-repeat; background-size:20px 18px; float:left; display:inline-block;}
    .nav_icon2{width:36px; height:35px; margin-left:-18px; position:absolute; left:50%; background:url(../assets/nav2.png) center center no-repeat;background-size:20px 18px; float:left; display:inline-block;}
    .nav_icon3{width:45px; height:45px; margin-left:-22.5px; margin-top: 2.5px; position:absolute; left:50%; background:url(../assets/nav3.png) center center no-repeat;background-size:45px 45px; float:left; display:inline-block;}
    .nav_icon4{width:36px; height:35px; margin-left:-18px; position:absolute; left:50%; background:url(../assets/nav4.png) center center no-repeat;background-size:20px 20px; float:left; display:inline-block;}
    .nav_icon5{width:36px; height:35px; margin-left:-18px; position:absolute; left:50%; background:url(../assets/nav5.png) center center no-repeat;background-size:20px 20px; float:left; display:inline-block;}
    .router-link-active>.nav_icon1{width:36px; height:35px; margin-left:-18px; position:absolute; left:50%; background:url(../assets/nav1_S.png) center center no-repeat; background-size:25px 23px; float:left; display:inline-block;}
    .router-link-active>.nav_icon2{width:36px; height:35px; margin-left:-18px; position:absolute; left:50%; background:url(../assets/nav2_S.png) center center no-repeat;background-size:25px 23px; float:left; display:inline-block;}
    .router-link-active>.nav_icon4{width:36px; height:35px; margin-left:-18px; position:absolute; left:50%; background:url(../assets/nav4_S.png) center center no-repeat;background-size:25px 25px; float:left; display:inline-block;}
    .router-link-active>.nav_icon5{width:36px; height:35px; margin-left:-18px; position:absolute; left:50%; background:url(../assets/nav5_S.png) center center no-repeat;background-size:25px 25px; float:left; display:inline-block;}
    .w_640{ max-width:640px; min-width:320px; width:100%; margin:0 auto;}
</style>
