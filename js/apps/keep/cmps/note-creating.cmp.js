import { noteService } from '../services/note-services.js'

export default {
    template: `
        <section class="add-note-container">
            <form @submit.prevent.stop="addNote">
                <i class="fa-solid fa-note-sticky" @click.stop="onAddNote('note-txt')" title="Add Text"></i>

                <i class="fa-solid fa-square-check" @click.stop="onAddNote('note-list')" title="Add List"></i>
                <i class="fa-solid fa-camera" @click.stop="onAddNote('note-img')" title="Add Image"></i>
                <i class="fa-brands fa-youtube" @click.stop="onAddNote('note-video')" title="Add Youtube"></i>
                <div>
                    <input class="note-input" title="Add a title" type="text" v-model="note.info.title" placeholder="title">
                    <!-- <input class="note-input" title="Add a note" type="text" v-model="note.info.txt" :placeholder="placeHolder"> -->
                    <input v-if="note.type === 'note-txt'" class="note-input" title="Add a note" type="text" v-model="note.info.txt" :placeholder="placeHolder">
                    <input v-if="note.type === 'note-list'" class="note-input" title="Add a note" type="text" v-model="note.info.txt" :placeholder="placeHolder">
                    <input v-if="note.type === 'note-img'" class="note-input" title="Add a note" type="text" v-model="note.info.url" :placeholder="placeHolder">
                    <input v-if="note.type === 'note-video'" class="note-input" title="Add a note" type="text" v-model="note.info.url" :placeholder="placeHolder">
                </div>
                <button>add</button>
            </form>
        </section>
    `,
    data() {
        return {
            note: noteService.getEmptyNote(),
            // noteType: null,
        };
    },
    created() {


    },
    methods: {
        addNote() {
            console.log('dddd');
            if (this.note.type) {
                this.$emit('addingNote', this.note)
            }

        },
        onAddNote(noteType) {
            this.note = noteService.getEmptyNote()
            console.log('onAddNote function')
            this.note.type = noteType
            // this.note.type = noteType
            console.log(this.note.type);
        },
    },
    computed: {
        placeHolder() {
            switch (this.note.type) {
                case 'note-txt':
                    return 'Take a Text Note'
                case 'note-list':
                    return 'Add Your todo '
                case 'note-img':
                    return 'Enter an img url'
                case 'note-video':
                    return 'enter a youtube link'
                // default:
                //     return 'Take a Text Note'
            }
        },
    },
    unmounted() { },
    components: {
        noteService,
    },
};