<template>
  <div class="auth-modal">
    <div class="container-crop ">
      <img src="../../assets/logo.png" class="logo" alt="logo">
      <h1>LOGIN</h1>
      <div class="social-login">
        <div class="circle facebook" @click="loginFacebook"><i class="fa fa-facebook" aria-hidden="true"></i></div>
        <div class="circle google"><i class="fa fa-google-plus" aria-hidden="true"></i></div>
        <div class="circle twitter"><i class="fa fa-twitter" aria-hidden="true"></i></div>
      </div>
      <div class="input-light-grey">
        <i class="fa fa-user-o" aria-hidden="true"></i>
        <input type="text" v-model="loginInfo.uid" placeholder="Email...">
      </div>
      <div class="input-light-grey">
        <i class="fa fa-lock" aria-hidden="true"></i>
        <input type="password" v-model="loginInfo.password"  placeholder="Password...">
      </div>
      <button class="btn-normal" @click="loginEmail(loginInfo)">Login</button>
      <div class="other-actions">
      <a class="btn-normal">Forger Password?</a>
      <a class="btn-normal">Have no account?</a>
      </div>
    </div>
  </div>
</template>

<script>
import {fbLogin} from '../../helper/authFacebook.js'
import {mapActions, mapGetters} from 'vuex'
import * as types from '../../store/types'

export default {
  name: 'AuthLogin',
  data () {
    return {
      loginInfo: {
        uid: '',
        password: ''
      },
      FB: window.FB
    }
  },
  methods: {
    ...mapActions({
      loginEmail: types.LOG_IN,
      setConnected: types.SET_CONNECTION,
      setCurrentUser: types.SET_CURRENT_USER,
      getFacebookUser: types.GET_FACEBOOK_USER
    }),
    loginFacebook () {
      fbLogin(this.loginOptions)
        .then(response => {
          if (response.status === 'connected') {
            this.setConnected({status: true, provider: 'fb'})
            this.getFacebookUser(response)
          } else {
            this.setConnected({status: false})
          }
        })
    }
  },
  computed: {
    ...mapGetters({
      connected: types.CONNECTED
    })
  },
  watch: {
    connected: function (value) {
      if (this.connected.status === true) {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// .social-login{
//   margin: 20px 0;
// }
// .circle{
//   margin: 0 20px;
// }
// .logo{
//   width: 100px;
// }
// .auth-modal{
//   height: 90vh;
// }
// .container-crop {
//   border-radius: 5px;
//   background-color: white;
//   max-width: 30rem;
//   text-align: center;
//   margin: 4em auto;
//   padding: 1em 0;
// }
// .input-light-grey{
//   margin: 1em 4em;
//   text-align: left;
//   input{
//     width: 10rem;
//   }
// }
// .other-actions{
//   margin: 20px 0;
// }
</style>