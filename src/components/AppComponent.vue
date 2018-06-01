<template>
    <div id="layout">
        <!-- Menu toggle -->
        <a href="#menu" id="menuLink" class="menu-link">
            <!-- Hamburger icon -->
            <span></span>
        </a>

        <div id="menu">
            <div class="pure-menu" v-for="(item,index) in navigation" v-show="sideMenuIndex==index">
                <a class="pure-menu-heading" href="#">{{item.label}}</a>
                <ul class="pure-menu-list">
                    <li class="pure-menu-item" v-for="page in item.pages">
                        <router-link class="pure-menu-link" active-class="pure-menu-selected" :to="page.url">{{page.label}}</router-link>
                    </li>
                </ul>
            </div>
        </div>

        <div id="main">
            <div class="header">
                <div class="pure-menu pure-menu-horizontal">

                    <ul class="pure-menu-list">
                        <li class="pure-menu-item" v-for="item in navigation">
                            <a class="pure-menu-link" :href="item.url">{{item.label}}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                sideMenuIndex: 0
            }
        },
        props:['navigation']
    }
</script>