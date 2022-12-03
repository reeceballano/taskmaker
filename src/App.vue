
<template>
    <div class="container">
        <RouterView />
    </div>
</template>

<script setup>
    import { provide, onMounted } from 'vue';
    import { RouterLink, RouterView } from 'vue-router';
    import { useTodos } from './composables/useTodos';
    
    const { todos, fetchTodos, deleteTodo, updateTodo, addTodo, infiniteLoop } = useTodos();

    provide('todos', todos);
    provide('deleteTodo', deleteTodo);
    provide('updateTodo', updateTodo);
    provide('addTodo', addTodo);
    provide('infiniteLoop', infiniteLoop)

    onMounted(() => {
        fetchTodos();
    })
</script>

<style>
    body {
        @apply bg-sky-100
    }

    h1,h2,h3,h4,h5,h6 {
        @apply font-roboto
    }

    #app {
        @apply grid place-items-center h-full
    }

    .section-title {
        @apply text-lg font-semibold text-gray-600 p-5 border-b
    }

    /*  TODO ITEM ANIMATION */
    .list-enter-active,
    .list-leave-active {
        transition: all 1s ease;
    }

    .list-enter-from,
    .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }

</style>
