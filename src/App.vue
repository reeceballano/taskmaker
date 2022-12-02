
<template>
    <div class="container">
        <RouterView />
    </div>
</template>

<script setup>
    import { provide, onMounted } from 'vue';
    import { RouterLink, RouterView } from 'vue-router';
    import { useTodos } from './composables/useTodos';
    
    const { todos, fetchTodos, deleteTodo, updateTodo, addTodo } = useTodos();

    provide('todos', todos);
    provide('deleteTodo', deleteTodo);
    provide('updateTodo', updateTodo);
    provide('addTodo', addTodo);

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
        @apply grid place-items-center h-screen
    }

    .section-title {
        @apply text-lg font-semibold text-gray-600 p-5 border-b
    }

    .fade-enter-active,
    .fade-leave-active {
        animation: fadein 0.5s;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    @keyframes fadein {
		from {opacity: 0;}
		to   {opacity: 1;}
	}

</style>
