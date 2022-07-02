import noteTxt from '../cmps/utils-cmps/note-txt.js'
import noteImg from '../cmps/utils-cmps/note-img.cmp.js'
import noteVideo from '../cmps/utils-cmps/note-video.cmp.js'
import noteTodos from '../cmps/utils-cmps/note-todos.cmp.js'
import noteEdit from '../cmps/utils-cmps/note-edit.cmp.js'

export default {
    props: ['note'],
    template: `
        <section class="note-preview" :style="note.style" >
            <component :is="note.type"
                :info="note.info">
            </component>
            <note-edit :note="note"/>
        </section>
     `,
    data() {
        return {};
    },
    methods: {
    },
    components: {
        noteTxt,
        noteImg,
        noteVideo,
        noteTodos,
        noteEdit,
    }
};
