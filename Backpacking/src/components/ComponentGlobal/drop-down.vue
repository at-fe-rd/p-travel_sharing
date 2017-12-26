<template>
  <div class="dropdown" :class="{open:isOpen}" @click="toggleDropDown">
    <slot name="avatar">
    </slot>
    <slot name="title">
      <div class="title">
        <p class="title-text">
          {{title}}
          <i class="fa" :class="icon"></i>
        </p>
      </div>
    </slot>
    <transition name="dropdown-slide-fade">
      <ul v-if="isOpen" class="dropdown-menu">
        <slot name="header-a"></slot>
        <slot name="header-b"></slot>
        <slot name="header-c"></slot>
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
      toggleDropDown (e) {
        this.isOpen = !this.isOpen
        if (this.isOpen === true) {
          e.stopImmediatePropagation()
          document.onclick = this.closeDropDown
        }
      },
      closeDropDown () {
        this.isOpen = false
      }
    }
  }
</script>
<style lang="scss" scoped>
.dropdown-slide-fade-enter-active {
  transition: all 0.5s ease;
}

.dropdown-slide-fade-leave-active {
  transition: all 0.5s ease;
}

.dropdown-slide-fade-enter, .dropdown-slide-fade-leave-to{
  opacity: 0;
  max-height: 0;
}
.dropdown-slide-fade-enter-to{
  max-height: 15rem;
}
.dropdown-slide-fade-leave{
  max-height: 15rem;
}
.flag-icon{
  font-size: 15px;
}
</style>
