import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _761788b0 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))
const _52057a2e = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _766fe2b4 = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages/user/index" */))
const _4cbb05a3 = () => interopDefault(import('..\\pages\\hashtag\\_id\\index.vue' /* webpackChunkName: "pages/hashtag/_id/index" */))
const _c6ae4dee = () => interopDefault(import('..\\pages\\post\\_id\\index.vue' /* webpackChunkName: "pages/post/_id/index" */))
const _0fa51398 = () => interopDefault(import('..\\pages\\user\\_id\\index.vue' /* webpackChunkName: "pages/user/_id/index" */))
const _1186ec11 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/profile",
    component: _761788b0,
    name: "profile"
  }, {
    path: "/signup",
    component: _52057a2e,
    name: "signup"
  }, {
    path: "/user",
    component: _766fe2b4,
    name: "user"
  }, {
    path: "/hashtag/:id",
    component: _4cbb05a3,
    name: "hashtag-id"
  }, {
    path: "/post/:id",
    component: _c6ae4dee,
    name: "post-id"
  }, {
    path: "/user/:id",
    component: _0fa51398,
    name: "user-id"
  }, {
    path: "/",
    component: _1186ec11,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
