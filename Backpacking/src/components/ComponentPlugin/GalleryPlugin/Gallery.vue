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

.change-btn{
  vertical-align: middle;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 200px;
  border :0;
  width: 70px;
  background: rgba(0,0,0,0.5);
  i{
    font-size: 60px;
    color: white;
  }
  &:hover{
    background: rgba(0,0,0,0.1);
  }
}

.active {
  box-shadow: 0 6px 6px rgba(0,191,255,0.9), inset 0 -3px 3px rgba(0,191,255,0.9);
  border: 1px solid rgba(0,191,255,0.9);
}

.gallery{
  height: 100%;
  width: 100%;
  text-align: center;
}

.main-pic{
  margin: 0 80px;
  height: 80%;
  position: relative;
}

.sub-pic{
  margin-top: 20px;
  height: 15%;
  padding: 0 40px;
  overflow-x: auto;
  white-space: nowrap;
}

.helper {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.large{
  vertical-align: middle;
  max-width: 100%;
  max-height: 100%;
}

.sub-pic-item{
  display: inline-block;
  margin: 0 5px;
  width: 150px;
  height: 100px;
  overflow: hidden;
}

.resize{
  height: 100%;
}

ul{
  margin: 0;
}

.slide-fade-enter-active {
  transition: all .5s ease;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
