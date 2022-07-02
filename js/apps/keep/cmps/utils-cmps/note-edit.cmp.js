import { eventBus } from '../../../../services/eventBus-service.js'
import { noteService } from '../../services/note-services.js'
import selectNoteColor from '../edit-note/select-note-color.js'

export default {
    template: `
    <section class="note-edit-container">
        <div><i class="fa-solid fa-palette" title="Change background color" @click.stop="onChangeBackgroundColor" ></i>
            <selectNoteColor v-if="isChangeColor" class="changeColorContainer" @updateColor="updateColor"/>
        </div>
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
            if (this.note.status === 'archive') {
                this.note.status = 'notes'
                noteService.save(this.note)
                return
            }
            this.note.status = 'archive';
            noteService.save(this.note)

        },
        updateColor(color) {
            this.note.style.backgroundColor = color
            noteService.save(this.note)
        },
        onSetPin() {
            console.log(this.note.isPinned)
            this.note.isPinned = !this.note.isPinned
        },
        onSendMail() {
            //TODO: send mail
        },
        onRemoveNote() {
            if (this.note.status === 'trash') {
                eventBus.emit('remove-note', this.note.id)
            }
            this.note.status = 'trash'
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