
export default {
    template: `
        <section class="note-video-container">
            <h4 @click="separate">{{info.title}}</h4>
            <iframe width="220" height="115" :src="separate"></iframe>
        </section>
    `,
    props: ['info'],
    computed: {
        separate() {
            let endOfUrl = this.info.url.split('=')
            let newUrl = `https://www.youtube.com/embed/${endOfUrl[endOfUrl.length - 1]}`
            return newUrl
        }
    }
}
