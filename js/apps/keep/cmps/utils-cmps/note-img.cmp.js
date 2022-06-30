
export default {
    template: `
        <section class="note-image-container">
            <h4>{{info.txt}}</h4>
            <img  class="note-img" :src="info.url">
        </section>
          `,
    props: ['info'],
}
