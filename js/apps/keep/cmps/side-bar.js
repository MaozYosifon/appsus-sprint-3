export default {
    template: `
    <section class="side-bar-container">
        <div v-for="(item, index) in navItems" class="side-bar-btn" :class="{active: isActive === index}" @click="isActive = index">{{item}}</div>
    </section>
`,
    data() {
        return {
            navItems: [
                "Notes",
                "Reminders",
                "EditLabels",
                "Archive",
                "Trash"
            ],
            isActive: 0
        };
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
};