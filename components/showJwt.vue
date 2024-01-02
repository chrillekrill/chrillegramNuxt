<template>
    <div>
        <p>{{ props.jwt }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    jwt: String
})


</script>

<style scoped>

</style>