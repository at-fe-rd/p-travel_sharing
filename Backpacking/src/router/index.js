import Vue from 'vue'
import Router from 'vue-router'
import GoogleMap from '@/components/GoogleMap'
import NewsFeed from '@/components/NewsFeed'
import Popular from '@/components/Popular'
import SubDetail from '@/components/SubDetail'
import MainDetail from '@/components/MainDetail'
import GalleryBox from '@/components/GalleryBox'
import Info from '@/components/Info'
import AuthLogin from '@/components/Auth/AuthLogin'
import AuthSignUp from '@/components/Auth/AuthSignUp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/near-me'
    },
    {
      path: '/near-me',
      name: 'GoogleMap',
      component: GoogleMap,
      children: [
        {
          path: 'place/:id',
          component: SubDetail,
          name: 'SubDetail',
          children: [
            {
              path: 'more-info',
              component: MainDetail,
              children: [
                {
                  path: '',
                  component: Info,
                  name: 'MainDetail'
                },
                {
                  path: 'picture-gallery',
                  name: 'Gallery',
                  component: GalleryBox
                }
              ]
            }
          ]
        }
      ]
    },
    {
      path: '/news-feed',
      component: NewsFeed,
      name: 'NewsFeed'
    },
    {
      path: '/popular',
      component: Popular,
      name: 'Popular'
    },
    {
      path: '/auth/login',
      component: AuthLogin,
      name: 'AuthLogin'
    },
    {
      path: '/auth/signup',
      component: AuthSignUp,
      name: 'AuthSignUp'
    }
  ]
})
