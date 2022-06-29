import { mailService } from "../services/mail.services.js";
import mailPreview from "./mail-preview.cmp.js";
export default {
    template: `
    <section class="mail-list">
        
    <tbody>
        <tr v-for="mail in mails" :key="mail.id">
    <mail-preview @fullyDelete="fullDelete" @remove="deleteMail" @click="setRead(mail)" @starred="onToggleStar" :mail="mail"/>
        </tr>
    </tbody>
    </section>


`, components: {
        mailPreview
    },
    props: ['mails'],
    data() {
        return {};
    },
    created() { },
    methods: {
        fullDelete(mail) {
            this.$emit('fullyDeleted', mail)
        },
        deleteMail(mail) {
            this.$emit('deleted', mail)
        },
        setRead(mail) {
            this.$emit('readed', mail.id)
        },
        onToggleStar(id) {
            mailService.toggleStar(id).then(res => this.$emit('mailStarred'))
        }
    },
    computed: {},
    unmounted() { },
};