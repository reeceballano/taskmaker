import { reactive, toRefs } from 'vue';

export const useTodos = () => {
    const state = reactive({
        todos: [],
    })

    const fetchTodos = () => {
        const data = [
            { id: 1, name: 'todo 1', status: false, description: 'Stumptown everyday carry sed, squid polaroid migas austin. Dolore in schlitz cold-pressed asymmetrical. ' },
            { id: 2, name: 'todo 2', status: true, description: 'Ethical ennui paleo aliquip wayfarers keytar culpa esse sriracha hammock duis.' },
            { id: 3, name: 'todo 3', status: true, description: 'Adaptogen plaid synth etsy cardigan selvage' },
            { id: 4, name: 'todo 4', status: true, description: 'Before they sold out forage cloud bread yes plz esse DSA ullamco nisi vape fam proident dolore.' },
            { id: 5, name: 'todo 5', status: true, description: 'Kombucha gatekeep aesthetic DIY cillum qui shoreditch, 3 wolf moon hella hashtag ullamco cred.' },
            { id: 6, name: 'todo 6', status: true, description: 'Austin gatekeep food truck, keffiyeh tacos fanny pack gentrify organic.' },
            { id: 7, name: 'todo 7', status: true, description: 'Intelligentsia tempor you probably haven\'t heard of them actually.' },
            { id: 8, name: 'todo 8', status: true, description: 'Cupidatat farm-to-table proident single-origin coffee mollit kickstarter blue bottle taxidermy.' },
            { id: 9, name: 'todo 9', status: true },
        ];

        state.todos = data;
    }

    const addTodo = (name, desc = '') => {
        console.log('adding new todo');
        const todo = {
            id: state.todos.length + 1,
            name: name,
            description: desc,
            status: false
        }

        state.todos.push({...todo});
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
        updateTodo,
        addTodo
    }
}