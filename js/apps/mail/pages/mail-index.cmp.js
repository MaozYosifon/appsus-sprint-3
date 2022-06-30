import mailNavBar from "../cmps/mail-nav-bar.cmp.js";
import { mailService } from "../services/mail.services.js"
import mailList from "../cmps/mail-list.cmp.js";
import mailCompose from "../cmps/mail-compose.cmp.js";
// import { showSuccessMsg, showErrorMsg } from "../../../services/eventBus-service.js";

export default {
    template: `
<section  class="flex mail-main-container">
    <div class="nav-bar-container">
        <mail-nav-bar @txtFiltering="onTxtSet" @composing="onCompose" :mails="mails" @filter="SetFilter"/>
    </div>
    <div v-if="mails" class="mail-list-container">
<mail-list @fullyDeleted="onFullyDeleted" @deleted="deletedMail" @readed="readMail" @mailStarred="onMailStar" v-if="mails" :mails="mailsToDispley" />
    </div>
    <mail-compose @sent="sendMail" @closeCompose="onComposeClose" v-if="isComposing" />
</section>

`,
    components: {
        mailNavBar,
        mailList,
        mailCompose,
    },
    data() {
        return {
            isComposing: false,
            mails: null,
            filterBy: {
                status: 'inbox',
                txt: null

            }
        };
    },
    created() {
        mailService._createMails().then(mails => this.mails = mails)
    },
    methods: {
        onTxtSet(txt) {
            this.filterBy.txt = txt;
            if (!this.filterBy.txt) this.filterBy.txt = null
        },
        sendMail(mail) {
            this.onComposeClose
            mailService._sendMail(mail).then(mails => {
                this.mails = mails
            })

        },
        onComposeClose() {
            console.log('im closing');
            this.isComposing = false
        },
        onCompose() {
            console.log('asd')
            this.isComposing = true
            console.log(this.isComposing);
        },
        onFullyDeleted(mail) {
            console.log(mail.id);
            mailService.remove(mail.id)
                .then(res => mailService._createMails())
                .then(mails => this.mails = mails)

        },
        deletedMail(mail) {
            mailService.deleteMail(mail.id)
                .then(res => mailService._createMails())
                .then(mails => this.mails = mails)
        },
        readMail(id) {
            mailService.readMail(id)
                .then(res => mailService._createMails()
                    .then(mails => this.mails = mails))

        },
        SetFilter(str) {
            this.filterBy.status = str
        },
        onMailStar() {
            mailService._createMails().then(mails => this.mails = mails)
        }
    },
    computed: {
        mailsToDispley() {
            console.log(this.filterBy.txt);
            if (this.filterBy === null) return this.mails
            if (this.filterBy.txt) {
                const regex = new RegExp(this.filterBy.txt, 'i');
                return this.mails.filter(mail => { return regex.test(mail.subject) });
            }
            if (this.filterBy.status != 'starred') {
                return this.mails.filter((mail) => {
                    return mail.status === this.filterBy.status
                })
            }
            else if (this.filterBy.status === 'starred') {
                return this.mails.filter((mail) => {
                    return mail.isStarred === true
                })
            }

            console.log(this.mails);
        }
    },
    unmounted() { },
};