import todoListItem from "./todo-list-item.js";

export default {
    template: `
        <section class="note-todos-container">
            <h4>{{info.title}}</h4>
            <ul>
                <todoListItem :item="todo" v-for="todo in info.todos"/>
            </ul>
        </section>
    `,
    components: {
        todoListItem
    },
    props: ['info'],
}
