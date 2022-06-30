
export default {
    template: `
        <section>
            <h4>{{info.title}}</h4>
            <ul  v-for="todo in info.todos" >
                <li :class="onDone" @click="toggleDone">{{todo.txt}}</li>   
            </ul>
        </section>
    `,
    props: ['info'],
    data() {
        return {
            isDone: false
        };
    },
    methods: {
        toggleDone() {
            this.isDone = !this.isDone
        },
    },
    computed: {
        onDone() {
            return { 'done': this.isDone }
        }
    },
    created() {
        console.log(this.info);
        console.log('note-image-page');
    },
}
