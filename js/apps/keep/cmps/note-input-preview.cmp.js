export default {
    template: `
        <label class="note-input-container">
            <input class="note-input" type="text" placeholder="Take a note">
            <div class="note-type-btn">
            <i class="fa-solid fa-square-check" @click=""></i>
            <i class="fa-solid fa-camera" @click=""></i>
            <i class="fa-brands fa-youtube" @click=""></i>
            </div>
        </label>       
    `,
    data() {
        return {};
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
};