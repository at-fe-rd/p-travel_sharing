<template>
  <div class="gallery">
    <div class="main-pic" @mouseenter="isDisabled=false" @mouseleave="isDisabled=true">
      <transition name="slide-fade">
        <button class="change-btn left" @click="changeNextImage(mainPic,-1)" v-if="!isDisabled">
          <i class="fa fa-caret-left"></i>
        </button>
      </transition>
      <span class="helper"></span><img class="large" :src="list[mainPic]" alt="gallery">
      <transition name="slide-fade">
        <button class="change-btn right" @click="changeNextImage(mainPic,1)" v-if="!isDisabled">
          <i class="fa fa-caret-right"></i>
        </button>
      </transition>
    </div>
    <div class="sub-pic">
      <ul class="sub-pic-list">
        <li class="sub-pic-item" :class="{'active': mainPic==index }" v-for="(item,index) in list" @click="changeImage(index)">
          <img class="resize" :src="item" alt="gallery">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        isDisabled: true,
        list: ['https://colorfully.eu/wp-content/uploads/2012/10/empty-road-highway-with-fog-facebook-cover.jpg',
          'https://image.freepik.com/free-photo/cute-cat-picture_1122-449.jpg',
          'https://i.pinimg.com/736x/58/38/e3/5838e35952fa8d7f3ac98d4178b05667--cute-senior-pictures-back-to-school-pictures.jpg',
          'https://c1.staticflickr.com/2/1520/24330829813_944c817720_b.jpg',
          'https://colorfully.eu/wp-content/uploads/2012/10/empty-road-highway-with-fog-facebook-cover.jpg',
          'https://image.freepik.com/free-photo/cute-cat-picture_1122-449.jpg',
          'https://i.pinimg.com/736x/58/38/e3/5838e35952fa8d7f3ac98d4178b05667--cute-senior-pictures-back-to-school-pictures.jpg',
          'https://c1.staticflickr.com/2/1520/24330829813_944c817720_b.jpg',
          'https://colorfully.eu/wp-content/uploads/2012/10/empty-road-highway-with-fog-facebook-cover.jpg',
          'https://image.freepik.com/free-photo/cute-cat-picture_1122-449.jpg',
          'https://i.pinimg.com/736x/58/38/e3/5838e35952fa8d7f3ac98d4178b05667--cute-senior-pictures-back-to-school-pictures.jpg',
          'https://c1.staticflickr.com/2/1520/24330829813_944c817720_b.jpg'
        ],
        mainPic: 0
      }
    },
    methods: {
      changeImage (item) {
        this.mainPic = item
      },
      changeNextImage (pos, i) {
        if (pos + i < 0) {
          this.mainPic = this.list.length - 1
        } else if (pos + i >= this.list.length) {
          this.mainPic = 0
        } else {
          this.mainPic = this.mainPic + i
        }
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>
