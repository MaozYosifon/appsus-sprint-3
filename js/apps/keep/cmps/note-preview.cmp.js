export default {
    props: ['note'],
    template: `
    <section class="note-preview">
        <p>{{note.id}}</p>
    </section>
    `,
    data() {
        return {

        };
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
    components: {
    }
};

// {
//     "id": "n101",
//     "type": "note-txt",
//     "isPinned": true,
//     "info": {
//       "txt": "Fullstack Me Baby!"
//     }
//   }