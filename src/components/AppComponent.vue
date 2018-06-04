<template>
    <div id="layout">

        <div>
            <div class="header">
                <div class="pure-menu pure-menu-horizontal">

                    <ul class="pure-menu-list">
                        <li class="pure-menu-item" v-for="item in navigation">
                            <router-link class="pure-menu-link" :to="item.url">{{item.label}}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>



        <router-view></router-view>



    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        props: ['navigation']
    }
</script>