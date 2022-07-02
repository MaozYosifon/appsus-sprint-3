import notePreview from './note-preview.cmp.js'

export default {
    props: ['notes', 'filterBy'],
    template: `
        <section class="note-list">
            <div v-for="note in pinnedNotesToDisplay" :key="note.id" class="notes-pinned-container">
                <note-preview :note="note"/>
            </div>
            <div v-for="note in unPinnedNotesToDisplay" :key="note.id" class="notes-unpinned-container">
                <note-preview  :note="note"/>
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
    computed: {
        pinnedNotesToDisplay() {

            return this.notes.filter(note => {
                return note.isPinned && note.status === this.filterBy;
            })
        },
        unPinnedNotesToDisplay() {
            return this.notes.filter(note => {
                return !note.isPinned && note.status === this.filterBy
            });

        },
    },
    created() { },
    components: {
        notePreview,
    }
};