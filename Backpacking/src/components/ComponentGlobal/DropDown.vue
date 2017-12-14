<template>
  <div class="dropdown" :class="{open:isOpen}" @click="toggleDropDown">
    <slot name="avatar">
      <img class="avatar" v-if="image" :src="image" alt="avatar">
      <img class="avatar" v-if="!image" src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" alt="avatar">
    </slot>
    <slot name="title">
      <div class="title">
        <p class="title-text">
          {{title}}
          <i class="fa" :class="icon"></i>
        </p>
      </div>
    </slot>
    <transition name="slide-fade">
      <ul v-if="isOpen" class="dropdown-menu">
        <slot></slot>
      </ul>
    </transition>
  </div>
</template>
<script>
  export default{
    props: {
      title: String,
      icon: String,
      image: String
    },
    data () {
      return {
        isOpen: false
      }
    },
    methods: {
      toggleDropDown () {
        this.isOpen = !this.isOpen
      },
      closeDropDown () {
        this.isOpen = false
      }
    }
  }
</script>
<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all .6s ease;
}

.dropdown{
  position: relative;
  width: 10em;
}
.slide-fade-leave-active {
  transition: all .6s ease;
}

.slide-fade-enter, .slide-fade-leave  {
  transform: translateY(-3em);
  opacity: 0;
}
.avatar{
  width: 2em;
  height: 2em;
  border-radius: 50%;
}
.avatar,.title{
  display: inline-block;
  vertical-align: middle;
}
.title-text{
  margin: 0;
}
p,li,a{
  cursor: pointer;
}
</style>
