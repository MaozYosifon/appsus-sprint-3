import { eventBus } from '../../../../services/eventBus-service.js'
import { noteService } from '../../services/note-services.js'
import selectNoteColor from '../edit-note/select-note-color.js'

export default {
    template: `
    <section class="note-edit-container">
        <div><i class="fa-solid fa-palette" title="Change background color" @click.stop="onChangeBackgroundColor" ></i>
            <selectNoteColor v-if="isChangeColor" class="changeColorContainer" @updateColor="updateColor"/>
        </div>
        <div><i class="fa-solid fa-pen-to-square" title="Edit note" @click="onEditNote"></i></div>
        <div><i class="fa-solid fa-trash-can" title="Remove note" @click="onRemoveNote"></i></div>
        <div><i class="fa-solid fa-envelope-open-text" title="Send as mail" @click="onSendMail"></i></div>
        <div><i class="fa-solid fa-thumbtack" title="Pin note" @click="onSetPin"></i></div>
        <div><i class="fa-solid fa-box-archive" title="archive" @click="onArchive"></i></div>
    </section>
`,
    props: ['note'],
    data() {
        return {
            isChangeColor: false,
        };
    },
    created() { },
    methods: {
        onArchive() {
            //TODO: SHOW THIS NOTE OA ARCHIVE
        },
        updateColor(color) {
            this.note.style.backgroundColor = color
            noteService.save(this.note)
                .then(res => console.log(res))
        },
        onEditNote() {
            //TODO: edit the note
        },
        onSetPin() {
            console.log(this.note.isPinned)
            this.note.isPinned = !this.note.isPinned
        },
        onSendMail() {
            //TODO: send mail
        },
        onRemoveNote() {
            eventBus.emit('remove-note', this.note.id)
        },
        onChangeBackgroundColor() {
            this.isChangeColor = !this.isChangeColor
        },
    },
    components: {
        selectNoteColor
    },
    computed: {},
    unmounted() { },
};