export default {
  template: `
 <header class="header-layout flex space-between align-items">
    <div @click.prevent="$router.push('/')" class="logo">
      <img class="logo-img" src="../img/mail/33339.png" alt="" srcset="">
        <h3 class="logo-head" >Appsuss</h3>
    </div>
    <nav class="nav-bar">

                <router-link to="/"><i class="fas fa-home"></i></router-link>|
                <router-link to="/Mail"> <i class="fa fa-envelope" aria-hidden="true"></i></router-link>|
                <router-link to="/Keep"><i class="fa-solid fa-note-sticky"></i></router-link>|
                <router-link to="/about"><i class="fa-solid fa-address-card"></i></router-link>|
            </nav>
            
 </header>
`,
  data() {
    return {
    }
  },
  methods: {},
  computed: {}
}