import notePreview from './note-preview.cmp.js'

export default {
    props: ['notes'],
    template: `
        <section class="note-list">
            <div v-for="note in notes" :key="note.id" class="notes-pinned-container">
                <note-preview v-if="note.isPinned" :note="note"/>
            </div>
            <div v-for="note in notes" :key="note.id" class="notes-unpinned-container">
                <note-preview v-if="!note.isPinned" :note="note"/>
            </div>
        </section>
    `,
    data() {
        return {
            note: null,
        };
    },
    methods: {
        addNote(note) {
            this.$emit('addingNote', note)
        },

    },
    computed: {},
    created() { },
    components: {
        notePreview,
    }
};