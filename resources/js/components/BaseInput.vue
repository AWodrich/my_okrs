<template>
    <input
        :type="type"
        :placeholder="placeholderTxt"
    />
</template>

<script>
export default {
    name: 'BaseInput',
    props: {
        placeholderTxt: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        }
    }
}
</script>

