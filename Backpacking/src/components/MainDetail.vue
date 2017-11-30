<template>
  <div class="main-detail-page">
    <router-link class="to-the-right close-btn" :to="{name: 'SubDetail', params: { id: this.$route.params.id }}" tag="a"><i class="fa fa-times-circle-o"></i></router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'MainDetail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss" scoped>
.main-detail-page{
  right: 0;
  height: 100vh;
  background-color: white;
  position: absolute;
  top: 0;
  left: 400px;
}

.close-btn{
  padding-right: 10px;
  padding-top: 10px;
}
</style>
