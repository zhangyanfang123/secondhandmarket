<template>
<div>
  <div align="center">
    <br><input type="text" class="input-find" placeholder="搜索宝贝"/>
    <img src="../assets/images/find.svg" class="pic-find" /><hr>
  </div>

  <div class="footer" align="center">
    <img src="../assets/images/community.svg" class="pic-community"/>
    <router-link to="New"><img src="../assets/images/new.svg" class="pic-new"></router-link>
    <router-link to="MyCollection"><img src="../assets/images/my.svg" class="pic-my"></router-link>
  </div>
</div>
</template>

<script>
  export default {
    name: "HomePage"
  }
</script>

<style scoped>
.input-find{
  background-color: rgba(163, 163, 163, 0.48);
  vertical-align: top;
  width: 80%;
  height: 30px;
  border: 1px solid #ccc;
  padding: 7px 0px;
  border-radius: 3px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}
.pic-find{
  width: 30px;
  height: 30px;
}
.pic-new{
    width: 70px;
    height: 70px;
}
.pic-community{
  width: 30px;
  height: 30px;
  position: absolute;
  left:20%;
  bottom: 10px;
}
.pic-my{
    width: 30px;
    height: 30px;
  position: absolute;
  right: 20%;
  bottom: 10px;
}
  .footer{
  position: absolute;
  bottom: 0;
  width: 100%;
  }
</style>
