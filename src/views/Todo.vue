<template>
    <div class="default-layout">
        <Sidebar>
            <IconBack link="/" :size="5" cssStyle="absolute -top-10 left-2"/>
            <Widget title="Todo Details">
                <TodoInfo :todo="todo" />
            </Widget>
        </Sidebar>


        <div class="tasks">
            <h2 class="section-title">
                Todo Description
            </h2>

            <p class="p-5">
                {{todo.description}}
            </p>
        </div>
        <!-- <Todos /> -->
    </div>
</template>

<script setup>
import { inject, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import TodoInfo from '../components/TodoInfo.vue';
import Sidebar from '../components/Sidebar.vue';
import Widget from '../components/Widget.vue';
import IconBack from '../components/icons/IconBack.vue';

const router = useRoute();
const id = router.params.id;

const useTodo = inject('useTodo');

const todo = computed(() => {
    return useTodo.todo.value;
})

const fetchTodo = () => {
    return useTodo.fetchSingleTodo(Number(id));
}

onMounted(() => {
    fetchTodo();
})


</script>

<style>

</style>