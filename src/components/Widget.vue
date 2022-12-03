<template>
    <div class="widget-item">
        <h2 class="section-title">
            {{title}}
        </h2>
        <slot />
    </div>
</template>

<script setup>
const { title } = defineProps({
    title: {
        type: String,
        default: 'Wdiget Item'
    }
})
</script>

<style>
    .widget-item {
        @apply mb-5 bg-white rounded-lg drop-shadow-2xl relative w-full
    }
</style>