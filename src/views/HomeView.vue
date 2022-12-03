
<template>
    <div class="home-view">
        <Sidebar>
            <Widget title="Add new task">
                <Input id="newTodo" placeholder="Manganen.." v-model="newTodo.title"/>
                <Textarea id="newTodoDescription" placeholder="Agsida tayo dinengdeng" v-model="newTodo.description"/>
                <Button :isDisabled="isDisabled" @handleOnclick="addTask" text="Add task" />
            </Widget>

            <Widget title="Members">
                <DeleteIcon 
                    v-if="activeMember.length" 
                    @handle-delete="activeMember = ''; activeTab = 0"
                    cssStyle="absolute top-6 right-5"
                >
                    CLEAR
                </DeleteIcon>
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
    
    import { reactive, ref, provide, inject, computed, watch } from 'vue';
    import Todos from '../components/Todos.vue';
    import Todo from '../components/Todo.vue';
    import Profiles from '../components/Profiles.vue';
    import ProfileCard from '../components/ProfileCard.vue';
    import Sidebar from '../components/Sidebar.vue';
    import Widget from '../components/Widget.vue';
    import Input from '../components/Input.vue';
    import Button from '../components/Button.vue';
    import Loadmore from '../components/Loadmore.vue';
    import DeleteIcon from '../components/DeleteIcon.vue';
    import Textarea from '../components/Textarea.vue';

    const todos = computed(() => {
        if(activeMember.value === '') {
            return data.value.sort((a,b)=>{
                return new Date(b.created_at) - new Date(a.created_at);
            });
        } else {
            return data.value.filter(i => i.assignee == activeMember.value);
        }
    })
    
    const data = inject('todos');
    const addTodo = inject('addTodo');
    const deleteTodo = inject('deleteTodo');
    const infiniteLoop = inject('infiniteLoop');
    const activeTab = ref(0);

    provide('tab', activeTab);

    const newTodo = reactive({
        title: '',
        description: ''
    });
    const isDisabled = ref(true);
    const activeMember = ref('');
    const isActive = ref(true);

    watch(newTodo, () => {
        console.log(newTodo)
        if(Number(newTodo.title.length) >= 3) { 
            isDisabled.value = false 
        } else {
            isDisabled.value = true;
        }
    })

    const users = [
        {id: 1, name: 'You', position: 'FullStack Developer' },
        {id: 2, name: 'Pepito', position: 'Frontend Developer' },
        {id: 3, name: 'Maria', position: 'Designer' },
        {id: 4, name: 'Ben', position: 'Backend Developer' },
    ]

    const changeTab = (user) => {
        activeTab.value = user.id;
        activeMember.value = user.name;
        if(activeMember.value == user.name) {
            isActive.value = true;
        }
    }

    const addTask = () => {
        if(!newTodo.title.length) { return }
        addTodo(newTodo.title, newTodo.description);
        newTodo.title = '';
        newTodo.description = '';
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