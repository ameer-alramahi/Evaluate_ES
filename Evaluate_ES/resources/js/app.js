require('./bootstrap');

window.Vue = require('vue');

import VueRouter from "vue-router";
Vue.use(VueRouter);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import App from "./App.vue";
import Home from "../js/components/Home";
import ContactList from "../js/components/ContactList"

import VueAxios from "vue-axios";
import axios from "axios";
Vue.use(VueAxios, axios);

const routes= [
    {
        name: '/',
        path: '/',
        component: Home
    },
    {
        name: '/contacts',
        path: '/contacts',
        component: ContactList
    }
]

const router = new VueRouter( {routes: routes} )

const app = new Vue(Vue.util.extend(App)).$mount("#app");
