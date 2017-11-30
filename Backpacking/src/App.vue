<template>
  <div class="app">
    <loader-circle :class="{'loader-center': true, 'is-not-loader': isNotLoader }"></loader-circle>
    <navbar class="navbar"></navbar>
    <div class="content">
      <transition name="fade">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import GoogleMap from './components/GoogleMap'
import { mapGetters } from 'vuex'
import * as types from './store/types'
export default {
  components: {
    GoogleMap
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      isNotLoader: types.LOADING_COMPLETED
    })
  }
}
</script>
<style lang="scss">
.navbar{
  position: absolute;
  top: 0;
  left: 0;
}
.is-not-loader{
  display: none;
}
.loader-center{
  position: absolute;
  z-index: 5;
}
.content{
  padding-top: 9vh;
}
.app{
  min-width: 500px;
  width: 100%;
  height: 100vh;
  position: relative;
}
.gmap-box{
  width: 100%; 
  height: 30vh;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
h4{
  margin: 5px;
}
</style>
