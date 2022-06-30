export default {
    template: `
 <section class="home-page">
    <section class="home-page-content">

        <img class="home-icon-img" src="../img/mail/horse-icon.png" alt="" srcset="">
        <div class="home-page-mail-container">
            <h2 class="home-page-mail-header" >Use Our Mail Services:</h2>
            <img @click="$router.push('/mail')" class="mail-img" src="../img/mail/mail-logo3.png" alt="">   
        </div>

        <div class="home-page-note-container">
        <h2 class="home-page-note-header" >Use Our Note Services:</h2>
            <img @click="$router.push('/keep')" class="keep-img" src="../img/keep-logo.png" alt="">
        </div>
 </section>
 </section>
`,
    data() {
        return {};
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
};