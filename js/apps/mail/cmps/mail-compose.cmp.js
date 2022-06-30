export default {
    template: `
     <div class="email-compose">
        <div class="compose-nav">
            <button class="close-compose" @click="$emit('closeCompose')"><i class="fas fa-times"></i></button>
        </div>
        <div class="mobile-compose-nav">
    
            <button title="Return" @click="$emit('closeCompose')" @click="sendEmail">
                <i class="fas">Send</i>
            </button>
        </div>
        <form action="">
            <input v-model="mailData.sentBy" type="email" placeholder="To" required>
            <input v-model="mailData.subject" type="text" placeholder="Subject">

            <!-- <span v-if="replyBody">{{replyBody}}</span> -->
            <textarea class="compose-body" v-model="mailData.body" name="" id="" cols="30" rows="16"></textarea>
            <button class="send-email" @click="sendEmail">Send</button>
        </form>
    </div>
`,
    data() {
        return {
            mailData: {
                sentBy: '',
                subject: '',
                body: '',
                status: 'sent',
                isRead: true,
                sentAt: null,
                id: null
            },
        };
    },
    created() { },
    methods: {
        sendEmail() {
            if (!this.mailData.sentBy) return
            this.$emit('closeCompose')
            this.$emit('sent', this.mailData)
        },
    },
    computed: {
        currDate() {
            return Date.now()
        }
    },
    unmounted() { },
};