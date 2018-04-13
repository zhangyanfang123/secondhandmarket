<template>
<div>
  <div align="center"><div class="color"></div>
  <img src="../assets/images/avatar.jpg"  class="pic-avatar"/>
  </div>
  <div class="card" align="center">
    <div>
    <span>可爱的鸭翅膀</span>
    <span>ID:123456</span>
    </div><hr style="height:1px;border:none;border-top:2px dashed white; width: 85%"/>
    <div align="center">
    <p>QQ:123654987</p>
    <p>微信：sdafgh155</p>
    <p>手机：1398745632</p>
    <p>邮箱：12365478@qq.com</p>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "MyCollection"
    }
</script>

<style scoped>

.pic-avatar{
  width: 90px;
  height: 90px;
  border-radius: 100%;
  border:solid 10px aqua;
  left: 33%;
  position: absolute;
  top:20px;
}
.color{
  width: 90%;
  height: 45px;
  background-color: aqua;
  position: fixed;
  margin: 0 auto;
  top:65px;
}
.card{
    width: 90%;
    height: 250px;
    background-color: aqua;
    position: fixed;
    margin: -1px auto;
    top:110px;
    border-style:none solid;
}
</style>
