
<template>
    <div class="home-view">
        <Sidebar>
            <Widget title="Add new task">
                <Input id="newTodo" placeholder="Manganen.." v-model="newTodo"/>
                <Button @handleOnclick="addTask" text="Add task" />
            </Widget>

            <Widget title="Members">
                <Profiles>
                    <ProfileCard 
                        v-for="(user) in users"
                        :key="user.id"
                        :user="user" 
                        background="bg-gray-100"
                        @changeTab="changeTab"
                    />
                </Profiles>
            </Widget>
        </Sidebar>


        <div class="tasks">
            <h2 class="section-title">
                Tasks
            </h2>
            <Todos>
                <TransitionGroup name="slide">
                    <Todo 
                        v-for="todo in todos"
                        :key="todo.id"
                        :todo="todo"
                    />
                </TransitionGroup>
            </Todos>
        </div>
        <!-- <Todos /> -->
    </div>
</template>

<script setup>
    
    import { ref, provide, inject, computed } from 'vue';
    import Todos from '../components/Todos.vue';
    import Todo from '../components/Todo.vue';
    import Profiles from '../components/Profiles.vue';
    import ProfileCard from '../components/ProfileCard.vue';
    import Sidebar from '../components/Sidebar.vue';
    import Widget from '../components/Widget.vue';
    import Input from '../components/Input.vue';
    import Button from '../components/Button.vue';

    const todos = computed(() => {
        return data.value;
    })

    const data = inject('todos');

    const activeTab = ref(0);

    provide('tab', activeTab);

    const newTodo = ref('');

    const users = [
        {id: 1, name: 'Pepito Manaloto', position: 'Frontend Developer' },
        {id: 2, name: 'Maria Smith', position: 'Designer' },
        {id: 3, name: 'Ben Ten', position: 'Backend Developer' },
    ]

    const changeTab = (id) => {
        console.log('current id', id);
        activeTab.value = id;
        console.log('activeTab', activeTab.value)
    }

    const addTask = (task) => {
        console.log('new task', newTodo.value);
    }
</script>

<style>
    .home-view {
        @apply md:flex container md:space-x-10 align-middle my-20
        /* @apply flex container py-20 space-x-20 bg-white align-middle rounded-lg drop-shadow-2xl */
    }
</style>