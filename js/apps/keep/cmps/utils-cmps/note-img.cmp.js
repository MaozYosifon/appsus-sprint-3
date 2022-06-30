
export default {
    template: `
        <section>
            <img width="150" height="150" class="note-img" :src="info.url">
            <h4>{{info.txt}}</h4>
        </section>
          `,
    props: ['info'],
    created() {
        console.log(this.info);
        console.log('note-image-page');
    },
}
