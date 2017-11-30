<template>
  <div class="loader-box">
    <div class="center-loader">
      <div class="loader"></div>
      <p>We are trying to find where you are!</p>
    </div>
  </div>
</template>
<script>
  export default{
  }
</script>
<style scoped>
.loader-box{
  width: 100%;
  height: 100vh;
  background-color: rgba(255,255,255,0.8);
}

.loader {
  border: 10px solid #DCDCDC;
  border-radius: 50%;
  border-top: 10px solid 	#9ACD32	;
  width: 50px;
  height: 50px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  margin: 0 auto;
}

.center-loader{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

