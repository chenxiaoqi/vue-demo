import Vue from 'vue';
import VueRouter from 'vue-router';
import AppComponent from './components/AppComponent.vue';
import SideMenu from './components/SideMenu.vue';

require("./style/pure.css");
require("./style/side-menu.css");

const navigation = [{
    label: 'nav1',
    url: '/nav1',
    pages: [
        {label: 'nav1-page1', url: '/page1'},
        {label: 'nav1-page2', url: '/page2'}
    ]
}, {
    label: 'nav2',
    url: '/nav2',
    pages: [
        {label: 'nav2-page3', url: '/page3'},
        {label: 'nav2-page4', url: '/page4'}
    ]
}];

const routes = [
    {
        path:'/nav1/',
        component:SideMenu,
        props:{
            navigation:navigation[0]
        },
        children:[
            {
                path:'page1',
                component:{
                    template:'<p>/nav1_page1</p>'
                }

            },
            {
                path:'page2',
                component:{
                    template:'<p>/nav1_page2</p>'
                }
            }
        ]
    },
    {
        path:'/nav2/',
        component:SideMenu,
        props:{
            navigation:navigation[1]
        },
        children:[
            {
                path:'page3',
                component:{
                    template:'<p>/nav2_page3</p>'
                }
            },
            {
                path:'page4',
                component:{
                    template:'<p>/nav2_page4</p>'
                }
            }
        ]
    }

];



Vue.use(VueRouter);

new Vue({
    router: new VueRouter({routes}),
    render: (h) => h(AppComponent, {
        props: {
            navigation
        }
    })
}).$mount('#app');

