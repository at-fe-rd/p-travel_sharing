<template>
  <div class="post-box">
    <keep-alive
      <component :is="currentView"/>
    </keep-alive>
  </div>
</template>

<script>
import PostCheckIn from './post-checkin'
import PostFilter from './post-filter.vue'
import PostText from './post-text'

export default {
  name: 'add-post',
  props: ['attachImg'],
  components: {
    PostCheckIn,
    PostFilter,
    PostText
  },
  data () {
    return {
      content: '',
      currentView: ''
    }
  },
  mounted () {
    const blur = document.getElementById('blur')
    blur.className += 'blur'
    this.currentView = this.$route.hash.slice(1)
  },
  watch: {
    $route (to, from) {
      this.currentView = this.$route.hash.slice(1)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>