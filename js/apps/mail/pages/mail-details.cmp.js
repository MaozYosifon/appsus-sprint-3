import { mailService } from "../services/mail.services.js";


export default {
    template: `
    <section v-if="mail" class="mail-details">
        <header>sender: {{mail.from}} <span>At : {{mail.sentAt}}</span></header>
        <div  v-if="trollMode">  <a :href="fixedTroll">click Here</a></div>
        <div v-else>{{mail.body}}</div>
    </section>
`,
    data() {
        return {
            trollMode: false,
            mail: null
        };
    },
    created() {

    },
    methods: {},
    mounted() {


    },


    computed: {
        fixedTroll() {
            if (this.mail.body === "https://www.youtube.com/watch?v=j7gKwxRe7MQ") {

                return "https://www.youtube.com/watch?v=j7gKwxRe7MQ"
            }
            else return 'https://www.youtube.com/watch?v=j7gKwxRe7MQ'
        }
    },
    unmounted() { },
    watch: {
        '$route.params.bookId': {
            handler() {
                const id = this.$route.params.mailId
                mailService.getMail(id).then(mail => {
                    this.mail = mail
                    if (this.mail?.body === "https://www.youtube.com/watch?v=j7gKwxRe7MQ") {
                        console.log(this.mail);
                        this.trollMode = true
                    }
                })
            },
            immediate: true
        }

    }
};