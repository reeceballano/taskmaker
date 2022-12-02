
<template>
    <div class="home-view">
        <Sidebar>
            <Widget title="Add new task">
                <Input id="newTodo" placeholder="Manganen.." v-model="newTodo"/>
                <Button :isDisabled="isDisabled" @handleOnclick="addTask" text="Add task" />
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
                <transition-group name="list" tag="ul">
                    <Todo 
                        v-for="todo in todos"
                        :key="todo.id"
                        :todo="todo"
                    />
                </transition-group>
            </Todos>
            <Loadmore @handle-click="infiniteLoop" />
        </div>
        <!-- <Todos /> -->
    </div>
</template>

<script setup>
    
    import { ref, provide, inject, computed, watch } from 'vue';
    import Todos from '../components/Todos.vue';
    import Todo from '../components/Todo.vue';
    import Profiles from '../components/Profiles.vue';
    import ProfileCard from '../components/ProfileCard.vue';
    import Sidebar from '../components/Sidebar.vue';
    import Widget from '../components/Widget.vue';
    import Input from '../components/Input.vue';
    import Button from '../components/Button.vue';
    import Loadmore from '../components/Loadmore.vue';

    const todos = computed(() => {
        return data.value.sort((a,b)=>{
            return new Date(b.created_at) - new Date(a.created_at);
        });;
    })

    
    const data = inject('todos');
    const addTodo = inject('addTodo');
    const deleteTodo = inject('deleteTodo');
    const infiniteLoop = inject('infiniteLoop');
    const activeTab = ref(0);

    provide('tab', activeTab);

    const newTodo = ref('');
    const isDisabled = ref(true);

    watch(newTodo, () => {
        if(Number(newTodo.value.length) >= 3) { 
            isDisabled.value = false 
        } else {
            isDisabled.value = true;
        }
    })

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

    const addTask = () => {
        if(!newTodo.value.length) { return }
        addTodo(newTodo.value);
        newTodo.value = '';
        focusInput();
    }

    const focusInput = () => {
        document.getElementById('newTodo').focus();
    }

</script>

<style>
    .home-view {
        @apply md:flex container md:space-x-10 align-middle my-20
        /* @apply flex container py-20 space-x-20 bg-white align-middle rounded-lg drop-shadow-2xl */
    }
</style>