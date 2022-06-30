import { noteService } from '../services/note-services.js'
import notePreview from './note-preview.cmp.js'
import noteInputPreview from './note-input-preview.cmp.js'

export default {
    template: `
    <section class="main-notes-section">

        <section class="note-text-area">
            <note-input-preview/> 
        </section>

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
                this.notes = notes
            })

    },
    components: {
        noteInputPreview,
        notePreview,
    }
};