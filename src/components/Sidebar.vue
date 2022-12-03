<template>
    <div class="sibebar">
        <div class="sticky-sidebar">
            <slot />
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .sibebar {
        @apply w-full md:w-2/3 lg:w-2/3 mb-10
    }

    .sticky-sidebar {
        @apply md:sticky md:top-5 z-30 w-full align-middle
    }
</style>