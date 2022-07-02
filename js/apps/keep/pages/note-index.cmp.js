import { noteService } from '../services/note-services.js'
import { eventBus } from '../../../services/eventBus-service.js'
import sideBar from '../cmps/side-bar.js'
import noteList from '../cmps/note-list.cmp.js'
import noteInputPreview from '../cmps/note-input-preview.cmp.js'
import noteCreating from '../cmps/note-creating.cmp.js'



export default {
    template: `
        <section v-if="notes" class="keep-note-container">
            <side-bar @sideBarChanged="onSideBarChange" />
            <section class="keep-note-notes-container">
                <note-creating @addingNote="addNoteDone"/>
                <note-list :filterBy="filterBy" :notes="notes"/>
            </section>
        </section>
    `,
    data() {
        return {
            notes: null,
            removeEventFunc: null,
            filterBy: 'notes',
        }
    },
    created() {
        noteService.query()
            .then((notes) => {
                this.notes = notes
                console.log(notes);
            })
        this.removeEventFunc = eventBus.on('remove-note', this.removeNote)

    },
    methods: {
        onSideBarChange(str) {
            console.log(str.toLowerCase());
            this.filterBy = str.toLowerCase();

        },
        removeNote(noteId) {

            noteService.remove(noteId)
                .then(() => {
                    this.notes = this.notes.filter(note => note.id !== noteId);
                })
        },
        addNoteDone(note) {
            noteService.save(note)
                .then((note) => {
                    this.notes.push(note)
                })

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
        this.removeEventFunc()
    },
    components: {
        sideBar,
        noteList,
        noteInputPreview,
        noteCreating,
    },

};
