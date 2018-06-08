import Vue from 'vue';
import VueRouter from 'vue-router';
import VueHttp from 'vue-resource';
import AppComponent from './components/AppComponent.vue';
import SideMenu from './components/SideMenu.vue';
import User from './components/User.vue';
import VueTest from './components/VueTest.vue';
import FormTest from './components/FormTest.vue';

require("./style/pure.css");
require("./style/side-menu.css");

const navigation = [{
    label: 'vue',
    url: '/vue',
    pages: [
        {label: 'test', url: '/test'},
        {label: 'form', url: '/form'}
    ]
}, {
    label: 'nav2',
    url: '/nav2',
    pages: [
        {label: 'nav2-page3', url: '/page3'},
        {label: 'nav2-page4', url: '/page4'}
    ]
}];

const defaultView = {
    template: '<p>user view:id:{{$route.params.userId}}</p>',
    watch: {
        $route: function (to, from) {
            console.log('watch');
        }
    },
    beforeRouteUpdate(to, form, next) {
        console.log('before');
    }
};

const routes = [
    {
        path: '',
        redirect: '/user/1'
    },
    {
        path: '/user/:userId',
        components: {
            default: defaultView,
            view2: User
        }
    },
    {
        path: '/vue/',
        redirect: '/vue/test',
        component: SideMenu,
        props: {
            navigation: navigation[0]
        },
        children: [
            {
                path: 'test',
                component: VueTest

            },
            {
                path: 'form',
                component: FormTest
            }
        ]
    },
    {
        path: '/nav2/',
        redirect: '/nav2/page4',
        component: SideMenu,
        meta: {requiresAuth: true},
        props: {
            navigation: navigation[1]
        },
        children: [
            {
                path: 'page3',
                component: {
                    template: '<p>/nav2_page3</p>'
                }
            },
            {
                path: 'page4',
                component: {
                    template: '<p>/nav2_page4</p>'
                }
            }
        ]
    }

];


Vue.use(VueRouter);
Vue.use(VueHttp);


Vue.component('my-component', {
    template:
        `<div >{{message}} {{name}}
                <input v-model="name">
                <button @click="$emit('event-haha')">click</button>
            </div>`,
    methods: {
        click() {
        }
    },
    data() {
        return {message: 'hi', name: "cxq"};
    }
});


let router = new VueRouter({
    routes,
    mode: 'hash',
});

router.beforeEach((to, from, next) => {
    console.log("enter before each1!");
    next();
});
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        console.log("require auth");
    }
    else {
        console.log("auth not required");
    }
    next();
});

new Vue({
    router,
    render: (h) => h(AppComponent, {
        props: {
            navigation
        }
    })
}).$mount('#app');

window.Vue = Vue;
