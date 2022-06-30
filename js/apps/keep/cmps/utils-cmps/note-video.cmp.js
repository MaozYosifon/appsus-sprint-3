
export default {
    template: `
        <section class="note-video-container">
            <h4>{{info.title}}</h4>
            <iframe width="220" height="115" :src="info.url"> </iframe>
        </section>
    `,
    props: ['info'],
    data() {
        return {
        };
    },
    methods: {
        toggleDone() { },
    },
    computed: {
    },
    created() {
        // console.log(this.info.url);
        console.log('note-video-page');
    },
}
