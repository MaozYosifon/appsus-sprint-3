export default {
    template: `
        <!-- <router-link :to="'/mail/'+mail.id"> -->
    <td @click="move(mail.id)" class="mail" :class="isRead" >
        <div class="star" @click.stop="setStar" ><i :title="isStarred" :class="isStar"></i></div>
            <div title="Subject" class="mail-subject">{{mail.subject}}</div>
            <div title="Mail Content" class="mail-body">{{lessText}}</div>
            <div title="Sent At" class="mail-date">{{mail.sentAt}}</div>
            <div class="mail-trash" @click.stop="onRemove(mail)"><i title="Delete" class="fa fa-trash" aria-hidden="true"></i></div>
            <!-- <div class="mail-label" @click.stop>label </div> -->
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
        setStar() {
            this.mail.isStarred =
                console.log(this.mail);
            this.$emit('starred', this.mail.id)
        }
    },
    computed: {
        isStarred() {
            if (this.mail.isStarred) return 'UnStar'
            else return 'Star'
        },
        isStar() {
            if (this.mail.isStarred) {
                return "fas fa-star yellow"
            } else return "far fa-star"
        },
        isRead() {
            return { 'readed-mail': this.mail.isRead }
        },
        lessText() {
            const lessTxt = this.mail.body.substring(0, 40).concat('...')
            return lessTxt
        }
    },
    unmounted() { },
};