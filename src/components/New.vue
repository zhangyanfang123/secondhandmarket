<template>
   <div>
     <div align="center"><br>
       <input type="text" class="input" placeholder="标题"/><hr>
       <input type="number" class="input" placeholder="价格"/><hr>
       <input type="textarea" class="input-describe" placeholder="宝贝描述"/>
     </div>
     <div class="footer-new" align="center"><hr>
       <button class="button-issue">确定发布</button>
     </div>
   </div>
</template>

<script>
    export default {
        name: "New"
    }
</script>

<style scoped>
.input {
  outline:none;
  border:0px;
  width: 85%;
}
.input-describe{
  vertical-align: top;
  outline:none;
  border:0px;
  width: 85%;
  height:150px;
}
.footer-new{
    position: absolute;
    bottom:15px;
    width: 100%;
  }
  .button-issue{
    vertical-align: center;
    outline: none;
    width: 85%;
    line-height: 35px;
    text-align: center;
    font-size: 15px;
    color: #ffffff;
    border-radius: 2px;
    border: 1px solid #de2626;
    background-color: #de2626;
  }
</style>
