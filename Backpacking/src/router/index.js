import Vue from 'vue'
import Router from 'vue-router'
import GoogleMap from '@/components/google-map'
import NewsFeed from '@/components/news-feed'
import Popular from '@/components/popular'
import SubDetail from '@/components/sub-detail'
import MainDetail from '@/components/main-detail'
import GalleryBox from '@/components/gallery-box'
import Info from '@/components/info'
import Preview from '@/components/post/post-preview'
import AuthLogin from '@/components/auth/auth-login'
import AuthSignUp from '@/components/auth/auth-signup'
import AddPost from '@/components/post/add-post'

// const NewsFeed = () => import(/* webpackChunkName: "group-news" */ '@/components/news-feed.vue')

Vue.use(Router)

const router = new Router({
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
      name: 'NewsFeed',
      children: [
        {
          path: '/post/:id',
          component: Preview,
          name: 'Preview'
        },
        {
          path: 'new',
          component: AddPost,
          name: 'Post',
          meta: { requiresAuth: true },
          alias: ['/new/post', '/post']
        }
      ]
    },
    {
      path: '/popular',
      component: Popular,
      name: 'Popular'
    },
    {
      path: '/auth/login',
      component: AuthLogin,
      name: 'AuthLogin',
      meta: { requiresAuth: false }
    },
    {
      path: '/auth/signup',
      component: AuthSignUp,
      name: 'AuthSignUp',
      meta: { requiresAuth: false }
    }
  ]
})

router.beforeEach((to, from, next) => {
  try {
    if (to.matched[to.matched.length - 1].meta.requiresAuth === false) {
      if (localStorage.getItem('ACCESS_TOKEN')) {
        next({path: '/news-feed'})
      } else {
        next()
      }
    } else if (to.matched[to.matched.length - 1].meta.requiresAuth === true) {
      if (localStorage.getItem('ACCESS_TOKEN')) {
        next()
      } else {
        next({path: '/news-feed'})
      }
    } else {
      next(true)
    }
  } catch (e) {
    next()
  }
})

export default router
