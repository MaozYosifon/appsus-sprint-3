import { storageService } from "../../../services/async-storage-service.js"
import { utilService } from "../../../services/util.service.js";

export const mailService = {
    _createMails,
    deleteMail,
    query,
    getMail,
    toggleRead,
    toggleStar,
    remove,
    saveMail,
    readMail
}

export const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

const MAILS_KEY = 'mails'
// const DELETED_MAILS_KEY = 'deleted'

function saveMail(newMail) {
    return storageService.post(MAILS_KEY, newMail)
}


function getMail(mailId) {
    return storageService.get(MAILS_KEY, mailId);
}

function query() {
    return storageService.query(MAILS_KEY);
}

function toggleRead(mailId) {
    return query()
        .then(mails => {
            var currMail = mails.find(mail => mail.id === mailId);
            currMail.isRead = !currMail.isRead;
            return storageService.put(MAILS_KEY, currMail);

        })
}

function readMail(mailId) {
    return query()
        .then(mails => {
            var currMail = mails.find(mail => mail.id === mailId);
            currMail.isRead = true;
            return storageService.put(MAILS_KEY, currMail);

        })
}

function toggleStar(mailId) {
    return query()
        .then(mails => {
            var currMail = mails.find(mail => mail.id === mailId);
            currMail.isStarred = !currMail.isStarred;
            return storageService.put(MAILS_KEY, currMail);

        })
}

function remove(mailId) {
    return storageService.remove(MAILS_KEY, mailId);
}

function deleteMail(mailId) {
    return query()
        .then(mails => {
            var currMail = mails.find(mail => mail.id === mailId);
            currMail.status = 'deleted';
            return storageService.put(MAILS_KEY, currMail);
        })
}



function _createMails() {
    return query()
        .then(mails => {
            console.log(mails)
            if (!mails || !mails.length) {
                mails = [{
                    id: utilService.makeId(),
                    status: 'inbox',
                    subject: 'ASAP!!',
                    body: 'https://www.youtube.com/watch?v=j7gKwxRe7MQ',
                    isRead: false,
                    isStarred: true,
                    isSent: false,
                    sentAt: 1611237578675,
                    to: 'momo@momo.com',
                    from: 'Unknown'
                }, {
                    id: utilService.makeId(),
                    status: 'inbox',
                    subject: 'ASAP!!',
                    body: 'https://www.youtube.com/watch?v=j7gKwxRe7MQ',
                    isRead: true,
                    isStarred: false,
                    isSent: false,
                    sentAt: 1611237578675,
                    to: 'momo@momo.com',
                    from: 'Unknown'
                }, {
                    id: utilService.makeId(),
                    status: 'inbox',
                    subject: 'ASAP!!',
                    body: 'https://www.youtube.com/watch?v=j7gKwxRe7MQ',
                    isRead: false,
                    isStarred: true,
                    isSent: false,
                    sentAt: 1611237578675,
                    to: 'momo@momo.com',
                    from: 'Unknown'
                },


                ]
                storageService.postMany(MAILS_KEY, mails)
            }
            return mails;
        })
}