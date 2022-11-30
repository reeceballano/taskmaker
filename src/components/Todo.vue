<template>
    <div class="task-item">
        <div class="flex gap-4">
            <div class="col-span">
                <input type="radio" checked="checked" name="radio" id="radio-one"
                class="w-5 h-5 bg-pink-300 checked:bg-rose-500 cursor-pointer" />
            </div>
            <div class="col-span-3">
                <h4>{{todo.name}}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rerum ex modi voluptate cupiditate dolor dolore sapiente corrupti ipsum, maiores saepe quasi ipsa, quisquam atque nam optio ea facere nihil.</p>
                <span>Assigned to: Pepito Manaloto</span>
                <button @click="updateTodo(todo.id)">Update</button>
                <button @click="deleteTodo(todo.id)">Delete</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { inject } from 'vue';

    const { todo } = defineProps({
        todo: {
            type: Object,
            default: () => {}
        }
    })

    // Don't destructure like this, this will loose reactivity
    // const { id, name, status } = todo;

    const deleteTodo = inject('deleteTodo');

    const updateTodo = inject('updateTodo');
    
</script>

<style>
    .task-item {
        @apply 
            py-3 
            border-b-2
            mb-3 
            cursor-pointer 
            delay-75 
            transition ease-in-out 
            hover:drop-shadow-xl 
            duration-300
    }

    .task-item h4 {
        @apply text-sm text-slate-900 font-semibold -mb-1 transition ease-in-out delay-150 uppercase
    }

    .task-item p {
        @apply text-sm my-2 text-slate-500
    }

    .task-item span {
        @apply text-xs font-semibold
    }
</style>
