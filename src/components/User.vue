<template>
    <div>
        <p>name:{{user.name}}</p>
        <p>gender:{{user.gender}}</p>
    </div>
</template>

<script>
    export default {
        created() {
            this.$http.get("/mock/user").then(function (response) {
                this.user = response.body;
            });
        },
        data() {
            return {user:{}};
        },
    }
</script>