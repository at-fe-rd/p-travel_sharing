<template>
  <div class="post-filter">
    <h4 class="news-user">{{$t('lang.newsfeed.actions.filter_box.filter') | capitalize}}</h4>
    <div class="filter-box">
      <div class="filter-item" v-for="item in items">
        <div class="center-item">
          <span>{{item.name}}</span>
          <i class="fa fa-times-circle-o" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <div class="filter-actions">
      <ul>
        <li class="filter-item" @click="addItem(0)">
          <div class="center-item">
            <img class="img-filter" src="../../assets/marker-icon/shelter.svg" alt="">
            <span>Hotel & Shelter</span>
          </div>
        </li>
        <li class="filter-item">
          <div class="center-item" @click="addItem(1)">
            <img class="img-filter" src="../../assets/marker-icon/noun_20046_cc.svg" alt="">
            <span>Beautiful Scenery</span>
          </div>
        </li>
        <li class="filter-item">
          <div class="center-item" @click="addItem(2)">
            <img class="img-filter" src="../../assets/marker-icon/noun_345302_cc.svg" alt="">
            <span>Interesting Place</span>
          </div>
        </li>
        <li class="filter-item">
          <div class="center-item" @click="addItem(3)">
            <img class="img-filter" src="../../assets/marker-icon/noun_5149_cc.svg" alt="">
            <span>Restaurant & Eating</span>
          </div>
        </li>
      </ul>
    </div>
    <hr class="small">
    <div class="direction">
      <button class="btn-no-border btn-blue to-the-right">{{$t('lang.newsfeed.actions.filter_box.filter') | capitalize}}</button>
      <router-link :to="{name: 'NewsFeed'}">
        <button class="btn-no-border btn-grey to-the-right">{{$t('lang.newsfeed.actions.close') | capitalize}}</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'post-filter',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: [],
      itemsList: [
        {name: 'Hotel & Shelter', path: '../../assets/marker-icon/shelter.svg'},
        {name: 'Beautiful Scenery', path: '../../assets/marker-icon/noun_20046_cc.svg'},
        {name: 'Interesting Place', path: '../../assets/marker-icon/noun_345302_cc.svg'},
        {name: 'Restaurant & Eating', path: '../../assets/marker-icon/noun_5149_cc.svg'}
      ]
    }
  },
  methods: {
    addItem (index) {
      this.items.push(this.itemsList[index])
    }
  }
}
</script>
<style lang="scss" scoped>

</style>