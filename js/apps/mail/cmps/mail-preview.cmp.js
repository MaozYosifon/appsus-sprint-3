export default {
    template: `
    <td  class="mail" :class="isRead" >
        <div @click="setStar" ><i :class="{yellow : mail.isStarred} " class="fas fa-star"></i></div>
        <router-link :to="'/mail/'+mail.id">
            <div>{{mail.subject}}</div>
            <div>{{mail.body}}</div>
            <div>{{mail.sentAt}}</div>
        </router-link>|
        <div>BTN remove</div>
        <div>BTN </div>
        <h3>all should link</h3>
</td>
`, props: ['mail'],
    data() {
        return {};
    },
    created() {
    },
    methods: {
        setStar() {
            this.mail.isStarred =
                console.log(this.mail);
            this.$emit('starred', this.mail.id)
        }
    },
    computed: {
        isStar() {
            return {}
        },
        isRead() {
            return { 'readed-mail': this.mail.isRead }
        }
    },
    unmounted() { },
};