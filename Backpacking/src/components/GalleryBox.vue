<template>
  <div class="gallery-page">
    <gallery-box></gallery-box>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.gallery-page{
  height: 90vh;
}
</style>
