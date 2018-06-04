<template>

    <div>
        <div id="menu">
            <div class="pure-menu">
                <a class="pure-menu-heading" href="#">{{navigation.label}}</a>
                <ul class="pure-menu-list">
                    <li class="pure-menu-item" v-for="page in navigation.pages">
                        <router-link class="pure-menu-link" active-class="pure-menu-selected" :to="navigation.url+page.url">
                            {{page.label}}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>

        <div id="main">

            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        props:['navigation']
    }
</script>