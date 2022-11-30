<template>
    <div class="task-item">
        <div class="flex gap-4">
            <div class="col-span">
                <Checkbox @update="updateTodo(todo.id)" :status="todo.status" />
            </div>
            <div class="col-span-3">
                <h4 :class="todo.status ? 'is-completed' : ''">{{todo.name}}</h4>
                <p :class="todo.status ? 'is-completed' : ''">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rerum ex modi voluptate cupiditate dolor dolore sapiente corrupti ipsum, maiores saepe quasi ipsa, quisquam atque nam optio ea facere nihil.</p>
                <div class="actions grid grid-cols-2">
                    <span :class="todo.status ? 'is-completed' : ''">Assigned to: Pepito Manaloto</span>

                    <div class="justify-self-end">
                        <DeleteIcon @handleDelete="deleteTodo(todo.id)" />
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed, inject } from 'vue';
    import Checkbox from './Checkbox.vue';
    import DeleteIcon from './DeleteIcon.vue';

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
    .is-completed {
        @apply line-through opacity-50
    }

    .task-item {
        @apply 
            p-3 
            border-b-2
            mb-3 
            delay-75 
            transition ease-in-out 
            hover:drop-shadow-xl 
            duration-300
            hover:scale-105
            hover:bg-green-50
    }

    .task-item h4 {
        @apply text-sm text-slate-900 font-semibold -mb-1 transition ease-in-out delay-150 uppercase cursor-pointer 
    }

    .task-item p {
        @apply text-sm my-2 text-slate-500
    }

    .task-item span {
        @apply text-xs font-semibold cursor-pointer
    }
</style>
