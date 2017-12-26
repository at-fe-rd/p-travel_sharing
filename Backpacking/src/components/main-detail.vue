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
