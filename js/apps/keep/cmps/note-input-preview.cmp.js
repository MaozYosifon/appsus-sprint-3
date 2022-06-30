export default {
    template: `
        <label class="note-input-container">
             <form @submit.prevent="addNote">
                <input class="note-input" title="Add a note" type="text" v-model="note.text" :placeholder="placeHolder">
            </form>
            <div class="note-type-btn">
                <i class="fa-solid fa-square-check" @click="onAddNote('list')" title="Add List"></i>
                <i class="fa-solid fa-camera" @click="onAddNote('img')" title="Add Image"></i>
                <i class="fa-brands fa-youtube" @click="onAddNote('youtube')" title="Add Youtube"></i>
            </div> 
        </label>       
    `,
    data() {
        return {
            note: {
                type: null,
                info: {
                    title: null,
                    url: null,
                    todos: null,
                    text: null,
                },
            },
            noteType: 'text'
        };
    },
    created() {
    },
    methods: {
        addNote() {
            this.$emit('addingNote', this.note)
        },
        onAddNote(str) {
            this.noteType = str
            console.log(str);
        },

    },
    computed: {
        placeHolder() {
            switch (this.noteType) {
                case 'text':
                    this.note.info.type = 'note-txt'
                    return 'Take a Text Note'

                case 'list':
                    this.note.info.type = 'note-todos'
                    return 'Add Your todo '

                case 'img':
                    this.note.info.type = 'note-img'
                    return 'Enter an img url'

                case 'youtube':
                    this.note.info.type = 'note-video'
                    return 'enter a youtube link'



            }

        },
    },
    unmounted() { },
};