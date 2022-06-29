// export default {
//     template: `
//           <section>
//                 <label>
//                     {{notes.label}}
//                     <datalist>
//                         <option v-for="opt in info.opts" :value="opt" />
//                     </datalist>
//                     <input type="text" v-model="val" @change="reportVal"/>
//                 </label>
//           </section>
//           `,
//     props: ['notes'],
//     data() {
//         return {
//             val: ''
//         }
//     },
//     methods: {
//         reportVal() {
//             this.emit('setVal', this.val)
//         }
//     },
//     computed: {
//         // listId() {
//         //     return 'list' + this._uid
//         // }
//     }
// }
