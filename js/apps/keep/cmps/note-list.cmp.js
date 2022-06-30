import { noteService } from '../services/note-services.js'
import notePreview from './note-preview.cmp.js'

export default {
    template: `
    <section class="main-notes-section">
        <div class="note-text-area">
            <input type="text" placeholder="Take a note">
            <form @submit.prevent="onNoteSave"></form>
            
        </div>

        
        <section v-if="notes" class="note-list">
            <div v-for="note in notes" :key="note.id">
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
        // noteTxt,
        notePreview,
    }
};