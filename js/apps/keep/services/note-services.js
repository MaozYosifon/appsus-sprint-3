import { utiStorageService } from '../../../services/storage-service.js';
import { storageService } from '../../../services/async-storage-service.js';

const NOTES_KEY = 'notes';
_createNotes();

export const noteService = {
    query,
    remove,
    save,
    get,
};

//gets all the notes
function query() {
    return storageService.query(NOTES_KEY)
    // return utiStorageService.loadFromStorage(NOTES_KEY);
}

//remove an note
function remove(noteId) {
    // return Promise.reject('Big Error Badd')
    return storageService.remove(NOTES_KEY, noteId)
}

//get an note by id
function get(noteId) {
    return storageService.get(NOTES_KEY, noteId)
}

//save a note or update
function save(note) {
    if (note.id) return storageService.put(NOTES_KEY, note)
    else return storageService.post(NOTES_KEY, note)
}

function _createNotes() {
    let notes = utiStorageService.loadFromStorage(NOTES_KEY);
    if (!notes || !notes.length) {
        const notes = [
            {
                id: "n101",
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: "Fullstack Me Baby!"
                }
            },
            {
                id: "n102",
                type: "note-img",
                isPinned: false,
                info: {
                    url: "http://some-img/me",
                    title: "Bobi and Me"
                },
                style: {
                    backgroundColor: "#00d"
                }
            },
            {
                id: "n103",
                type: "note-todos",
                isPinned: false,
                info: {
                    label: "Get my stuff together",
                    todos: [
                        { txt: "Driving liscence", doneAt: null },
                        { txt: "Coding power", doneAt: 187111111 }
                    ]
                }
            }
        ];

        utiStorageService.saveToStorage(NOTES_KEY, notes);
    }
    return notes;
}



