
export default {
    template: `
 <section class="flex nav-bar-content">
    <button>Compose +</button>
    <div @click.prevent="onSet('inbox')">Inbox</div>
    <div @click.prevent="onSet('starred')">Starred</div>
    <div @click.prevent="onSet('sent')">sent mails</div>
    <div @click.prevent="onSet('drafts')">drafts</div>
    <div @click.prevent="onSet('deleted')">Deleted</div>
    <div>%</div>

 </section>
`,
    data() {
        return {};
    },
    created() { },
    methods: {
        onSet(str) {
            console.log(str);
            this.$emit('filter', str);
        }
    },
    computed: {},
    unmounted() { },
};