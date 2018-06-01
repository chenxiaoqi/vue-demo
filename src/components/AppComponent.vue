<template>
    <div id="layout">

        <div>
            <div class="header">
                <div class="pure-menu pure-menu-horizontal">

                    <ul class="pure-menu-list">
                        <li class="pure-menu-item" v-for="item in navigation">
                            <a class="pure-menu-link" :href="item.url">{{item.label}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <SideMenu v-bind:navigation="navigation"></SideMenu>



    </div>
</template>

<script>
    import SideMenu from './SideMenu.vue';

    export default {
        components: {
            SideMenu
        },
        data() {
            return {}
        },
        props: ['navigation']
    }
</script>