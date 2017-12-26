<template>
  <div v-if="notiObj.status!=null" class="noti" :class="color[notiObj.status]">
    <button class="close-btn" @click="setNoti({status: null, message: ''})">X</button>
    <p>{{notiObj.message}}</p>
  </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'
  import * as types from '../../store/types'

  export default{
    data () {
      return {
        color: ['green', 'red', 'yellow']
      }
    },
    methods: {
      ...mapActions({
        setNoti: types.SET_NOTI_STATUS
      })
    },
    computed: {
      ...mapGetters({
        notiObj: types.NOTI_STATUS
      })
    }
  }
</script>
