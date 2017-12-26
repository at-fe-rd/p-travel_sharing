<template>
  <div class="dropdown" :class="{open:isOpen}" @click="toggleDropDown">
    <span :class="icon"></span>
    <transition name="dropdown-slide-fade">
      <ul v-if="isOpen" class="dropdown-menu">
        <li v-for="(flag,index) in flagsCountry" @click="changeLang(index)">
          <a>
            <i :class="flag.icon"></i>
            <span>{{flag.country}}</span>
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        isOpen: false,
        activeLinkIndex: 0,
        flagsCountry: this.$selectbox.flagsCountry,
        icon: ''
      }
    },
    methods: {
      findActiveLink () {
        this.flagsCountry.find((element, index) => {
          let found = element.path === this.$route.path
          if (found) {
            this.activeLinkIndex = index
          }
          return found
        })
      },
      toggleDropDown () {
        this.isOpen = !this.isOpen
      },
      closeDropDown () {
        this.isOpen = false
      },
      changeLang (index) {
        this.icon = this.flagsCountry[index].icon
        this.$i18n.locale = this.flagsCountry[index].lang
      }
    },
    mounted () {
      this.findActiveLink()
      // set default flag
      this.icon = this.flagsCountry[0].icon
    },
    watch: {
      $route: function (newRoute, oldRoute) {
        this.findActiveLink()
      }
    }
  }
</script>
<style>
  .dropdown-slide-fade-enter-active {
    transition: all 0.2s ease;
  }

  .dropdown-slide-fade-leave-active {
    transition: all 0.2s ease;
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