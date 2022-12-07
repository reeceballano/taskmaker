<template>
    <img class="w-10 rounded-full" :src="imgSrc(id)" />
</template>

<script setup>
import { imgSrc } from '../utils/useProfileImage';

const { id } = defineProps({
    id: {
        type: Number,
        default: 1
    }
})
</script>

<style>

</style>