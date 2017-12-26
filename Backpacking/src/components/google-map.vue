<template>
  <div class="gmap">
    <loader-circle :class="{'loader-center': true, 'is-not-loader': isNotLoader }"></loader-circle>
    <gmap-map
      class="gmap-box"
      :center="center"
      :zoom="zoomIndex"
      @click="returnMainPage">
      <gmap-circle 
        :bounds="circleBounds" 
        :center="center"
        :radius="radiusDefault" 
        :options="{editable: true}" 
        @radius_changed="updateCircle('radius', $event)" 
        @bounds_changed="updateCircle('bounds', $event)">
      </gmap-circle>
      <gmap-marker
        :position="yourLocation.position"
        :clickable="true"
        :draggable="true"
        @click="enableSubDetail(yourLocation.id)">
      </gmap-marker>
      <gmap-marker
        :key="index"
        v-for="(m, index) in locations"
        :position="m"
        :clickable="true"
        :draggable="true"
        :icon= "{
          url: icon.shapes.PHOTO_POINT
        }" 
        @click="enableSubDetail(m._id)">
      </gmap-marker>
    </gmap-map>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Icon from '../assets/icon'
import * as types from '../store/types'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'GoogleMap',
  components: {
  },
  data () {
    return {
      radiusDefault: 3000,
      circleBounds: {},
      namePlace: '123',
      icon: Icon
    }
  },
  mounted () {
    this.findYourLocation()
  },
  methods: {
    ...mapActions({
      findYourLocation: types.FIND_YOUR_LOCATION,
      fetchLocations: types.FETCH_LOCATIONS
    }),
    enableSubDetail (local) {
      this.$router.push({ path: `/near-me/place/${local}` })
    },
    returnMainPage () {
      this.$router.push({ path: `/` })
    },
    updateCircle (prop, value) {
      if (prop === 'radius') {
        this.radius = value
      } else if (prop === 'bounds') {
        this.circleBounds = value
        this.fetchLocations({circle: JSON.parse(JSON.stringify(this.circleBounds)), local: JSON.parse(JSON.stringify(this.yourLocation.position))})
      }
    }
  },
  computed: {
    ...mapGetters({
      center: types.YOUR_CENTER,
      locations: types.LOCATIONS,
      yourLocation: types.YOUR_LOCATION,
      zoomIndex: types.YOUR_ZOOM,
      isNotLoader: types.LOADING_COMPLETED
    })
  },
  watch: {
    yourLocation: function (val) {
      let center = JSON.parse(JSON.stringify(val)).position
      let circleBounds = {
        west: center.lng - this.radiusDefault / 100000,
        east: center.lng + this.radiusDefault / 100000,
        south: center.lat - this.radiusDefault / 100000,
        north: center.lat + this.radiusDefault / 100000
      }
      this.fetchLocations({ circle: circleBounds, local: center })
    }
  }
}
</script>

