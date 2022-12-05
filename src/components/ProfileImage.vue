<template>
    <img class="w-10 rounded-full" :src="imgSrc" />
</template>

<script setup>
import { computed } from 'vue';

const randomID = () => {
    const min = Math.ceil(1);
    const max = Math.floor(100);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const imgSrc = computed(() => {
    return `https://picsum.photos/id/${randomID()}/200/200`
})
</script>

<style>

</style>