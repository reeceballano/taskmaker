<template>
    <img class="w-10 rounded-full" :src="profileImgSrc" />
</template>

<script setup>
import { imgSrc } from '../utils/useProfileImage';

const props = defineProps({
    id: {
        type: Number,
        default: 1
    }
})

const profileImgSrc = await imgSrc(props.id);

</script>

<style>

</style>