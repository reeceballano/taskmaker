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
        @apply md:w-2/3 w-full mb-10
    }

    .sticky-sidebar {
        @apply md:sticky md:top-5 z-30 w-full align-middle
    }
</style>