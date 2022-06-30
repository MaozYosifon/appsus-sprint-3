
export default {
    template: `
 <section class="flex nav-bar-content">
    <div class="search-input"><input @input="onFilter" v-model="txt" type="text"></div>
    <button @click="onCompose">Compose +</button>
    <div @click.prevent="onSet('inbox')"><i class="fa-solid fa-inbox"></i>&nbspInbox</div>
    <div @click.prevent="onSet('starred')"><i class="fa-solid fa-star"></i>&nbspStarred</div>
    <div @click.prevent="onSet('sent')"><i class="fa-solid fa-inbox-out"></i>&nbsp sent mails</div>
    <div @click.prevent="onSet('drafts')"><i class="fa-brands fa-firstdraft"></i>&nbspDrafts</div>
    <div @click.prevent="onSet('deleted')"><i class="fa-solid fa-trash-can"></i>&nbspDeleted</div>
    <div v-if="mails">{{readedMails}}/{{mailCount}}</div>

 </section>
`, props: ['mails'],
    data() {
        return {
            txt: null
        };
    },
    created() { },
    methods: {
        onFilter() {
            this.$emit('txtFiltering', this.txt)
        },
        onCompose() {
            this.$emit('composing');

        },
        onSet(str) {
            console.log(str);
            this.$emit('filter', str);
        }
    },
    computed: {
        mailCount() {

            return this.mails.length
        },
        readedMails() {
            const mailList = this.mails.filter((mail) => {
                return mail.isRead === true
            }).length
            return mailList

        }
    },
    unmounted() { },
};