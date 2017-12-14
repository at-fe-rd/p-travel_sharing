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
          <li class="item"><i class="fa fa-newspaper-o"></i> NewsFeed</li>
        </router-link>
        <router-link :to="'/near-me'" tag="a">
          <li class="item"><i class="fa fa-superpowers"></i> Near me</li>
        </router-link>
        <router-link :to="'/popular'" tag="a">
          <li class="item"><i class="fa fa-area-chart"></i> Popular</li>
        </router-link>
        <router-link :to="'/suggest'" tag="a">
          <li class="item"><i class="fa fa-lightbulb-o"></i> Suggestion</li>
        </router-link>
        <div v-if="!currentUser" class="to-the-right">
          <router-link :to="'/auth/signup'" tag="a">
            <li class="item btn register"><i class="fa fa-user-plus"></i> Register</li>
          </router-link>
          <router-link :to="'/auth/login'" tag="a">
            <li class="item btn login"><i class="fa fa-sign-in"></i> Login</li>
          </router-link>
        </div>
        <div v-if="currentUser" class="to-the-right">
          <drop-down class="item" :title="currentUser.name" :image="currentUser.avatar" icon="fa-caret-down">
            <router-link :to="'/auth/login'" tag="a">
              <li>Information</li>
            </router-link>
            <router-link :to="'/auth/login'" tag="a">
              <li>Check-in</li>
            </router-link>
            <router-link :to="'/auth/login'" tag="a">
              <li>Settings</li>
            </router-link>
            <hr class="small">
            <a @click="logout">
              <li>Logout</li>
            </a>
          </drop-down>
        </div>
      </ul>
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
        if ( provider === 'fb') {
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

<style lang="scss" scoped>
.to-the-right{
  width: 15em;
}

.logo{
  float: left;
  display: inline-block;
}

.resize-logo{
  height: 70px;
  margin-left: 20px;
}

.navbar-box{
  z-index: 20;
  background-color: white;
  height: 70px;
  width: 100%;
  min-width: 1100px;
}

.menu-left{
  width: 40%;
  height: 70px;
  display: inline-block;
  float: left;
  .search-box{
    border-radius: 10px;
    margin-top: 10px;
    width: 60%;
    float: right;
    background: white;
    box-sizing: border-box;
    input{
      border-radius: 10px;
      border: 0;
      height: 50px;
      padding-left: 10px;
      width: 75%;
      font-size: 14px;
      outline: 0;
    }
    button{
      border: 0;
      font-size: 20px;
      top: 10px;
      right: 0;
    }
  }
}

.menu{
  display: table;
  height: 100%;
  width: 55%;
  ul{
    margin: 10px 0;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
}

.item{
  display: inline-block;
  padding: 10px 10px;
}

.register{
  background-color: #9BD770;
}

.login{
  background-color: #5bc0de;
}
</style>

