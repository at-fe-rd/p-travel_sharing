<template>
  <div class="auth-modal">
    <div class="container-crop ">
      <img src="../../assets/logo.png" class="logo" alt="logo">
      <h1>SIGN UP</h1>
      <div class="input-light-grey">
        <i class="fa fa-user-o" aria-hidden="true"></i>
        <input type="text" v-model="user.name" placeholder="Name...">
      </div>
      <div class="input-light-grey">
        <i class="fa fa-envelope" aria-hidden="true"></i>
        <input type="email" v-model="auth.uid" placeholder="Email...">
      </div>
      <div class="input-light-grey">
        <i class="fa fa-lock" aria-hidden="true"></i>
        <input type="password" v-model="auth.password" placeholder="Password...">
      </div>
      <div class="input-light-grey">
        <i class="fa fa-phone" aria-hidden="true"></i>
        <input type="text" v-model="user.phone" placeholder="Phone...">
      </div>
      <div class="gender">
        <input type="radio" name="gender" value=0 v-model="user.gender"> Male
        <input type="radio" name="gender" value=1 v-model="user.gender"> Female
        <input type="radio" name="gender" value=2 v-model="user.gender"> Other
      </div>
      <button class="btn-normal" @click="createUser({user,auth})">Sign Up</button>
      <div class="other-actions">
      <a class="btn-normal">Still have account?</a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import * as types from '../../store/types'
export default {
  name: 'AuthSignUp',
  data () {
    return {
      user: {
        name: '',
        phone: '',
        gender: 0
      },
      auth: {
        uid: '',
        password: '',
        provider: 'email'
      }
    }
  },
  methods: {
    ...mapActions({
      createUser: types.CREATE_USER
    })
  },
  computed: {
    ...mapGetters({
      status: types.auth_STATUS
    })
  }
}
</script>

<style lang="scss" scoped>
// .gender{
//   padding-bottom: 20px;
// }
// input[type="radio"]{
//   margin-left: 10px;
// }
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