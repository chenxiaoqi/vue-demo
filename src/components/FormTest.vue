<template>
    <div>
        <h4>{{this.$route.fullPath}}</h4>
        <form method="get" action="nowhere.html" v-on:submit.prevent="submit">
            <ol>
                <li>
                    <textarea v-model.lazy.trim="modelTextArea" placeholder="add multiple lines"></textarea>
                    <p>Multiple line message is:[{{modelTextArea}}]</p>
                </li>
                <li>
                    <input true-value="yes" false-value="no" type="checkbox" v-model="modelSingleChecked">{{modelSingleChecked}}
                </li>
                <li>
                    <input type="checkbox" value="jack" v-model="modelMultiCheckBox">
                    <input type="checkbox" value="jerry" v-model="modelMultiCheckBox">{{modelMultiCheckBox}}
                </li>
                <li>
                    <input type="radio" value="one" v-model="modelRadio">
                    <input type="radio" value="tow" v-model="modelRadio">{{modelRadio}}
                </li>
                <li>
                    modelNumberInput<input v-model.number="modelNumberInput">[{{modelNumberInput}}]
                </li>
                <li>
                    <select v-model="modelSelect">
                        <option value="" disabled>请选择</option>
                        <option v-for="item in options" :value="item.value">{{item.option}}</option>
                    </select>
                    {{modelSelect}}
                </li>
                <li>
                    <ms-input label="ms input" v-on="inputListeners" placeholder="input your fucking name" regex="^[0-9]{1,5}$" v-model="msInputModel"></ms-input>
                    {{msInputModel}}
                </li>
                <li>checkbox component<base-checkbox v-model="lovingVue"></base-checkbox>{{lovingVue}}</li>
                <li><input type="submit" value="submit"></li>
            </ol>
        </form>
    </div>
</template>

<style>
    .error-input {
        border: 1px solid red;
    }
</style>

<script>

    let msInput = {
        inheritAttrs:false,
        template: `<span tabindex="1"><label>{{label}}</label><input v-bind="$attrs" type="text" @input="input" :class="{'error-input':error}"></span>`,
        props: ['label', 'regex'],
        data() {
            return {
                error: false
            };
        },
        methods: {
            input($event) {
                if (!new RegExp(this.regex, 'g').test($event.target.value)) {
                    this.error = true;
                    this.$emit('input', null);
                }
                else {
                    this.error = false;
                    this.$emit('input', $event.target.value);
                }
            }
        }
    };

    let baseCheckBox = {
        model:{
            prop:'checked',
            event:'change'
        },
        props:{checked :Boolean},
        template:`<input
                    type="checkbox"
                    v-bind:checked="checked"
                    v-on:change="$emit('change', $event.target.checked)">`
    };

    export default {
        components: {
            'ms-input': msInput,
            'base-checkbox':baseCheckBox
        },
        data() {
            return {
                options: [{value: 1, option: 'A'}, {value: 2, option: 'B'}],
                modelTextArea: '',
                modelSingleChecked: '',
                modelMultiCheckBox: [],
                modelRadio: '',
                modelSelect: '',
                modelNumberInput: null,
                msInputModel: null,
                lovingVue:true
            };
        },
        computed:{
            inputListeners (){
                let vm = this;
                return Object.assign({},this.$listeners,
                            {
                                focus(event){alert(1);},
                            }
                        );
            }
        },
        methods: {
            submit() {
                this.$root.baz();
                this.$http.get("form.html", {emulateHTTP: true, params: {modelMultiCheckBox: this.modelMultiCheckBox}});
            }
        }
    }
</script>