import { reactive, toRefs } from 'vue';
import { useDate, yesterday } from '../utils/useDate';

export const useTodos = () => {
    const state = reactive({
        todos: [],
        todo: {},
        isLoading: false
    })

    const fetchTodos = () => {
        const data = [
            { id: 1, name: 'QA this app', assignee: 'You', created_at: useDate(1, yesterday()), status: false, description: 'Stumptown everyday carry sed, squid polaroid migas austin. Dolore in schlitz cold-pressed asymmetrical. ' },
            { id: 3, name: 'Add todo model', assignee: 'Maria', created_at: useDate(3, yesterday()), status: true, description: 'Adaptogen plaid synth etsy cardigan selvage' },
            { id: 2, name: 'Drag and Drop feature', assignee: 'Pepito', created_at: useDate(2, yesterday()), status: true, description: 'Ethical ennui paleo aliquip wayfarers keytar culpa esse sriracha hammock duis.' },
            { id: 4, name: 'Check user inputs on backend', assignee: 'Ben', created_at: useDate(4, yesterday()), status: false, description: 'Before they sold out forage cloud bread yes plz esse DSA ullamco nisi vape fam proident dolore.' },
            { id: 5, name: 'Migrate fresh DB', assignee: 'Ben', created_at: useDate(5, yesterday()), status: true, description: 'Kombucha gatekeep aesthetic DIY cillum qui shoreditch, 3 wolf moon hella hashtag ullamco cred.' },
            { id: 6, name: 'New UI/UX profile component', assignee: 'Pepito', created_at: useDate(6, yesterday()), status: false, description: 'Austin gatekeep food truck, keffiyeh tacos fanny pack gentrify organic.' },
            { id: 7, name: 'Research on new color Scheme', assignee: 'Maria', created_at: useDate(7, yesterday()), status: false, description: 'Austin gatekeep food truck, keffiyeh tacos fanny pack gentrify organic.' },
            { id: 8, name: 'Design new UI', assignee: 'Maria', created_at: useDate(8, yesterday()), status: false, description: 'Austin gatekeep food truck, keffiyeh tacos fanny pack gentrify organic.' },
        ];

        state.todos = data;
    }

    const infiniteLoop = () => {
        const newData = { id: `${new Date()}`, name: `Todo ${state.todos.length + 1}`, assignee: 'Pepito', created_at: useDate(new Date()), status: false, description: 'Before they sold out forage cloud bread yes plz esse DSA ullamco nisi vape fam proident dolore.' }

        state.isLoading = true;
        setTimeout(() => {
            console.log('loading more...')
            state.isLoading = false;
            state.todos.push(newData);
        },1000);
    }

    const addTodo = (name, desc = '') => {
        console.log('adding new todo');
        const todo = {
            id: state.todos.length + 1,
            name: name,
            description: desc,
            status: false,
            created_at: new Date(),
            assignee: 'You'
        }

        state.todos.push(todo)
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

    const fetchSingleTodo = (id) => {
        const todo = state.todos.find(i => i.id === Number(id));
        console.log(todo)
        state.todo = todo;
    }

    return {
        ...toRefs(state),
        fetchTodos,
        deleteTodo,
        updateTodo,
        addTodo,
        infiniteLoop,
        fetchSingleTodo,
    }
}