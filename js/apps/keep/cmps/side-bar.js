export default {
    template: `
    <section class="side-bar-container">
        <div class="side-bar-btn" :class="{active:isActive}" @click="isActive=!isActive">Notes</div>
        <div class="side-bar-btn" :class="{active:isActive}" @click="isActive=!isActive">Reminders</div>
        <div class="side-bar-btn" :class="{active:isActive}" @click="isActive=!isActive">EditLabels</div>
        <div class="side-bar-btn" :class="{active:isActive}" @click="isActive=!isActive">Archive</div>
        <div class="side-bar-btn" :class="{active:isActive}" @click="isActive=!isActive">Trash</div>
    </section>
`,
    data() {
        return {
            isActive: false
        };
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
};