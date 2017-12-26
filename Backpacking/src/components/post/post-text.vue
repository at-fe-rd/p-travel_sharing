<template>
  <div class="post-text">
    <h4 class="news-user">Name</h4>
    <div class="preview-box" v-if="img">
      <img class="preview-img" :src="img" alt="upload Image">
    </div>
    <div class="text-box">
      <transition name="small-actions-slide-fade">
        <div v-if="fly" class="small-actions">
          <label for="file-short-upload"><i class="fa fa-camera"></i></label>
          <input id="file-short-upload" type="file" name="image" @change="convertImage">
          <i class="fa fa-compass" aria-hidden="true"/>
          <i class="fa fa-video-camera" aria-hidden="true"/>
        </div>
      </transition>
      <textarea 
        :placeholder="$t('lang.newsfeed.actions.text_box.write_status') | capitalize"
        rows="5"
        v-model="content"/>
      <input type="text" v-model="hashtag" placeholder="#tag">
    </div>
    <hr class="small">
    <loading-8 v-if="isLoading"></loading-8>
    <button @click="createPostAction" class="btn-no-border btn-blue to-the-right">
      {{$t('lang.newsfeed.actions.text_box.post') | capitalize}}
      <i class="fa fa-paper-plane-o"></i>
    </button>
    <router-link :to="{name: 'NewsFeed'}">
      <button class="btn-no-border btn-grey to-the-right">{{$t('lang.newsfeed.actions.close') | capitalize}}</button>
    </router-link>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import * as types from '../../store/types'

export default {
  name: 'post-text',
  data () {
    return {
      isLoading: false,
      fly: false,
      content: '',
      img: '',
      hashtag: ''
    }
  },
  mounted () {
    this.isLoading = false
    if (this.$route.params.id) {
      this.sendImg = this.$route.params.id
      this.img = URL.createObjectURL(this.$route.params.id)
    }
    setTimeout(() => { this.fly = true }, 400)
  },
  methods: {
    ...mapActions({
      createPost: types.CREATE_POST
    }),
    convertImage () {
      this.sendImg = event.target.files[0]
      this.img = URL.createObjectURL(event.target.files[0])
    },
    createPostAction () {
      this.isLoading = true
      this.createPost({img: this.sendImg, content: this.content, hashtag: this.hashtag})
    }
  }
}
</script>
<style lang="scss">
.small-actions-slide-fade-enter-active {
  transition: all .6s ease;
}

.small-actions-slide-fade-leave-active {
  transition: all .6s ease;
}

.small-actions-slide-fade-enter, .small-actions-slide-fade-leave-to{
  opacity: 0;
  transform: translateX(50%);
}
.actions{
  z-index: 2;
}
</style>