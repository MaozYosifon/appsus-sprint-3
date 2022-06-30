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
    readMail,
    _sendMail
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

function _sendMail(mail) {
    mail.id = utilService.makeId;
    mail.sentAt = new Date().toISOString().slice(0, 10),
        mail.sentBy = loggedinUser.email
    saveMail(mail);
    return query()
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

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
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
                    sentAt: '30 - 06 - 2012',
                    to: 'momo@momo.com',
                    from: 'Unknown'
                }, {
                    id: utilService.makeId(),
                    status: 'inbox',
                    subject: 'Read ME',
                    body: 'Alright you can read',
                    isRead: true,
                    isStarred: false,
                    isSent: false,
                    sentAt: '17 - 09 - 2020',
                    to: 'momo@momo.com',
                    from: 'SPAM'
                },
                {
                    id: utilService.makeId(),
                    status: 'inbox',
                    subject: 'New Car',
                    body: 'New car ready for you to pick up at @#!@#!@#! , We are wating',
                    isRead: false,
                    isStarred: true,
                    isSent: false,
                    sentAt: '29 - 06 - 2022',
                    to: 'momo@momo.com',
                    from: 'Unknown'
                },
                {
                    id: utilService.makeId(),
                    status: 'inbox',
                    subject: 'Verify your account',
                    body: 'Click here to verify your account',
                    isRead: false,
                    isStarred: true,
                    isSent: false,
                    sentAt: '28 - 06 - 2022',
                    to: 'momo@momo.com',
                    from: 'Unknown'
                },
                {
                    id: utilService.makeId(),
                    status: 'inbox',
                    subject: 'Billing Recipt',
                    body: 'Your recipt is ready to receive',
                    isRead: false,
                    isStarred: true,
                    isSent: false,
                    sentAt: ' 27 - 06 - 2022',
                    to: 'momo@momo.com',
                    from: 'Unknown'
                },
                {
                    id: utilService.makeId(),
                    status: 'inbox',
                    subject: 'New Car',
                    body: 'New car ready for you to pick up at @#!@#!@#! , We are wating',
                    isRead: false,
                    isStarred: true,
                    isSent: false,
                    sentAt: '26 - 06 - 2022',
                    to: 'momo@momo.com',
                    from: 'Unknown'
                },
                {
                    id: utilService.makeId(),
                    status: 'inbox',
                    subject: 'New Car',
                    body: 'New car ready for you to pick up at @#!@#!@#! , We are wating',
                    isRead: false,
                    isStarred: true,
                    isSent: false,
                    sentAt: '25 - 06 - 2022',
                    to: 'momo@momo.com',
                    from: 'Unknown'
                },


                ]
                storageService.postMany(MAILS_KEY, mails)
            }
            return mails;
        })
}