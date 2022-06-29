import mailPreview from "./mail-preview.cmp.js";
export default {
    template: `
    <section class="mail-list">
        
    <tbody>
        <tr v-for="mail in mails" :key="mail.id">
    <mail-preview :mail="mail"/>
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
    methods: {},
    computed: {},
    unmounted() { },
};