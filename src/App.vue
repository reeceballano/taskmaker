
<template>
    <div class="container">
        <RouterView />
        <Footer />
    </div>
</template>

<script setup>
    import { provide, onMounted } from 'vue';
    import { RouterLink, RouterView } from 'vue-router';
    import { useTodos } from './composables/useTodos';
    import Footer from './components/Footer.vue';

    const { 
        todos, 
        fetchTodos, 
        deleteTodo, 
        updateTodo, 
        addTodo, 
        infiniteLoop,
        fetchSingleTodo,
        todo,
        searchTodos 
    } = useTodos();

    provide('useTodo', { 
        todos, 
        deleteTodo, 
        updateTodo, 
        addTodo, 
        infiniteLoop,
        fetchSingleTodo,
        todo, 
        searchTodos
    })

    // provide('todos', todos);
    // provide('deleteTodo', deleteTodo);
    // provide('updateTodo', updateTodo);
    // provide('addTodo', addTodo);
    // provide('infiniteLoop', infiniteLoop)

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

    .default-layout {
        @apply md:flex md:w-10/12 md:mx-auto w-full md:space-x-10 align-middle my-20 items-start
        /* @apply flex container py-20 space-x-20 bg-white align-middle rounded-lg drop-shadow-2xl */
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
