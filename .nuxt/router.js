import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _83346bd4 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _2e24ac74 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _23914688 = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _4ac09703 = () => interopDefault(import('..\\pages\\property\\index.vue' /* webpackChunkName: "pages/property/index" */))
const _7400670a = () => interopDefault(import('..\\pages\\users\\confirmemail.vue' /* webpackChunkName: "pages/users/confirmemail" */))
const _ba383394 = () => interopDefault(import('..\\pages\\users\\forgetpassword.vue' /* webpackChunkName: "pages/users/forgetpassword" */))
const _0596aeba = () => interopDefault(import('..\\pages\\users\\my-account.vue' /* webpackChunkName: "pages/users/my-account" */))
const _3b4a5c18 = () => interopDefault(import('..\\pages\\users\\my-property.vue' /* webpackChunkName: "pages/users/my-property" */))
const _a0ca0f5e = () => interopDefault(import('..\\pages\\users\\register.vue' /* webpackChunkName: "pages/users/register" */))
const _18b213ac = () => interopDefault(import('..\\pages\\users\\resetpassword.vue' /* webpackChunkName: "pages/users/resetpassword" */))
const _7d0e6160 = () => interopDefault(import('..\\pages\\users\\signin.vue' /* webpackChunkName: "pages/users/signin" */))
const _180e6d68 = () => interopDefault(import('..\\pages\\users\\updateproperty.vue' /* webpackChunkName: "pages/users/updateproperty" */))
const _86a1ae64 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _4909f5bb = () => interopDefault(import('..\\pages\\property\\_slug.vue' /* webpackChunkName: "pages/property/_slug" */))
const _21951e10 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _83346bd4,
    name: "blog"
  }, {
    path: "/contact",
    component: _2e24ac74,
    name: "contact"
  }, {
    path: "/faq",
    component: _23914688,
    name: "faq"
  }, {
    path: "/property",
    component: _4ac09703,
    name: "property"
  }, {
    path: "/users/confirmemail",
    component: _7400670a,
    name: "users-confirmemail"
  }, {
    path: "/users/forgetpassword",
    component: _ba383394,
    name: "users-forgetpassword"
  }, {
    path: "/users/my-account",
    component: _0596aeba,
    name: "users-my-account"
  }, {
    path: "/users/my-property",
    component: _3b4a5c18,
    name: "users-my-property"
  }, {
    path: "/users/register",
    component: _a0ca0f5e,
    name: "users-register"
  }, {
    path: "/users/resetpassword",
    component: _18b213ac,
    name: "users-resetpassword"
  }, {
    path: "/users/signin",
    component: _7d0e6160,
    name: "users-signin"
  }, {
    path: "/users/updateproperty",
    component: _180e6d68,
    name: "users-updateproperty"
  }, {
    path: "/blog/:slug",
    component: _86a1ae64,
    name: "blog-slug"
  }, {
    path: "/property/:slug",
    component: _4909f5bb,
    name: "property-slug"
  }, {
    path: "/",
    component: _21951e10,
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
