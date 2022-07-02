export default {
    template: `
    <section class="side-bar-container">
        <div v-for="(item, index) in navItems" class="side-bar-btn" :class="{active: isActive === index}" @click="isActive = index , onFilter(item)">{{item}}</div>
    </section>
`,
    data() {
        return {
            navItems: [
                "Notes",
                "Archive",
                "Trash"
            ],
            isActive: 0
        };
    },
    created() { },
    methods: {
        onFilter(str) {
            this.$emit('sideBarChanged', str);
        }
    },
    computed: {},
    unmounted() { },
};