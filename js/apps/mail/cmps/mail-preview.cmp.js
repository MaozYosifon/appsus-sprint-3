export default {
    template: `
    <td class="mail">
        <div>isStar</div>
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
    methods: {},
    computed: {},
    unmounted() { },
};