export default {
    props: ["text"],
    template: `
    <p><b>description:</b> {{textLength}}</p>
    <button v-if="longText" @click="onReadMore">{{readMoreTxt}}</button>
`,
    data() {
        return {
            longText: this.text.length > 100,
            readMore: false
        };
    },
    created() { },
    methods: {
        onReadMore() {
            this.readMore = !this.readMore

        }
    },
    computed: {
        textLength() {
            if (!this.longText) return this.text
            return this.readMore ? this.text : this.text.substring(0, 100) + '...'
        },
        readMoreTxt() {
            if (!this.readMore) return 'read more'
            return 'read less'
        }
    },
    unmounted() { },
};