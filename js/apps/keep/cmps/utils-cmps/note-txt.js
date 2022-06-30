

export default {
    template: `
        <section>
            <h3>{{info.title}}</h3>
            <h4>{{info.txt}}</h4>
        </section>
          `,
    props: ['info'],
    created() {
        console.log(this.info);
        console.log('note-text-page');
    },
}
