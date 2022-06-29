import sideBar from '../cmps/side-bar.js'
import noteList from '../cmps/note-list.cmp.js'


export default {
    template: `
        <section class="keep-note-container">
            <side-bar/>
            <note-list/>
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
        noteList,
    },
};
