
<template>
    <div class="default-layout">
        <Sidebar>
            <Widget title="Search">
                <Input class="pb-5" id="search" placeholder="Search tasks" v-model="search"/>
            </Widget>

            <Widget title="Add new task">
                <Input id="newTodo" placeholder="New task item" v-model="newTodo.title"/>
                <Textarea v-if="(newTodo.title.length >= 1)" id="newTodoDescription" placeholder="Description. e.g Agluto kan maria mabisin nakon!" v-model="newTodo.description"/>
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
            <Loadmore v-if="!activeMember.length" @handle-click="useTodo.infiniteLoop" />
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
    import DeleteIcon from '../components/DeleteButton.vue';
    import Textarea from '../components/Textarea.vue';

    const todos = computed(() => {
        // CHECK IF NO ACTIVE MEMBER IS SELECTED AND SEARCH INPUT DOESNT HAVE VALUE
        // THEN RETUR THE FULL LIST OF TODOS ARRAY
        if(activeMember.value === '' && search.value.length == 0) {
            return useTodo.todos.value.sort((a,b)=>{
                return new Date(b.created_at) - new Date(a.created_at);
            });
        } 
        
        // FILTER THE TODOS LIST OF SELECTED MEMBER/USER
        if(activeMember.value) {
            return useTodo.todos.value.filter(i => i.assignee == activeMember.value);
        }

        // IF SEARCH INPUT CONTAINS A VALUE THEN WE WILL RETURN THE FILTERED RESULTS
        if(searchResults.value.length && activeMember.value === '') {
            return searchResults.value;
        }
    })

    const useTodo = inject('useTodo');

    const activeTab = ref(0);

    provide('tab', activeTab);

    const search = ref('');
    const searchResults = ref([]);
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

    watch(search, (newVal, oldVal) => {
        console.log('searching...', newVal)
        if(search.value) {
            // const searchData = useTodo.todos.value.filter(item => item.name.toLowerCase().includes(newVal.toLowerCase()));
            // searchResults.value = searchData;
            //console.log(searchData)
            searchResults.value = useTodo.searchTodos(search.value);
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
        useTodo.addTodo(newTodo.title, newTodo.description);
        newTodo.title = '';
        newTodo.description = '';
        focusInput();
    }

    const focusInput = () => {
        document.getElementById('newTodo').focus();
    }

</script>
