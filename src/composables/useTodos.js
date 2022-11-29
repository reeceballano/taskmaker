import { reactive, toRefs } from 'vue';

export const useTodos = () => {
    const state = reactive({
        todos: [],
    })

    const fetchTodos = () => {
        const data = [
            { id: 1, name: 'todo 1', status: false },
            { id: 2, name: 'todo 2', status: true },
            { id: 3, name: 'todo 3', status: true }
        ];

        state.todos = data;
    }

    const deleteTodo = (id) => {
        console.log('deleting todo ', id)
        const newTodos = state.todos.filter(todo => todo.id !== id);
        console.log('new todos', newTodos);
        state.todos = newTodos;
    }

    const updateTodo = (id) => {
        console.log('updating todo...', id);
        const todos = state.todos.map(i => i.id === id ? {...i, status: !i.status } : i);
        console.log(todos)
        state.todos = todos;
    }

    return {
        ...toRefs(state),
        fetchTodos,
        deleteTodo,
        updateTodo
    }
}