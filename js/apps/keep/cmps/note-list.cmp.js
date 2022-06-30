import { noteService } from '../services/note-services.js'
import noteTxt from '../cmps/note-txt.js'
import notePreview from './note-preview.cmp.js'

export default {
    template: `
    <section class="main-notes-section">
        <div class="note-text-area">
            <input type="text" placeholder="Take a note">
            <form @submit.prevent="onNoteSave"></form>
            
        </div>

        <!-- <note-preview :note="note" /> -->
    
        <section v-if="notes" class="note-list">
            <div v-for="(note,idx) in notes" :key="note.id" class="note-preview-container" >
                <component :is="note.type"  
                    :info="note.info">
                </component>
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
        noteTxt,
        notePreview,
    }
};