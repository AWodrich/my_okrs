<template>
    <button
        @click="isClicked"
        :class="btnClass"
        v-html="btnText"
    ></button>

</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        btnText: {
            type: String,
            default: 'Submit'
        },
        btnClass: {
            type: String,
            default: 'btn btn-block'
        }
    },
    methods: {
        isClicked() {
            this.$emit('clicked')
        }
    }
}
</script>
