import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
//import Page from './components/Page'
import PrismicVue from '@prismicio/vue'
import linkResolver from './link-resolver.js'

Vue.config.productionTip = false

const accessToken = '';

Vue.use(VueRouter)

Vue.use(
    PrismicVue, {
      endpoint: "https://leesaward.cdn.prismic.io/api/v2",
      apiOptions: { accessToken },
      linkResolver,
    },
);

const router = new VueRouter({
    routes: [
        // I don't seem to need a route here because the router-links in the header also call a method to update the page component, which seems to be enough to work
    ]
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
