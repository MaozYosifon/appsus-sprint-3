import notePreview from './note-preview.cmp.js'
import noteInputPreview from './note-input-preview.cmp.js'

export default {
    props: ['notes'],
    template: `
    <section  class="main-notes-section">

        <section class="note-text-area">
            <note-input-preview @addingNote="addNote" /> 
        </section>

        <section class="note-list">
            <div v-for="note in notes" :key="note.id">
                <note-preview :note="note" />
            </div>
        </section>
    </section>
    `,
    data() {
        return {};
    },
    methods: {
        addNote(note) {
            this.$emit('addingNote', note)
        },

    },
    created() { },
    components: {
        noteInputPreview,
        notePreview,
    }
};