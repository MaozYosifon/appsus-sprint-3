import sideBar from '../cmps/side-bar.js'
import notesContent from '../cmps/notes-content.js'


export default {
    template: `
        <section class="keep-note-container">
            <side-bar/>
            <notes-content/>
        </section>
    `,
    data() {
        return {
        }
    },
    created() { },
    methods: {
        onNoteSave() {
            console.log('save')
        },
        setAnswer() {
            console.log('setAnswer')
        },
    },
    computed: {

    },
    unmounted() {

    },
    components: {
        sideBar,
        notesContent,
    },
};
