<template>
    <div id="container">
        <div v-bind:class="{active:show,deactive:!show}">{{new Date()}}</div>
        <div v-bind:class="[classObject.deact]">{{html}}</div>
        <div v-bind:style="styleObject">{{tipOfShow}}</div>
        <input v-model="name">
        <button v-bind:disabled="false" @click="click">disabled test</button>
        <template v-if="show">
            name1 : <input key="name1" placeholder="name 1">
        </template>
        <template v-else>
            name2 : <input key="name2" placeholder="name 2">
        </template>

        <ul>
            <li v-for="(item,index) in list" v-bind:key="item.id">{{item.value}}
                <button @click="list.splice(index,1)">remove{{index}}</button>
            </li>
        </ul>

        <div v-if="show" v-html="html"></div>

        <my-component @event-haha="click"></my-component>

        <fieldset>
            <legend>dynamic component</legend>
            <button @click="component=componentA">componentA</button>
            <button @click="component=componentB">componentB</button>
            <div :is="component"></div>
        </fieldset>

        <fieldset>
            <legend>slot</legend>
            <my-layout>
                <template slot="header">
                    <h1>Here might be a page title</h1>
                </template>

                <p>A paragraph for the main content.</p>
                <p>And another one.</p>

                <template slot="footer">
                    <p>Here's some contact info</p>
                </template>
            </my-layout>
        </fieldset>

        <fieldset>
            <legend>async component</legend>
            <async-component></async-component>
        </fieldset>

        <fieldset>
            <legend>vuex</legend>
            <Counter></Counter>
        </fieldset>
    </div>
</template>

<style>
    .active {
        background-color: #1f8dd6;
    }

    .deactive {
        background-color: #b94a48;
    }
</style>

<script>
    import {mapGetters, mapState,mapMutations } from 'vuex'


    let componentA = {
        template: '<div>Component A</div>'
    };

    let componentB = {
        template: '<div>Component B</div>'
    };

    const Counter = {
        template: `<div>{{countAlias}}|{{count}}|{{countPlusLocalState}}
                        <button @click="increment(3)">incr</button>
                        <button @click="$store.commit('increment',5)">commit incr</button>
                        <div>{{doneTodosCount}}</div>
                   </div>`,
        data(){
            return {localCount:10};
        },
        computed: {
            ...mapState({
                count: state => state.count,
                countAlias:'count',
                countPlusLocalState (state) {
                    return state.count + this.localCount
                }
            }),
            ...mapGetters([
                'doneTodosCount'
            ])
        },
        methods:{
            ...mapMutations(['increment'])
        }
    };

    export default {
        data() {
            return {
                html: '<h1>haha</h1>',
                show: true,
                name: 'cxq',
                list: [
                    {id: 2, value: "value2"},
                    {id: 1, value: "value1"},
                    {id: 3, value: "value3"}
                ],
                classObject: {
                    deact: 'deactive'
                },
                styleObject: {
                    color: 'blue',
                    fontSize: '19px'
                },
                componentA,
                componentB,
                component: componentA
            };
        },
        components: {
            'my-layout': {
                template: `<div class="container">
                <header>
                <slot name="header"></slot>
                </header>
                <main>
                <slot></slot>
                </main>
                <footer>
                <slot name="footer"></slot>
                </footer>
                </div>`
            },
            'Counter': Counter
        },
        methods: {
            click() {
                this.show = !this.show;
                this.list.sort((item1, item2) => this.show ? item1.id - item2.id : item2.id - item1.id);
            }
        },
        computed: {
            tipOfShow() {
                return 'the property of show = ' + this.show;
            }
        },
        watch: {
            name(newName, oldName) {
                console.log("name from " + oldName + " to " + newName);
            }
        }
    }
</script>