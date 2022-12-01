<template>
    <div class="memberlist">
        <slot />
    </div>
</template>

<script setup>

</script>

<style>
    .members {
        @apply md:w-2/3 w-full
    }

    .memberlist {
        @apply p-5
    }
</style>