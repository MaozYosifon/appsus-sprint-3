import sideBar from '../cmps/side-bar.js'
import noteList from '../cmps/note-list.cmp.js'
import { noteService } from '../services/note-services.js'



export default {
    template: `
        <section v-if="notes" class="keep-note-container">
            <side-bar/>
            <note-list :notes="notes" @addingNote="addNoteDone" />
        </section>
    `,
    data() {
        return {
            notes: null
        }
    },
    created() {
        noteService.query()
            .then((notes) => {
                this.notes = notes
            })

    },
    methods: {
        addNoteDone(note) {
            console.log(note)
        },
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
