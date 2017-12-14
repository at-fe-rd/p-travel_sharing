<template>
  <div class="container">
    <div class="blur" v-if="enableCropBox">
      <crop-box :editImg="currentImg" @sendImg="takeImg"></crop-box>
    </div>
    <div v-if="currentUser" class="filter-place">
      <div class="input-status">
        <textarea placeholder="Write your status" rows="5" v-model="content"></textarea>
        <transition name="bounce">
          <i v-if="isHaveImg" class="fa fa-picture-o" @click="previewImg" aria-hidden="true"></i>
        </transition>
        <transition name="bounce">
          <div id="preview" v-if="enablePreview" @click="holdPreviewImg">
            <div class="arrow-up"></div>
            <div class="preview-box">
              <img class="preview-img" :src="uploadImg" alt="upload Image">
            </div>
          </div>
        </transition>
        <button @click="createPost({img: current, content: content})"><i class="fa fa-paper-plane-o"></i></button>
        <label for="file-upload"><i class="fa fa-camera"></i></label>
        <input id="file-upload" type="file" name="image" @change="convertImageToBase64" multiple>
      </div>
      <div class="filter-actions">
        <div class="center">
          <img class="img-filter" src="../assets/marker-icon/shelter.svg" alt="">
          <img class="img-filter" src="../assets/marker-icon/noun_20046_cc.svg" alt="">
          <img class="img-filter" src="../assets/marker-icon/noun_122309_cc.svg" alt="">
          <img class="img-filter" src="../assets/marker-icon/noun_345302_cc.svg" alt="">
          <img class="img-filter" src="../assets/marker-icon/noun_5149_cc.svg" alt="">
        </div>
      </div>
    </div>
    <div class="news-section">
      <ul class="news-list">
        <li class="news-item" v-for="n in news">
          <div class="news-info">
            <div class="news-header">
              <img class="avatar-user" src="http://3.bp.blogspot.com/-UU-U3Am2BrU/VX3UDjEu-OI/AAAAAAAABFc/z2499qSa_vc/s1600/avatarku.jpg" alt ="">
              <h4 class="news-user">Name</h4>
            </div>
            <img :src="n" class="news-pic" alt='news-pic'>
            <div class="actions">
              <p>Description</p>
              <p>#hashtag</p>
              <hr class="small">
              <span>123 comment(s)</span>
              <i class="fa fa-heart to-the-right"></i>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import * as types from '../store/types'
import Cropper from 'cropperjs'

export default {
  name: 'NewsFeed',
  data () {
    return {
      imgListPost: [],
      enableCropBox: false,
      cropper: Cropper,
      currentImg: {},
      current: {},
      isHaveImg: false,
      enablePreview: false,
      uploadImg: '',
      content: '',
      news: ['https://i.pinimg.com/736x/6d/a0/40/6da04066be84e9dac7baa2200caa4deb--vsco-photography-tumblr-photography.jpg',
        'https://i.pinimg.com/originals/af/91/7e/af917e548a2441aec482478a3f3f0815.jpg',
        'https://i.pinimg.com/736x/a3/78/27/a37827a46c9efe7b9362861f182a2e70--grunge-photography-girl-photography.jpg',
        'https://i.pinimg.com/736x/b8/61/3b/b8613b448bc615045a663186783aa85c--tumblr-pictures-instagram-inspiration-sky-pictures-tumblr.jpg',
        'https://i.pinimg.com/736x/b8/61/3b/b8613b448bc615045a663186783aa85c--tumblr-pictures-instagram-inspiration-sky-pictures-tumblr.jpg',
        'https://i.pinimg.com/736x/6d/a0/40/6da04066be84e9dac7baa2200caa4deb--vsco-photography-tumblr-photography.jpg',
        'https://i.pinimg.com/originals/af/91/7e/af917e548a2441aec482478a3f3f0815.jpg',
        'https://i.pinimg.com/736x/a3/78/27/a37827a46c9efe7b9362861f182a2e70--grunge-photography-girl-photography.jpg'
      ]
    }
  },
  methods: {
    ...mapActions({
      createPost: types.CREATE_POST
    }),
    convertImageToBase64 () {
      this.current = event.target.files[0]
      this.currentImg = URL.createObjectURL(event.target.files[0])
      this.enableCropBox = true
    },
    takeImg: function (value) {
      this.uploadImg = value
      this.enableCropBox = false
      this.isHaveImg = true
    },
    disablePreview () {
      this.enablePreview = false
    },
    previewImg (e) {
      this.enablePreview = true
      e.stopImmediatePropagation()
      event.target.removeEventListener('click', this.previewImg)
      document.onclick = this.disablePreview
    },
    holdPreviewImg (e) {
      e.stopImmediatePropagation()
    }
  },
  computed: {
    ...mapGetters({
      currentUser: types.CURRENT_USER
    })
  }
}
</script>

<style lang="scss" scoped>
.news-section{
  margin-top: 1.5em;
}

.arrow-up{
  margin-left: 5px;
}
#preview{
  position: absolute;
  top: 100%;
  left: 10px;
  .preview-box{
    width: 150px;
    height: 150px;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    z-index: 0;
    .preview-img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
.fa-picture-o{
  position: absolute;
  bottom: 0;
  left: 10px;
  font-size: 20px;
}
.blur{
  background: rgba(255,255,255,0.8);
  height: 100vh;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}

#imgTest{
  background-color: white;
  height: 100px;
  overflow: hidden;
}
input[type="file"] {
    display: none;
}
.filter-place{
  display: -webkit-flex; 
  display: flex;
  height: 70px;
  width: 100%;
  background-color: white;
  margin-top: 1.5em;
  .input-status, .filter-actions{
    width: 50%;
    height: 100%;
  }
  .input-status{
    position: relative;
    border-right: 1px solid rgba(0,0,0,0.2);
    textarea{
      width: 80%;
      height: 100%;
      border: 0;
      resize: none;
      font-size: 16px;
      padding: 10px;
      outline: 0;
    }
    button, label{
      float: right;
      height: 100%;
      width: 10%;
      font-size: 20px;
      border: 0;
      color: rgba(0,0,0,0.3);
    }
    label{
      display: table;
      i{
        display: table-cell;
        vertical-align: middle;
        text-align: center;
      }
    }

  }
  .filter-actions{
     display: table;
    .center{
      text-align: center;
      vertical-align: middle;
      display: table-cell;
    }
    .img-filter{
      vertical-align: middle;
      width: 40px;
      padding: 0 10px;
    }
  }
}


ul{
  margin: 0;
}
.news-item{
  padding: 0 5px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: top;
  .news-info{
    border-radius: 5px;
    background-color: white;
    .news-pic{
      width: 100%;
      max-height: 350px;
    }
  }
  .avatar-user{
      border-radius: 5px;
      width: 30px;
      height: 30px;
      vertical-align: middle;
    }
  .news-header{
    padding: 10px 20px;
    h4{
      display: inline-block;
    }
  }
  .actions{
    padding: 10px 20px 20px 20px;
    p{
      margin: 5px 0;
      &:last-of-type {
         margin-bottom: 15px;
      }
    }
    span,i {
      color: grey;
      font-size: 13px;
    }
  }
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

</style>
