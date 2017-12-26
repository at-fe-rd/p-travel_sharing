<template>
  <div class="post-checkin">
    <h4 class="news-user">{{$t('lang.newsfeed.actions.check_in_box.checkin') | capitalize }}</h4>
    <div class="search-box">
      <input type="text" :placeholder="$t('lang.newsfeed.actions.check_in_box.search_location') | capitalize">
      <i class="fa fa-search"></i>
    </div>
    <table>
      <tr>
        <th>{{$t('lang.newsfeed.actions.check_in_box.name') | capitalize}}</th>
        <th>{{$t('lang.newsfeed.actions.check_in_box.type') | capitalize}}</th>
        <th>{{$t('lang.newsfeed.actions.check_in_box.checkin') | capitalize}}</th>
      </tr>
      <tr>
        <td>123123123123</td>
        <td>123</td>
        <td>123</td>
      </tr>
      <tr>
        <td>123123123123</td>
        <td>123</td>
        <td>123</td>
      </tr>
      <tr>
        <td>123123123123</td>
        <td>123</td>
        <td>123</td>
      </tr>
    </table>
    <hr class="small">
    <div class="direction">
      <button class="btn-no-border btn-blue to-the-right">Post</button>
      <router-link :to="{name: 'NewsFeed'}">
        <button class="btn-no-border btn-grey to-the-right">Close</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'post-check-in',
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>

</style>