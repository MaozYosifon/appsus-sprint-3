export default {
    template: `
        <!-- <router-link :to="'/mail/'+mail.id"> -->
    <td @click="move(mail.id)" class="mail" :class="isRead" >
        <div @click.stop="setStar" ><i :class="{yellow : mail.isStarred} " class="fas fa-star"></i></div>
            <div>{{mail.subject}}</div>
            <div>{{lessText}}</div>
            <div>{{mail.sentAt}}</div>
            <div @click.stop="onRemove(mail)"><i class="fa fa-trash" aria-hidden="true"></i></div>
            <div @click.stop>BTN </div>
        </td>
    <!-- </router-link>| -->
`, props: ['mail'],
    data() {
        return {};
    },
    created() {
    },
    methods: {
        onRemove(mail) {
            if (mail.status != 'deleted') {
                this.$emit('remove', mail);
            } else {
                this.$emit('fullyDelete', mail)
            }
        },
        move(id) {
            this.$router.push(`/mail/${id}`);
        },
        check() {
            console.log('asd');
        },
        setStar() {
            this.mail.isStarred =
                console.log(this.mail);
            this.$emit('starred', this.mail.id)
        }
    },
    computed: {
        isStar() {
            return {}
        },
        isRead() {
            return { 'readed-mail': this.mail.isRead }
        },
        lessText() {
            const lessTxt = this.mail.body.substring(0, 30).concat('...')
            return lessTxt
        }
    },
    unmounted() { },
};