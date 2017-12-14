<template>
  <div v-if="location && location.place">
    <div class="detail-page">
      <img class="img-box" src="http://colorfully.eu/wp-content/uploads/2012/10/empty-road-highway-with-fog-facebook-cover.jpg" alt="cover-place">
      <div class="detail-box">
        <div class="info-place">
          <h2>{{location.place.name_place}}</h2>
          <span>4.5</span>•
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>•
          <span> {{location.place.people_rating}} reviews</span>
        </div>
        <button class="direction">
          <i class="fa fa-arrow-circle-right"></i>
        </button>
      </div>
      <div class="row action">
        <ul>
          <li class="action-item">
            <i class="fa fa-map-marker"></i>
            <span>Set Location</span>
          </li>
          <li class="action-item">
            <i class="fa fa-bookmark-o"></i>
            <span>Save</span>
          </li>
          <li class="action-item">
            <i class="fa fa-mobile"></i>
            <span>Send to Phone</span>
          </li>
          <li class="action-item">
            <i class="fa fa-share-alt"></i>
            <span>Share</span>
          </li>
        </ul>
      </div>
      <div class="more-info">
        <ul>
          <li>
            <i class="fa fa-location-arrow"></i>
            <span>{{location.place.name_palce}}</span>
          </li>
          <li>
            <i class="fa fa-phone"></i>
            <span>0236 3821 480</span>
          </li>
          <li>
            <i class="fa fa-asterisk"></i>
            <span>Photo</span>
          </li>
          <li>
            <i class="fa fa-road"></i>
            <span>{{location.place.direction}}</span>
          </li>
          <li>
            <i class="fa fa-globe"></i>
            <span>{{location.lng}} - {{location.lat}}</span>
          </li>
          <li>
            <i class="fa fa-exclamation"></i>
            <span>Safe</span>
          </li>
        </ul>
        <router-link :to="{name: 'MainDetail', params: {id: this.$route.params.id}}" class="to-the-right" tag="a">More Details</router-link>
      </div>
      <div class="gallery">
        <router-link tag="a" :to="{name: 'Gallery', params: {id: this.$route.params.id}}">
          <ul>
            <li class="gallery-item">
              <img src="http://colorfully.eu/wp-content/uploads/2012/10/empty-road-highway-with-fog-facebook-cover.jpg" alt="gallery">
            </li>
            <li class="gallery-item">
              <img src="http://colorfully.eu/wp-content/uploads/2012/10/empty-road-highway-with-fog-facebook-cover.jpg" alt="gallery">
            </li>
            <li class="gallery-item">
              <img src="http://colorfully.eu/wp-content/uploads/2012/10/empty-road-highway-with-fog-facebook-cover.jpg" alt="gallery">
            </li>
            <li class="gallery-item">
              <img src="http://colorfully.eu/wp-content/uploads/2012/10/empty-road-highway-with-fog-facebook-cover.jpg" alt="gallery">
            </li>
          </ul>
          <div class="cover">
          </div>
        </router-link>
      </div>
    </div>
    <transition name="slide-fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import * as types from '../store/types'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'SubDetail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    this.getPlaceInfo({id: this.$route.params.id})
  },
  methods: {
    ...mapActions({
      getPlaceInfo: types.FETCH_PLACE
    })
  },
  computed: {
    ...mapGetters({
      location: types.PLACE
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/scss/main/_variables.scss';
.detail-box{
  overflow: hidden;
  background-color: $ivory;
  padding: 20px 20px;
}

.detail-page{
  width: 400px;
  height: 90vh;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: scroll;
}

.info-place{
  float: left;
}

.img-box{
  height: 170px;
  width: 100%;
  position: relative;
}

.direction{
  float: right;
  background-color: none;
  border: 0;
}

.action-item{
  float: left;
  display: inline-block;
  width: calc(100%/4);
  text-align: center;
  i{
    font-size: 40px;
    width: 100%;
    padding-bottom: 10px;
  }
}

.more-info{
  padding: 10px 20px;
  li{
    margin-bottom: 10px;
    i{
      width: 30px;
      text-align: center;
      padding-right: 10px;
    }
  }
}

.gallery{
  position: relative;
  height: 80px;
  ul {
    height: 100%;
  }
  .gallery-item{
    width: calc(100%/4);
    height: 100%;
    float: left;
    overflow: hidden;
    img{
      max-height: 100%;
      padding: 0 2px;
    }
  }
}

.cover{
  vertical-align: middle;
  color:#fff;
  position: absolute;
  width: 100%;
  height: 100%;
  line-height: 100px;
  top:0; 
  left:0;
  background:rgba(0,0,0,0.6);
  opacity:0;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  &:hover {
    opacity:1;
  }
}

.slide-fade-enter-active {
  transition: all .5s ease;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(-2000px);
  opacity: 0;
}
</style>
