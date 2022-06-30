export default {
    template: `
        <section>
            {{info.label}}
            <label v-for="n in info.max" >
                <input type="radio" 
                    :value="n" 
                    @change="reportVal" 
                    v-model="val"
                />
                <span>{{n}}</span>
                &nbsp;&nbsp;
            </label>
        </section>
        `,
        props: ['info'],
        data() {
            return {
                val: '',
            }
        },
        methods: {
            reportVal() {
                this.$emit('setVal', this.val)
            }
        }
} 