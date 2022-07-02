

export default {
    template: `
        <section class="note-text-container">
            <h3>{{info.title}}</h3>
            <h4>{{info.txt}}</h4>
        </section>
          `,
    props: ['info'],
    data() {
        return {
        };
    },
}
