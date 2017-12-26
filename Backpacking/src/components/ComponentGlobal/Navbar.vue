<template>
  <div class="navbar-box">
    <div class="menu-left">
      <div class="logo">
        <img class="resize-logo" src="../../assets/logo.png" alt="logo">
      </div>
      <div class="search-box">
        <input type="text" placeholder="Search Location">
        <button>
          <i class="fa fa-search"></i>
        </button>
      </div>
    </div>
    <div class="menu">
      <ul class="menu-list">
        <router-link :to="'/news-feed'" tag="a">
          <li class="item"><i class="fa fa-newspaper-o"></i>{{ $t('lang.nav.newsfeed') | capitalize }}</li>
        </router-link>
        <router-link :to="'/near-me'" tag="a">
          <li class="item"><i class="fa fa-superpowers"></i>{{ $t('lang.nav.nearme') | capitalize }}</li>
        </router-link>
        <router-link :to="'/popular'" tag="a">
          <li class="item"><i class="fa fa-area-chart"></i> {{ $t('lang.nav.popular') | capitalize }}</li>
        </router-link>
        <router-link :to="'/suggest'" tag="a">
          <li class="item"><i class="fa fa-lightbulb-o"></i> {{ $t('lang.nav.suggestion') | capitalize }}</li>
        </router-link>
      </ul>
      <div v-if="!currentUser" class="to-the-right">
        <router-link :to="'/auth/signup'" tag="a">
          <li class="item btn "><i class="fa fa-user-plus"></i>{{ $t('lang.nav.signup') | capitalize }}</li>
        </router-link>
        <router-link :to="'/auth/login'" tag="a">
          <li class="item btn"><i class="fa fa-sign-in"></i>{{ $t('lang.nav.login') | capitalize }}</li>
        </router-link>
      </div>
      <div v-if="currentUser" class="center-nav to-the-right">
        <drop-down class="item" :title="currentUser.name" icon="fa-caret-down">
            <img class="avatar" slot="avatar" v-if="currentUser.avatar" :src="currentUser.avatar" alt="avatar">
            <img class="avatar" slot="avatar" v-if="!currentUser.avatar" src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" alt="avatar">
          <div slot="header-a">
            <p class="title-dropdown">{{ $t('lang.nav.dropdown.account') | capitalize }}</p>
            <router-link :to="'/auth/login'" tag="a">
              <li>{{ $t('lang.nav.dropdown.information') | capitalize }}</li>
            </router-link>
            <router-link :to="'/auth/login'" tag="a">
              <li>{{ $t('lang.nav.dropdown.checkin') | capitalize }}</li>
            </router-link>
              <router-link :to="'/auth/login'" tag="a">
              <li>{{ $t('lang.nav.dropdown.favorites') | capitalize }}</li>
            </router-link>
          </div>
          <div slot="header-b">
            <p class="title-dropdown">{{ $t('lang.nav.dropdown.support') | capitalize }}</p>
            <router-link :to="'/auth/login'" tag="a">
              <li>{{ $t('lang.nav.dropdown.settings') | capitalize }}</li>
            </router-link>
            <a @click="logout">
              <li>{{ $t('lang.nav.dropdown.logout') | capitalize }}</li>
            </a>
          </div>
        </drop-down>
      </div>
      <select-box></select-box>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import * as types from '../../store/types'
  import {fbLogout} from '../../helper/authFacebook.js'

  export default{
    methods: {
      ...mapActions({
        setConnected: types.SET_CONNECTION,
        setCurrentUser: types.SET_CURRENT_USER,
        logoutEmail: types.LOG_OUT
      }),
      logout () {
        const provider = localStorage.getItem('PROVIDER')
        if (provider === 'fb') {
          fbLogout()
          .then(response => {
            this.setConnected(false)
            this.setCurrentUser(null)
          })
        } else if (provider === 'email') {
          this.logoutEmail()
        }
      }
    },
    computed: {
      ...mapGetters({
        currentUser: types.CURRENT_USER,
        connected: types.CONNECTED
      })
    }
  }
</script>
