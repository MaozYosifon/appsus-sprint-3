export default {
    props: ['item'],
    template: `
        <li @click="isActive = !isActive" :class="{'done': isActive}">{{item.txt}}</li>
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