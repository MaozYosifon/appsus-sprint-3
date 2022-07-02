export default {
    template: `
        <section class="changeColor-btn-container">
            <div @click="updateColor(color1)" :style="{'background-color':color1}" title="Pink"></div>
            <div @click="updateColor(color2)" :style="{'background-color':color2}" title="Orange"></div>
            <div @click="updateColor(color3)" :style="{'background-color':color3}" title="Red"></div>
            <div @click="updateColor(color4)" :style="{'background-color':color4}" title="Blue"></div>
            <div @click="updateColor(color5)" :style="{'background-color':color5}" title="Green"></div>
            <div @click="updateColor(color6)" :style="{'background-color':color6}" title="Gray"></div>
            <div @click="updateColor(color7)" :style="{'background-color':color7}" title="DarkGray"></div>
            <div @click="updateColor(color8)" :style="{'background-color':color8}" title="White"></div>
        </section>
    `,
    data() {
        return {
            color1: '#f368e0',
            color2: '#ff9f43',
            color3: '#ee5253',
            color4: '#0abde3',
            color5: '#10ac84',
            color6: '#c8d6e5',
            color7: '#576574',
            color8: '#ecf0f1',
        };
    },
    created() { },
    methods: {
        updateColor(color) {
            this.$emit('updateColor', color)
        }
    },
    computed: {},
    unmounted() { },
};