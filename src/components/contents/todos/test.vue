<template>
    <div>

        <slot name="a" v-bind:data="names">
            <p v-for="item in names">

                {{item}}

            </p>
        </slot>
        <slot name="b" v-bind:data1="names">
            123
        </slot>

    </div>
</template>
<script>

    export default {
        data() {
            return {
                names: ["a", "b", "c"]
            }
        },

    }
</script>