<template>
    
    <div>
        <h2>Home</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae placeat, doloremque 
        culpa laborum illo ex quis tenetur soluta, magnam iste? Quia neque consectetur laboriosam mollitia labore! Aliquid, cupiditate impedit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae placeat, doloremque 
        culpa laborum illo ex quis tenetur soluta, magnam iste? Quia neque consectetur laboriosam mollitia labore! Aliquid, cupiditate impedit?</p>
    </div>

    <h1>
        {{ user.jwt }}
    </h1>
</template>

<script setup>
        const user = useUserStore()


</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px 0;
    }
</style>