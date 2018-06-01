import Vue from 'vue';
import VueRouter from 'vue-router';
import AppComponent from './components/AppComponent.vue';

require("./style/pure.css");
require("./style/side-menu.css");

const navigation = [{
    label: 'nav1',
    url: '/admin',
    pages: [
        {label: 'nav1-page1', url: '/nav1/page1'},
        {label: 'nav1-page2', url: '/nav1/page2'}
    ]
}, {
    label: 'nav2',
    url: '/customer',
    pages: [
        {label: 'nav2-page3', url: '/nav2/page1'},
        {label: 'nav2-page4', url: '/nav2/page1'}
    ]
}];

const routes = [];
for (let i in navigation) {
    for (let j = 0; j < navigation[i].pages.length; j++) {
        let page = navigation[i].pages[j];
        routes.push({path: page.url, component: {template: '<div>' + page.label + '</div>'}});
    }
}


Vue.use(VueRouter);

new Vue({
    router: new VueRouter({routes}),
    render: (h) => h(AppComponent, {
        props: {
            navigation
        }
    })
}).$mount('#app');

