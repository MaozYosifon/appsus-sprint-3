export default {
    template: `
          <!-- <section>
                <label>
                    {{notes.label}}
                    <datalist>
                        <option v-for="opt in info.opts" :value="opt" />
                    </datalist>
                    <input type="text" v-model="val" @change="reportVal"/>
                </label>
          </section> -->

          <section>
            <!-- <datalist :id="listId"> -->
                <!-- <option v-for="todo in info.todos" :value="opt" /> -->
            <!-- </datalist> -->
            <label><div v-if="info.label">
                {{info.label}}
            </div>
                <input type="text" v-model="val" 
                @change="reportVal" :list="listId" />
            </label>  
        </section>

          `,
    props: ['info'],
    data() {
        return {
            val: ''
        }
    },
    methods: {
        reportVal() {
            this.emit('setVal', this.val)
        }
    },
    computed: {
        listId() {
            return 'list' + this._uid
        }
    },
    created() {
        console.log('1356456365');
        console.log(this);
    },
}
