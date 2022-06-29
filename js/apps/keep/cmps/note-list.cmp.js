import { noteService } from '../services/note-services.js'
// import noteTxt from '../cmps/note-txt.js'
import notePreview from './note-preview.cmp.js'

export default {
    template: `
    <section class="main-notes-section">
            <div class="note-text-area">
                <input type="text" placeholder="Take a note">
                <form @submit.prevent="onNoteSave"></form>
            </div>

            <section class="note-list">
                    <div v-if="notes" v-for="note in notes" :key="note.id" class="note-preview-container" >
                        <note-preview :note="note" />
                    </div>
            </section>
    </section>
    `,
    data() {
        return {
            notes: null
        };
    },
    created() {
        noteService.query()
            .then(notes => {
                console.log(notes);
                this.notes = notes
            })
    },
    methods: {
        onNoteSave() {
            console.log('notesContent');
        }
    },
    computed: {},
    unmounted() { },
    components: {
        notePreview,
    }
};