import noteTxt from '../cmps/utils-cmps/note-txt.js'
import noteImg from '../cmps/utils-cmps/note-img.cmp.js'
import noteVideo from '../cmps/utils-cmps/note-video.cmp.js'
import noteTodos from '../cmps/utils-cmps/note-todos.cmp.js'

export default {
    props: ['note'],
    template: `
        <section  class="note-preview">
                <component :is="note.type"  
                    :info="note.info">
                </component>
        </section>
     `,
    data() {
        return {
            info: null
        };
    },
    created() {
        console.log('preview page');
    },
    methods: {},
    computed: {},
    unmounted() { },
    components: {
        noteTxt,
        noteImg,
        noteVideo,
        noteTodos,
    }
};

// {
//     "id": "n101",
//     "type": "note-txt",
//     "isPinned": true,
//     "info": {
//       "txt": "Fullstack Me Baby!"
//     }
//   }