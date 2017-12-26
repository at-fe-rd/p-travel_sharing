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
            <span>{{$t('lang.map.details.set_location') | capitalize }}</span>
          </li>
          <li class="action-item">
            <i class="fa fa-bookmark-o"></i>
            <span>{{$t('lang.map.details.save') | capitalize }}</span>
          </li>
          <li class="action-item">
            <i class="fa fa-mobile"></i>
            <span>{{$t('lang.map.details.send_phone') | capitalize }}</span>
          </li>
          <li class="action-item">
            <i class="fa fa-share-alt"></i>
            <span>{{$t('lang.map.details.share') | capitalize }}</span>
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
          <li class="align-right">
            <router-link :to="{name: 'MainDetail', params: {id: this.$route.params.id}}" tag="a">{{$t('lang.map.details.more_details') | capitalize }}</router-link>
          </li>
        </ul>
      </div>
      <div class="small-gallery">
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

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(-1000px);
  opacity: 0;
}
</style>
